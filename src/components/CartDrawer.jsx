import { useState } from 'react';
import { X, Minus, Plus, Trash2, ShoppingBag, CheckCircle2 } from 'lucide-react';
import { BRAND, formatPrice } from '../data/storeData';

export default function CartDrawer({
  isOpen,
  items,
  onClose,
  onUpdateQty,
  onRemoveItem,
  onClearCart,
}) {
  const [checkoutDone, setCheckoutDone] = useState(false);

  if (!isOpen) return null;

  const subtotal = items.reduce(
    (sum, item) => sum + (item.salePrice ?? item.price) * item.quantity,
    0
  );
  const freeShippingThreshold = 2999;
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - subtotal);
  const shippingFee = subtotal === 0 || subtotal >= freeShippingThreshold ? 0 : 149;
  const total = subtotal + shippingFee;

  const handleCheckout = () => {
    setCheckoutDone(true);
    onClearCart();
  };

  const handleClose = () => {
    setCheckoutDone(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-[#1E1813]/45 backdrop-blur-xs" onClick={handleClose}>
      <aside
        aria-label="Shopping Bag"
        className="w-full max-w-md bg-[#FFFCF9] h-full flex flex-col shadow-2xl border-l border-[#E7DFD6]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-5 border-b border-[#EFE8E0] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <ShoppingBag className="w-4 h-4 text-[#1E1813]" strokeWidth={1.6} />
            <h2 className="font-serif text-[20px] text-[#1E1813]">Your Bag</h2>
          </div>
          <button
            type="button"
            onClick={handleClose}
            aria-label="Close shopping bag"
            className="p-2 text-[#5E544C] hover:text-[#1E1813] cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free Shipping Bar */}
        {!checkoutDone && (
          <div className="px-6 py-3 bg-[#F4EEE7] border-b border-[#EAE1D7] text-[12px] text-[#4A4139]">
            {remainingForFreeShipping > 0 ? (
              <span>
                Add <strong className="font-semibold text-[#1E1813]">{formatPrice(remainingForFreeShipping)}</strong> more for free Pan-India shipping over ₹2,999.
              </span>
            ) : (
              <span className="text-[#1E1813] font-medium">
                You have unlocked complimentary Pan-India shipping.
              </span>
            )}
            <div className="mt-2 h-1 bg-[#E2D8CD] overflow-hidden">
              <div
                className="h-full bg-[#1E1813] transition-all duration-300"
                style={{
                  width: `${Math.min(100, (subtotal / freeShippingThreshold) * 100)}%`,
                }}
              />
            </div>
          </div>
        )}

        {/* Body */}
        <div className="flex-1 overflow-y-auto px-6 py-5">
          {checkoutDone ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-12">
              <CheckCircle2 className="w-11 h-11 text-[#4C6B4A]" strokeWidth={1.4} />
              <h3 className="mt-4 font-serif text-[24px] text-[#1E1813]">Order Confirmed</h3>
              <p className="mt-2 text-[13px] text-[#5E544C] max-w-xs leading-relaxed">
                Thank you for shopping with Alankrita. Order #ALK-2048 is confirmed—our Kochi boutique team will connect on WhatsApp ({BRAND.whatsappDisplay}) for any custom measurement or color preferences.
              </p>
              <button
                type="button"
                onClick={handleClose}
                className="mt-6 bg-[#1E1813] text-[#FFFCF9] text-[11px] font-semibold tracking-[0.12em] uppercase px-7 py-3.5 cursor-pointer"
              >
                Continue Shopping
              </button>
            </div>
          ) : items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-12">
              <ShoppingBag className="w-9 h-9 text-[#B8ABA0]" strokeWidth={1.3} />
              <p className="mt-3 font-serif text-[20px] text-[#1E1813]">Your bag is empty</p>
              <p className="mt-1.5 text-[13px] text-[#6F645B] max-w-[240px]">
                Explore our wedding sarees, designer gowns, kurtis, and festive kids&apos; wear to begin your selection.
              </p>
              <button
                type="button"
                onClick={handleClose}
                className="mt-6 bg-[#1E1813] text-[#FFFCF9] text-[11px] font-semibold tracking-[0.12em] uppercase px-7 py-3.5 cursor-pointer"
              >
                Browse Collection
              </button>
            </div>
          ) : (
            <ul className="divide-y divide-[#EFE8E0]">
              {items.map((item) => {
                const unitPrice = item.salePrice ?? item.price;
                return (
                  <li key={`${item.id}-${item.size}`} className="py-4 flex gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      referrerPolicy="no-referrer"
                      className="w-20 h-24 object-cover object-top bg-[#EAE3DC] shrink-0"
                    />
                    <div className="flex-1 min-w-0 flex flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between gap-2">
                          <h3 className="text-[13px] font-medium text-[#1E1813] truncate">
                            {item.name}
                          </h3>
                          <button
                            type="button"
                            onClick={() => onRemoveItem(item.id, item.size)}
                            aria-label={`Remove ${item.name}`}
                            className="text-[#8E8175] hover:text-[#1E1813] cursor-pointer p-0.5"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <p className="mt-0.5 text-[12px] text-[#6F645B]">Size: {item.size}</p>
                      </div>

                      <div className="mt-3 flex items-center justify-between">
                        <div className="inline-flex items-center border border-[#DFD5CA]">
                          <button
                            type="button"
                            onClick={() => onUpdateQty(item.id, item.size, item.quantity - 1)}
                            aria-label="Decrease quantity"
                            className="w-7 h-7 flex items-center justify-center text-[#3A322C] hover:bg-[#F3ECE5] cursor-pointer"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-7 text-center text-[12px] tabular-nums text-[#1E1813]">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => onUpdateQty(item.id, item.size, item.quantity + 1)}
                            aria-label="Increase quantity"
                            className="w-7 h-7 flex items-center justify-center text-[#3A322C] hover:bg-[#F3ECE5] cursor-pointer"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <span className="text-[13px] font-medium text-[#1E1813] tabular-nums">
                          {formatPrice(unitPrice * item.quantity)}
                        </span>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        {/* Footer Summary */}
        {!checkoutDone && items.length > 0 && (
          <div className="border-t border-[#EFE8E0] bg-[#FAF6F2] px-6 py-5 space-y-3">
            <div className="flex items-center justify-between text-[13px] text-[#5E544C]">
              <span>Subtotal</span>
              <span className="tabular-nums">{formatPrice(subtotal)}</span>
            </div>
            <div className="flex items-center justify-between text-[13px] text-[#5E544C]">
              <span>Shipping</span>
              <span className="tabular-nums">
                {shippingFee === 0 ? 'Complimentary' : formatPrice(shippingFee)}
              </span>
            </div>
            <div className="pt-2 border-t border-[#E5DDD5] flex items-center justify-between text-[14px] font-semibold text-[#1E1813]">
              <span>Estimated Total</span>
              <span className="tabular-nums">{formatPrice(total)}</span>
            </div>
            <button
              type="button"
              onClick={handleCheckout}
              className="w-full mt-2 bg-[#1E1813] text-[#FFFCF9] text-[11px] font-semibold tracking-[0.12em] uppercase py-4 hover:bg-[#352C24] transition-colors cursor-pointer"
            >
              Confirm Boutique Order
            </button>
          </div>
        )}
      </aside>
    </div>
  );
}
