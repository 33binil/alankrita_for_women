import { useState, useRef, useEffect } from 'react';
import { Search, User, ShoppingBag, ChevronDown, Menu, X } from 'lucide-react';
import { BRAND, CATEGORIES } from '../data/storeData';

export default function Header({
  cartCount,
  wishlistCount,
  activeFilter,
  onSelectFilter,
  onOpenCart,
  onOpenSearch,
  onOpenInfoModal,
}) {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    function handleOutsideClick(e) {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  const handleNavClick = (filterValue) => {
    onSelectFilter(filterValue);
    setOpenDropdown(null);
    setMobileMenuOpen(false);
  };

  const shopItems = [
    { label: 'All Collections', value: 'all' },
    ...CATEGORIES.map((cat) => ({ label: cat.label, value: cat.id })),
  ];

  const collectionItems = [
    { label: 'New Arrivals', value: 'new-in' },
    { label: 'Bridal & Festive Wear', value: 'festive' },
    { label: 'Daily & Ethnic Kurtis', value: 'kurtis' },
    { label: 'Kids Wear & Pattu Pavada', value: 'kids-wear' },
    { label: 'Festive Offers', value: 'sale' },
  ];

  return (
    <header ref={navRef} className="sticky top-0 z-40 w-full">
      {/* Slim Top Announcement Bar */}
      <div className="bg-[#EFEAE6] text-[#3D352E] border-b border-[#E5DDD5]">
        <div className="w-full px-4 sm:px-6 lg:px-6 h-8 lg:h-10 flex items-center justify-between text-[11px] lg:text-[13px] tracking-[0.01em]">
          <p className="truncate">
            <span>Custom Tailoring for Women &amp; Kids</span>
            <span className="mx-2.5 text-[#9B8F84]" aria-hidden="true">
              |
            </span>
            <span className="hidden sm:inline">Free Pan-India Shipping Over ₹2,999 · Worldwide Delivery</span>
            <span className="sm:hidden">Free Shipping Over ₹2,999</span>
          </p>
          <div className="hidden sm:flex items-center gap-6 shrink-0">
            <button
              type="button"
              onClick={() => onOpenInfoModal('track-order')}
              className="hover:text-[#1E1813] transition-colors cursor-pointer whitespace-nowrap"
            >
              Track Order
            </button>
            <button
              type="button"
              onClick={() => onOpenInfoModal('contact')}
              className="hover:text-[#1E1813] transition-colors cursor-pointer whitespace-nowrap"
            >
              WhatsApp Care
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="bg-[#FFFCF9]/95 backdrop-blur-sm border-b border-[#EFEAE6]">
        <div className="w-full px-4 sm:px-6 lg:px-6 h-16 sm:h-[72px] lg:h-[84px] flex items-center justify-between gap-4">
          {/* Mobile Menu Trigger + Brand Wordmark */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="lg:hidden p-2 -ml-2 text-[#1E1813] hover:bg-[#F3ECE5] rounded-md transition-colors"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
            <a
              href="#top"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
                onSelectFilter('new-in', false);
              }}
              className="inline-flex items-center gap-2.5 whitespace-nowrap shrink-0"
            >
              <img
                src={BRAND.logo}
                alt="Alankrita monogram"
                referrerPolicy="no-referrer"
                className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 rounded-full object-cover border border-[#D9C7A3] shrink-0"
              />
              <span className="font-serif text-[23px] sm:text-[26px] lg:text-[32px] tracking-[0.06em] font-normal text-[#1E1813]">
                {BRAND.name}
              </span>
            </a>
          </div>

          {/* Desktop Center Links */}
          <nav
            aria-label="Primary"
            className="hidden lg:flex items-center gap-8 xl:gap-10 text-[15px] font-normal text-[#3A322C]"
          >
            <button
              type="button"
              onClick={() => handleNavClick('new-in')}
              className={`whitespace-nowrap shrink-0 cursor-pointer transition-colors hover:text-[#1E1813] ${
                activeFilter === 'new-in' ? 'text-[#1E1813] font-medium' : ''
              }`}
            >
              New In
            </button>

            {/* Shop Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setOpenDropdown((prev) => (prev === 'shop' ? null : 'shop'))}
                className="inline-flex items-center gap-1.5 whitespace-nowrap shrink-0 cursor-pointer hover:text-[#1E1813] transition-colors"
                aria-expanded={openDropdown === 'shop'}
              >
                <span>Categories</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-150 ${
                    openDropdown === 'shop' ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openDropdown === 'shop' && (
                <div className="absolute left-0 top-full mt-3 w-60 bg-[#FFFCF9] border border-[#E7DFD6] shadow-lg py-2 z-50 max-h-[70vh] overflow-y-auto">
                  {shopItems.map((item) => (
                    <button
                      key={item.value}
                      type="button"
                      onClick={() => handleNavClick(item.value)}
                      className="w-full text-left px-4 py-2.5 text-[14px] text-[#3A322C] hover:bg-[#F5EFE9] hover:text-[#1E1813] transition-colors cursor-pointer"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Collections Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() =>
                  setOpenDropdown((prev) => (prev === 'collections' ? null : 'collections'))
                }
                className="inline-flex items-center gap-1.5 whitespace-nowrap shrink-0 cursor-pointer hover:text-[#1E1813] transition-colors"
                aria-expanded={openDropdown === 'collections'}
              >
                <span>Collections</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-150 ${
                    openDropdown === 'collections' ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openDropdown === 'collections' && (
                <div className="absolute left-0 top-full mt-3 w-64 bg-[#FFFCF9] border border-[#E7DFD6] shadow-lg py-2 z-50">
                  {collectionItems.map((item) => (
                    <button
                      key={item.label}
                      type="button"
                      onClick={() => handleNavClick(item.value)}
                      className="w-full text-left px-4 py-2.5 text-[14px] text-[#3A322C] hover:bg-[#F5EFE9] hover:text-[#1E1813] transition-colors cursor-pointer"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              type="button"
              onClick={() => handleNavClick('kurtis')}
              className={`whitespace-nowrap shrink-0 cursor-pointer transition-colors hover:text-[#1E1813] ${
                activeFilter === 'kurtis' ? 'text-[#1E1813] font-medium' : ''
              }`}
            >
              Kurtis
            </button>
            <button
              type="button"
              onClick={() => handleNavClick('festive')}
              className={`whitespace-nowrap shrink-0 cursor-pointer transition-colors hover:text-[#1E1813] ${
                activeFilter === 'festive' ? 'text-[#1E1813] font-medium' : ''
              }`}
            >
              Bridal &amp; Festive
            </button>
            <button
              type="button"
              onClick={() => handleNavClick('kids-wear')}
              className={`whitespace-nowrap shrink-0 cursor-pointer transition-colors hover:text-[#1E1813] ${
                activeFilter === 'kids-wear' ? 'text-[#1E1813] font-medium' : ''
              }`}
            >
              Kids Wear
            </button>
          </nav>

          {/* Right Action Icons */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 lg:gap-3 shrink-0">
            <button
              type="button"
              onClick={onOpenSearch}
              className="p-2 lg:p-2.5 text-[#1E1813] hover:bg-[#F3ECE5] rounded-full transition-colors cursor-pointer"
              aria-label="Search boutique catalog"
            >
              <Search className="w-[18px] h-[18px] lg:w-[22px] lg:h-[22px]" strokeWidth={1.6} />
            </button>
            <button
              type="button"
              onClick={() => onOpenInfoModal('account')}
              className="relative p-2 lg:p-2.5 text-[#1E1813] hover:bg-[#F3ECE5] rounded-full transition-colors cursor-pointer"
              aria-label="Saved items"
            >
              <User className="w-[18px] h-[18px] lg:w-[22px] lg:h-[22px]" strokeWidth={1.6} />
              {wishlistCount > 0 && (
                <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-[#8D6E56]" />
              )}
            </button>
            <button
              type="button"
              onClick={onOpenCart}
              className="relative p-2 lg:p-2.5 text-[#1E1813] hover:bg-[#F3ECE5] rounded-full transition-colors cursor-pointer"
              aria-label={`Shopping bag with ${cartCount} items`}
            >
              <ShoppingBag className="w-[18px] h-[18px] lg:w-[22px] lg:h-[22px]" strokeWidth={1.6} />
              <span className="absolute top-0.5 right-0.5 min-w-[17px] h-[17px] lg:min-w-[19px] lg:h-[19px] px-1 rounded-full bg-[#1E1813] text-[#FFFCF9] text-[10px] lg:text-[11px] font-semibold flex items-center justify-center tabular-nums">
                {cartCount}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Drawer Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#FFFCF9] border-t border-[#EFEAE6] px-6 py-5 space-y-4">
            <div className="grid grid-cols-2 gap-2.5">
              {[
                { label: 'New In', value: 'new-in' },
                { label: 'Shop All', value: 'all' },
                { label: 'Wedding Sarees', value: 'wedding-saree' },
                { label: 'Anarkali & Kurtis', value: 'kurtis' },
                { label: 'Designer Gowns', value: 'gown' },
                { label: 'Lehenga & Dhavani', value: 'festive' },
                { label: 'Kids Wear', value: 'kids-wear' },
                { label: 'Festive Offers', value: 'sale' },
              ].map((link) => (
                <button
                  key={link.value}
                  type="button"
                  onClick={() => handleNavClick(link.value)}
                  className={`text-left py-2.5 px-3 text-[13px] rounded border transition-colors ${
                    activeFilter === link.value
                      ? 'bg-[#1E1813] text-[#FFFCF9] border-[#1E1813]'
                      : 'bg-[#FBF7F4] text-[#231D18] border-[#EAE1D7]'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>
            <div className="pt-3 border-t border-[#EFEAE6] flex items-center justify-between text-[12px] text-[#5E544C]">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenInfoModal('track-order');
                }}
                className="py-1 underline underline-offset-4"
              >
                Track Order
              </button>
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenInfoModal('contact');
                }}
                className="py-1 underline underline-offset-4"
              >
                WhatsApp Care
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
