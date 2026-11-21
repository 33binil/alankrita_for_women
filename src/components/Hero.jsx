import { ArrowRight } from 'lucide-react';

export default function Hero({ onShopNewArrivals, onExploreCollections }) {
  return (
    <section
      aria-label="Featured Collection"
      className="relative overflow-hidden bg-gradient-to-r from-[#E5DFD8] via-[#E1DAD2] to-[#DDD5CC]"
    >
      {/* Subtle Architectural Curved Plaster Arch Backdrop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 -top-24 w-[680px] h-[680px] sm:w-[820px] sm:h-[820px] lg:w-[980px] lg:h-[980px] rounded-full bg-gradient-to-br from-[#F3EFEA] via-[#ECE7E1] to-[#E3DDD5] opacity-90"
      />

      <div className="relative w-full px-6 sm:px-10 lg:px-0">
        <div className="grid grid-cols-1 md:grid-cols-12 items-center min-h-[460px] lg:min-h-[680px] xl:min-h-[760px]">
          {/* Left Editorial Typography & CTAs */}
          <div className="md:col-span-6 lg:col-span-6 py-12 sm:py-16 lg:py-24 lg:pl-12 xl:pl-16 lg:pr-8 z-10">
            <p className="text-[12px] lg:text-[13px] tracking-[0.14em] uppercase text-[#6E5E50] mb-3.5">
              Kochi · Women&apos;s &amp; Kids&apos; Boutique
            </p>
            <h1 className="font-serif font-normal text-[#1E1813] text-[38px] sm:text-[50px] lg:text-[66px] xl:text-[74px] leading-[1.06] tracking-[-0.015em] text-balance">
              Timeless Grace.
              <br />
              Handcrafted for You.
            </h1>

            <p className="mt-4 sm:mt-6 text-[14px] sm:text-[16px] lg:text-[18px] text-[#4C433B] leading-[1.6] max-w-[380px] lg:max-w-[460px]">
              Custom-tailored wedding sarees, designer gowns, kurtis, and festive kids&apos; outfits—crafted in Kochi and customized to your colors and measurements.
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
                <span>EXPLORE ALL 11 STYLES</span>
                <ArrowRight className="w-3.5 h-3.5 lg:w-4 lg:h-4" strokeWidth={1.8} />
              </button>
            </div>
          </div>

          {/* Right Editorial Bridal Portrait from Alankrita Categories */}
          <div className="md:col-span-6 lg:col-span-6 relative h-[400px] sm:h-[480px] md:h-[520px] lg:h-[680px] xl:h-[760px] flex items-end justify-end">
            <div className="relative w-full h-full">
              <img
                src="/categories/wedding_saree.jpg"
                alt="Alankrita bridal ivory and peach-gold Kanchipuram wedding saree with custom embroidered blouse"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-top"
              />
              {/* Soft Left Feather Gradient so portrait blends seamlessly into the arch backdrop */}
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
