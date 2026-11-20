import { ArrowRight } from 'lucide-react';

export default function Hero({ onShopNewArrivals, onExploreCollections }) {
  return (
    <section
      aria-label="Featured Collection"
      className="relative overflow-hidden bg-gradient-to-r from-[#E5DFD8] via-[#E1DAD2] to-[#DDD5CC]"
    >
      {/* Subtle Architectural Curved Plaster Arch Backdrop matching the design */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 -top-24 w-[680px] h-[680px] sm:w-[820px] sm:h-[820px] lg:w-[980px] lg:h-[980px] rounded-full bg-gradient-to-br from-[#F3EFEA] via-[#ECE7E1] to-[#E3DDD5] opacity-90"
      />

      <div className="relative w-full px-6 sm:px-10 lg:px-0">
        <div className="grid grid-cols-1 md:grid-cols-12 items-center min-h-[460px] lg:min-h-[680px] xl:min-h-[760px]">
          {/* Left Editorial Typography & CTAs */}
          <div className="md:col-span-6 lg:col-span-6 py-12 sm:py-16 lg:py-24 lg:pl-12 xl:pl-16 lg:pr-8 z-10">
            <h1 className="font-serif font-normal text-[#1E1813] text-[38px] sm:text-[50px] lg:text-[68px] xl:text-[78px] leading-[1.06] tracking-[-0.015em] text-balance">
              Timeless Elegance.
              <br />
              Premium Collections.
            </h1>

            <p className="mt-4 sm:mt-6 text-[14px] sm:text-[16px] lg:text-[18px] text-[#4C433B] leading-[1.6] max-w-[360px] lg:max-w-[440px]">
              Ready-to-wear and custom outfits for women and little ones, designed in Kochi and finished to your measurements.
            </p>

            <div className="mt-7 sm:mt-9 lg:mt-11 flex flex-wrap items-center gap-4 sm:gap-7 lg:gap-9">
              <button
                type="button"
                onClick={onShopNewArrivals}
                className="bg-[#1E1813] text-[#FFFCF9] text-[11px] lg:text-[13px] font-semibold tracking-[0.12em] uppercase px-7 py-3.5 lg:px-10 lg:py-4.5 hover:bg-[#352C24] transition-colors duration-150 cursor-pointer whitespace-nowrap shrink-0"
              >
                SHOP NEW ARRIVALS
              </button>

              <button
                type="button"
                onClick={onExploreCollections}
                className="inline-flex items-center gap-2.5 text-[11px] lg:text-[13px] font-semibold tracking-[0.12em] uppercase text-[#1E1813] hover:opacity-70 transition-opacity duration-150 cursor-pointer whitespace-nowrap shrink-0 py-2"
              >
                <span>EXPLORE COLLECTIONS</span>
                <ArrowRight className="w-3.5 h-3.5 lg:w-4 lg:h-4" strokeWidth={1.8} />
              </button>
            </div>
          </div>

          {/* Right Editorial Model Portrait */}
          <div className="md:col-span-6 lg:col-span-6 relative h-[380px] sm:h-[460px] md:h-[520px] lg:h-[680px] xl:h-[760px] flex items-end justify-end">
            <div className="relative w-full h-full">
              <img
                src="/images/hero-model.jpg"
                alt="Woman in an oatmeal tailored oversized blazer and white knit crop top"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-top"
              />
              {/* Soft Left Feather Gradient so plaster wall blends seamlessly into the arch backdrop */}
              <div
                aria-hidden="true"
                className="pointer-events-none hidden md:block absolute inset-y-0 left-0 w-28 lg:w-36 bg-gradient-to-r from-[#DFD8D0] via-[#DFD8D0]/55 to-transparent"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
