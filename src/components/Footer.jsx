import { BRAND, FOOTER_COLUMNS } from '../data/storeData';

function PaymentBadges() {
  return (
    <div className="flex flex-wrap items-center gap-1.5" aria-label="Accepted payment methods">
      <span className="inline-flex items-center justify-center h-6 px-2 rounded-[3px] bg-white border border-[#E4DDD4] text-[10px] font-bold tracking-tight text-[#1E1813]">
        UPI
      </span>
      <span className="inline-flex items-center justify-center h-6 px-2 rounded-[3px] bg-white border border-[#E4DDD4] text-[10px] font-semibold tracking-tight text-[#3C4043]">
        GPay
      </span>
      <span className="inline-flex items-center justify-center h-6 px-2 rounded-[3px] bg-white border border-[#E4DDD4] text-[10px] font-bold tracking-tight text-[#1A1F71]">
        VISA
      </span>
      <span
        className="inline-flex items-center justify-center h-6 px-2 rounded-[3px] bg-white border border-[#E4DDD4]"
        aria-label="Mastercard"
      >
        <svg viewBox="0 0 28 16" className="w-6 h-3.5" aria-hidden="true">
          <circle cx="10" cy="8" r="6" fill="#EB001B" />
          <circle cx="18" cy="8" r="6" fill="#F79E1B" fillOpacity="0.88" />
        </svg>
      </span>
      <span className="inline-flex items-center justify-center h-6 px-2 rounded-[3px] bg-[#1F6E4A] text-[9px] font-semibold tracking-tight text-white">
        WhatsApp Order
      </span>
    </div>
  );
}

export default function Footer({ onFilterSelect, onOpenInfoModal }) {
  const handleLinkClick = (action) => {
    if (action.type === 'filter') {
      onFilterSelect(action.value);
    } else if (action.type === 'modal') {
      onOpenInfoModal(action.value);
    }
  };

  return (
    <footer className="bg-[#FAF6F2] border-t border-[#EFE8E0] text-[#3A322C]">
      <div className="w-full px-4 sm:px-6 lg:px-8 pt-12 lg:pt-16 pb-8 lg:pb-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-8">
          {/* Brand Bio Column */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-2 pr-4">
            <a
              href="#top"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2.5"
            >
              <img
                src={BRAND.logo}
                alt="Alankrita monogram"
                referrerPolicy="no-referrer"
                className="w-8 h-8 lg:w-9 lg:h-9 rounded-full object-cover border border-[#D9C7A3]"
              />
              <span className="font-serif text-[22px] lg:text-[28px] tracking-[0.06em] text-[#1E1813]">
                {BRAND.name}
              </span>
            </a>
            <p className="mt-3 text-[12px] sm:text-[13px] lg:text-[15px] text-[#5E544C] leading-[1.6] max-w-[280px] lg:max-w-[330px]">
              Custom-tailored ethnic, bridal, and everyday wear for women and kids. Designed in {BRAND.location}.
            </p>
            <p className="mt-2 text-[12px] lg:text-[13px] text-[#6F645B]">
              WhatsApp: {BRAND.whatsappDisplay} · {BRAND.instagramHandle}
            </p>

            {/* Social Links */}
            <div className="mt-5 lg:mt-6 flex items-center gap-4 text-[#1E1813]">
              <a
                href={BRAND.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Alankrita on Instagram"
                className="hover:opacity-65 transition-opacity"
              >
                <svg className="w-4 h-4 lg:w-5 lg:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <button
                type="button"
                onClick={() => onOpenInfoModal('contact')}
                aria-label="Alankrita on WhatsApp"
                className="hover:opacity-65 transition-opacity cursor-pointer"
              >
                <svg className="w-4 h-4 lg:w-5 lg:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => onOpenInfoModal('social-facebook')}
                aria-label="Alankrita on Facebook"
                className="hover:opacity-65 transition-opacity cursor-pointer"
              >
                <svg className="w-4 h-4 lg:w-5 lg:h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => onOpenInfoModal('social-youtube')}
                aria-label="Alankrita on YouTube"
                className="hover:opacity-65 transition-opacity cursor-pointer"
              >
                <svg className="w-4 h-4 lg:w-5 lg:h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </button>
            </div>
          </div>

          {/* 4 Navigation Link Columns */}
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="text-[12px] lg:text-[14px] font-semibold text-[#1E1813] tracking-[0.02em] mb-3.5 lg:mb-4">
                {col.title}
              </h3>
              <ul className="space-y-2 lg:space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <button
                      type="button"
                      onClick={() => handleLinkClick(link.action)}
                      className="text-[12px] lg:text-[14px] text-[#5E544C] hover:text-[#1E1813] transition-colors cursor-pointer text-left"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Copyright & Payment Icons */}
        <div className="mt-12 pt-6 border-t border-[#EAE2D9] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] lg:text-[13px] text-[#6F645B]">
            © 2026 Alankrita Women&apos;s &amp; Kids&apos; Boutique, Kochi. All Rights Reserved.
          </p>
          <PaymentBadges />
        </div>
      </div>
    </footer>
  );
}
