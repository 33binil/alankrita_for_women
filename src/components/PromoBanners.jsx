import { ArrowRight } from 'lucide-react';

export default function PromoBanners({ onShopSummer, onShopAccessories }) {
  return (
    <section aria-label="Editorial Collections" className="bg-[#FBF7F4] py-4 sm:py-6 lg:py-8">
      <div className="w-full px-4 sm:px-6 lg:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 lg:gap-4">
          {/* Left Banner: Summer Essentials */}
          <div
            onClick={onShopSummer}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onShopSummer();
              }
            }}
            className="group relative overflow-hidden bg-[#3B2C20] min-h-[260px] sm:min-h-[300px] lg:min-h-[420px] xl:min-h-[470px] flex items-center cursor-pointer"
          >
            {/* Right-aligned cropped editorial photo */}
            <img
              src="/images/promo-summer.jpg"
              alt="Summer Essentials black slip dress editorial"
              referrerPolicy="no-referrer"
              className="absolute inset-y-0 right-0 w-[62%] sm:w-[58%] h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
            />
            {/* Seamless Espresso Gradient Scrim from left */}
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-r from-[#3B2C20] via-[#453528]/92 via-45% to-transparent"
            />

            <div className="relative z-10 p-7 sm:p-10 lg:p-14 xl:p-16 max-w-[280px] sm:max-w-[320px] lg:max-w-[400px]">
              <h3 className="font-serif font-normal text-[#FFFCF9] text-[30px] sm:text-[36px] lg:text-[48px] xl:text-[54px] leading-[1.06]">
                Summer
                <br />
                Essentials
              </h3>
              <p className="mt-2.5 lg:mt-4 text-[13px] lg:text-[16px] text-[#E6DDD4] leading-snug">
                Light. Effortless. Essential.
              </p>
              <p className="mt-4 lg:mt-6 text-[12px] sm:text-[13px] lg:text-[16px] font-semibold tracking-[0.06em] uppercase text-[#FFFCF9]">
                UP TO 30% OFF
              </p>
              <span className="mt-5 lg:mt-8 inline-flex items-center gap-2 text-[11px] lg:text-[13px] font-semibold tracking-[0.12em] uppercase text-[#FFFCF9] group-hover:gap-3 transition-all">
                <span>SHOP NOW</span>
                <ArrowRight className="w-3.5 h-3.5 lg:w-4 lg:h-4" strokeWidth={1.8} />
              </span>
            </div>
          </div>

          {/* Right Banner: Accessory Edit */}
          <div
            onClick={onShopAccessories}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onShopAccessories();
              }
            }}
            className="group relative overflow-hidden bg-[#98836F] min-h-[260px] sm:min-h-[300px] lg:min-h-[420px] xl:min-h-[470px] flex items-center cursor-pointer"
          >
            {/* Right-aligned cropped handbag photo */}
            <img
              src="/images/promo-accessory.jpg"
              alt="Cream leather top-handle handbag on woven rattan"
              referrerPolicy="no-referrer"
              className="absolute inset-y-0 right-0 w-[68%] sm:w-[66%] h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-500"
            />
            {/* Seamless Taupe Gradient Scrim from left */}
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-r from-[#937E6B] via-[#9D8976]/90 via-42% to-transparent"
            />

            <div className="relative z-10 p-7 sm:p-10 lg:p-14 xl:p-16 max-w-[270px] sm:max-w-[310px] lg:max-w-[390px]">
              <h3 className="font-serif font-normal text-[#FFFCF9] text-[30px] sm:text-[36px] lg:text-[48px] xl:text-[54px] leading-[1.06]">
                Accessory
                <br />
                Edit
              </h3>
              <p className="mt-2.5 lg:mt-4 text-[13px] lg:text-[16px] text-[#F5EFE9] leading-snug">
                The finishing touch
                <br />
                you deserve.
              </p>
              <span className="mt-7 lg:mt-10 inline-flex items-center gap-2 text-[11px] lg:text-[13px] font-semibold tracking-[0.12em] uppercase text-[#FFFCF9] group-hover:gap-3 transition-all">
                <span>SHOP ACCESSORIES</span>
                <ArrowRight className="w-3.5 h-3.5 lg:w-4 lg:h-4" strokeWidth={1.8} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
