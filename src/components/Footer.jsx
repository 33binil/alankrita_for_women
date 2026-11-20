import { FOOTER_COLUMNS } from '../data/storeData';

function PaymentBadges() {
  return (
    <div className="flex flex-wrap items-center gap-1.5" aria-label="Accepted payment methods">
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
      <span className="inline-flex items-center justify-center h-6 px-2 rounded-[3px] bg-white border border-[#E4DDD4] text-[9px] font-bold tracking-tight text-[#003087]">
        Pay<span className="text-[#0079C1]">Pal</span>
      </span>
      <span className="inline-flex items-center justify-center h-6 px-2 rounded-[3px] bg-white border border-[#E4DDD4] text-[10px] font-semibold tracking-tight text-[#1E1813]">
         Pay
      </span>
      <span className="inline-flex items-center justify-center h-6 px-2 rounded-[3px] bg-[#5A31F4] text-[9px] font-bold tracking-tight text-white">
        shop
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
              className="font-serif text-[22px] lg:text-[28px] tracking-[0.06em] text-[#1E1813] inline-block"
            >
              ÉLANORA
            </a>
            <p className="mt-3 text-[12px] sm:text-[13px] lg:text-[15px] text-[#5E544C] leading-[1.6] max-w-[260px] lg:max-w-[320px]">
              Timeless fashion for the modern woman. Effortless style, every day.
            </p>

            {/* Social Icons */}
            <div className="mt-5 lg:mt-6 flex items-center gap-4 text-[#1E1813]">
              <button
                type="button"
                onClick={() => onOpenInfoModal('social-instagram')}
                aria-label="ÉLANORA on Instagram"
                className="hover:opacity-65 transition-opacity cursor-pointer"
              >
                <svg className="w-4 h-4 lg:w-5 lg:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => onOpenInfoModal('social-facebook')}
                aria-label="ÉLANORA on Facebook"
                className="hover:opacity-65 transition-opacity cursor-pointer"
              >
                <svg className="w-4 h-4 lg:w-5 lg:h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => onOpenInfoModal('social-pinterest')}
                aria-label="ÉLANORA on Pinterest"
                className="hover:opacity-65 transition-opacity cursor-pointer"
              >
                <svg className="w-4 h-4 lg:w-5 lg:h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.237 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.181-.78 1.172-4.97 1.172-4.97s-.299-.6-.299-1.486c0-1.39.806-2.428 1.81-2.428.852 0 1.264.64 1.264 1.408 0 .858-.546 2.14-.828 3.33-.236.995.5 1.807 1.48 1.807 1.778 0 3.144-1.874 3.144-4.58 0-2.393-1.72-4.068-4.176-4.068-2.845 0-4.516 2.135-4.516 4.34 0 .859.331 1.781.745 2.281a.3.3 0 01.069.288l-.278 1.133c-.044.183-.145.223-.335.134-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.473 6.165 5.776 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.965-.525-2.291-1.148l-.623 2.378c-.226.869-.835 1.958-1.244 2.621.937.29 1.931.446 2.962.446 5.523 0 10-4.477 10-10S17.523 2 12 2z" />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => onOpenInfoModal('social-tiktok')}
                aria-label="ÉLANORA on TikTok"
                className="hover:opacity-65 transition-opacity cursor-pointer"
              >
                <svg className="w-4 h-4 lg:w-5 lg:h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.74a4.85 4.85 0 01-1.01-.05z" />
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
            © 2026 ÉLANORA. All Rights Reserved.
          </p>
          <PaymentBadges />
        </div>
      </div>
    </footer>
  );
}
