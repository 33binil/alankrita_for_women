import { useState, useEffect, useMemo } from 'react';
import { PRODUCTS } from './data/storeData';
import Header from './components/Header';
import Hero from './components/Hero';
import CategoryStrip from './components/CategoryStrip';
import NewArrivals from './components/NewArrivals';
import PromoBanners from './components/PromoBanners';
import Testimonials from './components/Testimonials';
import InstagramGallery from './components/InstagramGallery';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import ProductModal from './components/ProductModal';
import SearchModal from './components/SearchModal';
import InfoModal from './components/InfoModal';

export default function App() {
  const [activeFilter, setActiveFilter] = useState('new-in');
  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = localStorage.getItem('elanora_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [wishlistIds, setWishlistIds] = useState(() => {
    try {
      const saved = localStorage.getItem('elanora_wishlist');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [infoModalKey, setInfoModalKey] = useState(null);

  useEffect(() => {
    try {
      localStorage.setItem('elanora_cart', JSON.stringify(cartItems));
    } catch {
      // Ignore storage quota errors
    }
  }, [cartItems]);

  useEffect(() => {
    try {
      localStorage.setItem('elanora_wishlist', JSON.stringify(wishlistIds));
    } catch {
      // Ignore storage quota errors
    }
  }, [wishlistIds]);

  const filteredProducts = useMemo(() => {
    if (activeFilter === 'new-in') {
      return PRODUCTS.filter((p) => p.isNewArrival);
    }
    if (activeFilter === 'all') {
      return PRODUCTS;
    }
    if (activeFilter === 'sale' || activeFilter === 'summer') {
      return PRODUCTS.filter((p) => p.onSale || p.category === 'dresses' || p.category === 'tops');
    }
    return PRODUCTS.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

  const wishlistProducts = useMemo(
    () => PRODUCTS.filter((p) => wishlistIds.includes(p.id)),
    [wishlistIds]
  );

  const cartCount = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.quantity, 0),
    [cartItems]
  );

  const scrollToCatalog = () => {
    const el = document.getElementById('new-arrivals');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSelectFilter = (filterValue, shouldScroll = true) => {
    setActiveFilter(filterValue);
    if (shouldScroll) {
      scrollToCatalog();
    }
  };

  const handleToggleWishlist = (productId) => {
    setWishlistIds((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  const handleAddToCart = (product, size = 'M') => {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.id === product.id && i.size === size);
      if (existing) {
        return prev.map((i) =>
          i.id === product.id && i.size === size
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      }
      return [...prev, { ...product, size, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const handleQuickAdd = (product) => {
    const defaultSize = product.sizes?.includes('M') ? 'M' : product.sizes?.[0] || 'One Size';
    handleAddToCart(product, defaultSize);
  };

  const handleUpdateQty = (productId, size, newQty) => {
    if (newQty <= 0) {
      handleRemoveItem(productId, size);
      return;
    }
    setCartItems((prev) =>
      prev.map((i) =>
        i.id === productId && i.size === size ? { ...i, quantity: newQty } : i
      )
    );
  };

  const handleRemoveItem = (productId, size) => {
    setCartItems((prev) => prev.filter((i) => !(i.id === productId && i.size === size)));
  };

  return (
    <div id="top" className="min-h-screen flex flex-col bg-[#FBF7F4] text-[#231D18]">
      <Header
        cartCount={cartCount}
        wishlistCount={wishlistIds.length}
        activeFilter={activeFilter}
        onSelectFilter={handleSelectFilter}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenInfoModal={(key) => setInfoModalKey(key)}
      />

      <main className="flex-1">
        <Hero
          onShopNewArrivals={() => handleSelectFilter('new-in')}
          onExploreCollections={() => handleSelectFilter('all')}
        />

        <CategoryStrip
          activeFilter={activeFilter}
          onSelectCategory={(cat) => handleSelectFilter(cat)}
        />

        <NewArrivals
          products={filteredProducts}
          activeFilter={activeFilter}
          wishlistIds={wishlistIds}
          onToggleWishlist={handleToggleWishlist}
          onQuickAdd={handleQuickAdd}
          onOpenProduct={(product) => setSelectedProduct(product)}
          onShowAll={() => setActiveFilter('all')}
          onResetFilter={() => setActiveFilter('new-in')}
        />

        <PromoBanners
          onShopSummer={() => handleSelectFilter('summer')}
          onShopAccessories={() => handleSelectFilter('accessories')}
        />

        <Testimonials />

        <InstagramGallery />

        <Newsletter />
      </main>

      <Footer
        onFilterSelect={(filter) => handleSelectFilter(filter)}
        onOpenInfoModal={(key) => setInfoModalKey(key)}
      />

      <CartDrawer
        isOpen={isCartOpen}
        items={cartItems}
        onClose={() => setIsCartOpen(false)}
        onUpdateQty={handleUpdateQty}
        onRemoveItem={handleRemoveItem}
        onClearCart={() => setCartItems([])}
      />

      <ProductModal
        product={selectedProduct}
        isWishlisted={selectedProduct ? wishlistIds.includes(selectedProduct.id) : false}
        onClose={() => setSelectedProduct(null)}
        onToggleWishlist={handleToggleWishlist}
        onAddToCart={handleAddToCart}
      />

      <SearchModal
        isOpen={isSearchOpen}
        products={PRODUCTS}
        onClose={() => setIsSearchOpen(false)}
        onSelectProduct={(product) => setSelectedProduct(product)}
      />

      <InfoModal
        modalKey={infoModalKey}
        wishlistProducts={wishlistProducts}
        onClose={() => setInfoModalKey(null)}
        onSelectProduct={(product) => setSelectedProduct(product)}
      />
    </div>
  );
}
