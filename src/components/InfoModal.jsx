import { useState } from 'react';
import { X, PackageCheck } from 'lucide-react';

const MODAL_CONTENT = {
  'track-order': {
    title: 'Track Your Order',
    body: 'Enter your ÉLANORA order number and email below to view real-time atelier dispatch and carrier tracking updates.',
    isOrderTracker: true,
  },
  help: {
    title: 'Help Center',
    body: 'Our client concierge is available Monday through Saturday, 9am–6pm EST at concierge@elanora.style. Complimentary shipping applies to all orders over $99, and returns are accepted within 30 days of delivery.',
  },
  returns: {
    title: 'Returns & Exchanges',
    body: 'We offer complimentary 30-day returns and instant size exchanges on all unworn garments with original tags attached.',
  },
  shipping: {
    title: 'Shipping Information',
    body: 'Orders placed before 2pm EST ship same day. Complimentary standard shipping on orders over $99 (3–5 business days); Express 2-day delivery available at checkout.',
  },
  'size-guide': {
    title: 'Size Guide',
    body: 'XS (US 0–2) · S (US 4–6) · M (US 8–10) · L (US 12–14) · XL (US 16). Our tailored blazers feature a relaxed architectural fit; take your usual size for an effortless drape.',
  },
  faq: {
    title: 'Frequently Asked Questions',
    body: 'All ÉLANORA garments are crafted in small batches using OEKO-TEX certified linen, organic cotton-modal, and traceable Italian wool blends.',
  },
  contact: {
    title: 'Contact Concierge',
    body: 'Reach our styling and client care specialists at concierge@elanora.style or visit our flagship showroom at 142 Mercer Street, New York.',
  },
  story: {
    title: 'Our Story',
    body: 'Founded on the belief that everyday dressing should feel effortless and enduring, ÉLANORA creates sculptural essentials in serene natural palettes.',
  },
  sustainability: {
    title: 'Sustainability',
    body: 'Over 88% of our seasonal fibers are certified organic, recycled, or responsibly milled in family-owned European workshops.',
  },
  careers: {
    title: 'Careers at ÉLANORA',
    body: 'We are always looking for thoughtful patternmakers, digital storytellers, and client stylists. Send portfolios to careers@elanora.style.',
  },
  press: {
    title: 'Press Inquiries',
    body: 'For editorial pulls, lookbook imagery, and brand interviews, contact press@elanora.style.',
  },
  terms: {
    title: 'Terms & Conditions',
    body: 'All orders are subject to availability and atelier quality inspection prior to dispatch.',
  },
  privacy: {
    title: 'Privacy Policy',
    body: 'We respect your privacy and never sell or share customer information with third-party marketers.',
  },
  cookies: {
    title: 'Cookie Policy',
    body: 'Essential session storage is used solely to remember items in your shopping bag and saved wishlist.',
  },
  'social-instagram': {
    title: '@elanora.style on Instagram',
    body: 'Join over 180,000 community members styling ÉLANORA tailoring every day. Tag #ElanoraEdit to be featured.',
  },
  'social-facebook': {
    title: 'ÉLANORA on Facebook',
    body: 'Follow seasonal lookbooks, trunk show invitations, and capsule wardrobe styling notes.',
  },
  'social-pinterest': {
    title: 'ÉLANORA on Pinterest',
    body: 'Explore our curated moodboards of tonal tailoring, warm minimalism, and architectural textures.',
  },
  'social-tiktok': {
    title: 'ÉLANORA on TikTok',
    body: 'Watch behind-the-scenes atelier fittings and 3-way styling reels with our creative studio.',
  },
};

export default function InfoModal({
  modalKey,
  wishlistProducts,
  onClose,
  onSelectProduct,
}) {
  const [orderNum, setOrderNum] = useState('');
  const [tracked, setTracked] = useState(false);

  if (!modalKey) return null;

  const isAccount = modalKey === 'account';
  const info = MODAL_CONTENT[modalKey] || {
    title: 'ÉLANORA Client Care',
    body: 'Thank you for visiting ÉLANORA.',
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-[#1E1813]/45 backdrop-blur-xs flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={isAccount ? 'Saved Wishlist' : info.title}
        className="relative w-full max-w-lg bg-[#FFFCF9] border border-[#E7DFD6] p-6 sm:p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-4 right-4 p-1.5 text-[#5E544C] hover:text-[#1E1813] cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {isAccount ? (
          <div>
            <p className="text-[11px] uppercase tracking-[0.12em] text-[#7B6E63]">
              Client Profile
            </p>
            <h2 className="mt-1 font-serif text-[26px] text-[#1E1813]">
              Saved Pieces ({wishlistProducts.length})
            </h2>
            {wishlistProducts.length === 0 ? (
              <p className="mt-3 text-[13px] text-[#5E544C] leading-relaxed">
                Tap the heart icon on any item to curate your personal wishlist here.
              </p>
            ) : (
              <div className="mt-5 grid grid-cols-2 gap-4 max-h-[55vh] overflow-y-auto pr-1">
                {wishlistProducts.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => {
                      onSelectProduct(item);
                      onClose();
                    }}
                    className="text-left group cursor-pointer"
                  >
                    <div className="aspect-[111/143] bg-[#EAE3DC] overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-200"
                      />
                    </div>
                    <p className="mt-2 text-[12px] font-medium text-[#1E1813] truncate">
                      {item.name}
                    </p>
                    <p className="text-[12px] text-[#5E544C] tabular-nums">
                      ${(item.salePrice ?? item.price).toFixed(2)}
                    </p>
                  </button>
                ))}
              </div>
            )}
          </div>
        ) : (
          <div>
            <p className="text-[11px] uppercase tracking-[0.12em] text-[#7B6E63]">ÉLANORA</p>
            <h2 className="mt-1 font-serif text-[26px] text-[#1E1813]">{info.title}</h2>
            <p className="mt-3 text-[13px] sm:text-[14px] text-[#5E544C] leading-[1.65]">
              {info.body}
            </p>

            {info.isOrderTracker && (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (orderNum.trim()) setTracked(true);
                }}
                className="mt-5 space-y-3"
              >
                <input
                  type="text"
                  value={orderNum}
                  onChange={(e) => {
                    setOrderNum(e.target.value);
                    setTracked(false);
                  }}
                  placeholder="Order # (e.g. EL-2048)"
                  className="w-full px-3.5 py-2.5 text-[13px] border border-[#DFD5CA] bg-white focus:border-[#1E1813] focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-[#1E1813] text-[#FFFCF9] text-[11px] font-semibold tracking-[0.12em] uppercase px-6 py-3 cursor-pointer"
                >
                  Locate Order
                </button>
                {tracked && (
                  <div className="mt-3 p-3.5 bg-[#F4EEE7] border border-[#E5DDD5] flex items-center gap-2.5 text-[12px] text-[#1E1813]">
                    <PackageCheck className="w-4 h-4 text-[#4C6B4A] shrink-0" />
                    <span>
                      Order <strong>{orderNum.toUpperCase()}</strong> is in transit — estimated delivery within 2 business days.
                    </span>
                  </div>
                )}
              </form>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
