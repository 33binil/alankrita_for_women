import { useState } from 'react';
import { X, PackageCheck } from 'lucide-react';
import { BRAND, formatPrice } from '../data/storeData';

const MODAL_CONTENT = {
  'track-order': {
    title: 'Track Your Order',
    body: 'Enter your Alankrita order number below to check tailoring progress, studio dispatch, and courier tracking.',
    isOrderTracker: true,
  },
  'custom-stitching': {
    title: 'Custom Stitching & Color Customization',
    body: `Most Alankrita outfits for women and kids can be customized in your preferred shade, sleeve length, neckline, and exact measurements. Share your design reference on Instagram (${BRAND.instagramHandle}) or WhatsApp (${BRAND.whatsappDisplay}) after placing your order.`,
  },
  returns: {
    title: 'Care & Exchanges',
    body: 'Ready-to-wear kurtis and gowns are eligible for size exchange within 7 days of delivery when unworn with tags intact. Custom-stitched and pre-booked outfits are tailored to individual measurements and checked thoroughly before dispatch.',
  },
  shipping: {
    title: 'Shipping & Pre-Booking',
    body: 'Ready-to-ship styles dispatch within 2–3 working days from Kochi, Kerala. Custom-tailored and pre-booked outfits take 7–14 working days. Free Pan-India shipping applies on orders over ₹2,999, and worldwide express shipping is available.',
  },
  'size-guide': {
    title: 'Women\'s & Kids\' Size Guide',
    body: 'Women\'s: XS (34") · S (36") · M (38") · L (40") · XL (42") · XXL (44") · Custom Fit. Kids\' Wear: 1–2Y · 3–4Y · 5–6Y · 7–8Y · 9–10Y · Custom Age Measurements. Select "Custom" at checkout for bespoke tailoring.',
  },
  faq: {
    title: 'Frequently Asked Questions',
    body: 'Can I request matching mother-and-daughter sets? Yes! We love stitching coordinated festive outfits, Onam kasavu pattu pavadas, and reception ensembles for women and kids. Reach us on WhatsApp at +91 70347 31936 for pre-booking.',
  },
  contact: {
    title: 'Contact & WhatsApp Care',
    body: `Connect with our Kochi boutique stylists via Instagram DM at ${BRAND.instagramHandle} or WhatsApp at ${BRAND.whatsappDisplay} (Monday to Saturday, 10 AM – 7 PM IST) for custom orders, shade cards, and measurements.`,
  },
  story: {
    title: 'Our Story',
    body: 'Born in Kochi, Kerala, Alankrita is an independent boutique dedicated to women and kids. From heirloom bridal Kanchipuram sarees and party gowns to breathable everyday kurtis and traditional kids\' pattu pavadas, every piece is crafted with care.',
  },
  'women-kids': {
    title: 'Women\'s & Kids\' Collections',
    body: 'Alankrita curates 11 signature categories spanning Wedding Sarees, Anarkalis, A-Line Kurtis, Designer Gowns, Saree Gowns, Lehengas, Crop Top & Skirt sets, Dhavanis, Side Slit Kurtis, Umbrella Kurtis, and festive Kids Wear.',
  },
  craftsmanship: {
    title: 'Handcraft & Fabrics',
    body: 'Each outfit is thoughtfully lined in soft breathable fabrics and finished with handworked zardosi, cutdana, beadwork, or delicate floral thread embroidery by our skilled artisans in Kerala.',
  },
  studio: {
    title: 'Kochi Boutique Studio',
    body: `Based in ${BRAND.location}, Alankrita serves clients across Kerala, Pan-India, and worldwide through our online boutique, Instagram (${BRAND.instagramHandle}), and WhatsApp ordering.`,
  },
  terms: {
    title: 'Terms & Conditions',
    body: 'All boutique garments undergo careful quality inspection prior to dispatch. Slight natural variations in hand embroidery and silk weaves are hallmarks of handcrafted boutique clothing.',
  },
  privacy: {
    title: 'Privacy Policy',
    body: 'Your measurements, contact details, and saved selections are used strictly to tailor and fulfill your Alankrita orders.',
  },
  'social-facebook': {
    title: 'Alankrita on Facebook',
    body: 'Follow Alankrita Boutique for seasonal festive launches, Onam kids\' collections, and custom styling inspiration.',
  },
  'social-youtube': {
    title: 'Alankrita on YouTube',
    body: 'Watch fabric drape previews, close-up handwork showcases, and new arrival lookbooks from our Kochi boutique.',
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
    title: 'Alankrita Boutique Care',
    body: `Thank you for visiting Alankrita. Reach us anytime at ${BRAND.instagramHandle} or WhatsApp ${BRAND.whatsappDisplay}.`,
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
              Alankrita Wishlist
            </p>
            <h2 className="mt-1 font-serif text-[26px] text-[#1E1813]">
              Saved Pieces ({wishlistProducts.length})
            </h2>
            {wishlistProducts.length === 0 ? (
              <p className="mt-3 text-[13px] text-[#5E544C] leading-relaxed">
                Tap the heart icon on any women&apos;s or kids&apos; outfit to save it to your personal wishlist here.
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
                      {formatPrice(item.salePrice ?? item.price)}
                    </p>
                  </button>
                ))}
              </div>
            )}
          </div>
        ) : (
          <div>
            <p className="text-[11px] uppercase tracking-[0.12em] text-[#7B6E63]">
              Alankrita · Kochi
            </p>
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
                  placeholder="Order # (e.g. ALK-2048)"
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
                      Order <strong>{orderNum.toUpperCase()}</strong> is in finishing at our Kochi studio — dispatch scheduled within 2 working days.
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
