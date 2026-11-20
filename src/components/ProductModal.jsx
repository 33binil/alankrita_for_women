import { useState, useEffect } from 'react';
import { X, Heart } from 'lucide-react';

export default function ProductModal({
  product,
  isWishlisted,
  onClose,
  onToggleWishlist,
  onAddToCart,
}) {
  const [selectedSize, setSelectedSize] = useState('M');

  useEffect(() => {
    if (product && product.sizes?.length) {
      setSelectedSize(product.sizes.includes('M') ? 'M' : product.sizes[0]);
    }
  }, [product]);

  if (!product) return null;

  const displayPrice = product.salePrice ?? product.price;

  return (
    <div
      className="fixed inset-0 z-50 bg-[#1E1813]/55 backdrop-blur-xs flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={product.name}
        className="relative bg-[#FFFCF9] max-w-2xl w-full grid grid-cols-1 sm:grid-cols-2 overflow-hidden shadow-2xl border border-[#E7DFD6]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close product view"
          className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-[#FFFCF9]/90 text-[#1E1813] flex items-center justify-center hover:bg-[#1E1813] hover:text-[#FFFCF9] transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Image */}
        <div className="aspect-[111/143] bg-[#EAE3DC]">
          <img
            src={product.image}
            alt={product.name}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-top"
          />
        </div>

        {/* Details */}
        <div className="p-6 sm:p-8 flex flex-col justify-between">
          <div>
            <p className="text-[11px] uppercase tracking-[0.12em] text-[#7B6E63]">
              ÉLANORA Atelier
            </p>
            <h2 className="mt-1.5 font-serif text-[26px] text-[#1E1813] leading-tight">
              {product.name}
            </h2>
            <div className="mt-2 flex items-center gap-2.5 text-[15px] tabular-nums">
              <span className="font-medium text-[#1E1813]">${displayPrice.toFixed(2)}</span>
              {product.salePrice && (
                <span className="text-[#9E9286] line-through text-[13px]">
                  ${product.price.toFixed(2)}
                </span>
              )}
            </div>

            <p className="mt-4 text-[13px] text-[#5E544C] leading-[1.6]">
              {product.description}
            </p>

            {/* Size Selection */}
            <div className="mt-6">
              <div className="flex items-center justify-between text-[12px]">
                <span className="font-medium text-[#1E1813]">Select Size</span>
                <span className="text-[#7B6E63]">True to size</span>
              </div>
              <div className="mt-2.5 flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setSelectedSize(size)}
                    className={`min-w-[42px] px-3 py-2 text-[12px] border transition-colors cursor-pointer ${
                      selectedSize === size
                        ? 'bg-[#1E1813] text-[#FFFCF9] border-[#1E1813]'
                        : 'bg-[#FFFCF9] text-[#231D18] border-[#DFD5CA] hover:border-[#1E1813]'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-7 flex items-center gap-3">
            <button
              type="button"
              onClick={() => {
                onAddToCart(product, selectedSize);
                onClose();
              }}
              className="flex-1 bg-[#1E1813] text-[#FFFCF9] text-[11px] font-semibold tracking-[0.12em] uppercase py-3.5 hover:bg-[#352C24] transition-colors cursor-pointer"
            >
              Add to Bag
            </button>
            <button
              type="button"
              onClick={() => onToggleWishlist(product.id)}
              aria-label="Toggle wishlist"
              className="w-11 h-11 border border-[#DFD5CA] flex items-center justify-center hover:border-[#1E1813] transition-colors cursor-pointer"
            >
              <Heart
                className={`w-4 h-4 ${
                  isWishlisted ? 'fill-[#8B3E35] text-[#8B3E35]' : 'text-[#1E1813]'
                }`}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
