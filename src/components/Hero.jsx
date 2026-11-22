import { ArrowRight, ChevronDown } from 'lucide-react';

export default function Hero({ onShopNewArrivals, onExploreCollections }) {
  const handleScrollDown = () => {
    const nextSection = document.getElementById('categories');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      onExploreCollections();
    }
  };

  return (
    <section
      aria-label="Featured Collection"
      className="relative w-full h-[calc(100dvh-98px)] sm:h-[calc(100dvh-106px)] lg:h-[calc(100dvh-126px)] min-h-[540px] sm:min-h-[580px] lg:min-h-[600px] overflow-hidden bg-gradient-to-r from-[#E5DFD8] via-[#E1DAD2] to-[#DDD5CC]"
    >
      {/* Subtle Architectural Curved Plaster Arch Backdrop (Tablet & Desktop) */}
      <div
        aria-hidden="true"
        className="pointer-events-none hidden md:block absolute -left-24 -top-24 w-[720px] h-[720px] lg:w-[980px] lg:h-[980px] rounded-full bg-gradient-to-br from-[#F3EFEA] via-[#ECE7E1] to-[#E3DDD5] opacity-90"
      />

      {/* Mobile Full-Bleed Editorial Portrait Backdrop (< md) */}
      <div className="md:hidden absolute inset-0">
        <img
          src="/categories/wedding_saree.jpg"
          alt="Alankrita bridal ivory and peach-gold Kanchipuram wedding saree with custom embroidered blouse"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-top"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-[#1A1410]/92 via-[#1A1410]/45 via-48% to-[#1A1410]/10"
        />
      </div>

      {/* Main Full-Viewport Hero Layout */}
      <div className="relative z-10 w-full h-full grid grid-cols-1 md:grid-cols-12 items-end md:items-stretch">
        {/* Left Editorial Typography & CTAs */}
        <div className="md:col-span-6 flex flex-col justify-end md:justify-center h-full px-6 sm:px-10 pb-10 pt-8 md:py-12 md:pl-10 lg:pl-14 xl:pl-20 md:pr-6 lg:pr-10">
          <p className="text-[11px] sm:text-[12px] lg:text-[13px] tracking-[0.16em] uppercase text-[#E5D7C6] md:text-[#6E5E50] mb-3 lg:mb-4">
            Kochi · Women&apos;s &amp; Kids&apos; Boutique
          </p>

          <h1 className="font-serif font-normal text-[#FFFCF9] md:text-[#1E1813] text-[36px] sm:text-[46px] md:text-[44px] lg:text-[64px] xl:text-[76px] leading-[1.05] tracking-[-0.015em] text-balance">
            Timeless Grace.
            <br />
            Handcrafted for You.
          </h1>

          <p className="mt-3.5 sm:mt-5 lg:mt-6 text-[14px] sm:text-[15px] lg:text-[18px] text-[#EDE4DA] md:text-[#4C433B] leading-[1.6] max-w-[360px] sm:max-w-[420px] lg:max-w-[470px]">
            Custom-tailored wedding sarees, designer gowns, kurtis, and festive kids&apos; outfits—crafted in Kochi and customized to your colors and measurements.
          </p>

          <div className="mt-6 sm:mt-8 lg:mt-10 flex flex-wrap items-center gap-4 sm:gap-6 lg:gap-8">
            <button
              type="button"
              onClick={onShopNewArrivals}
              className="bg-[#FFFCF9] text-[#1E1813] hover:bg-[#EFE7DE] md:bg-[#1E1813] md:text-[#FFFCF9] md:hover:bg-[#352C24] text-[11px] lg:text-[13px] font-semibold tracking-[0.12em] uppercase px-7 py-3.5 lg:px-10 lg:py-4 transition-colors duration-150 cursor-pointer whitespace-nowrap shrink-0"
            >
              SHOP NEW ARRIVALS
            </button>

            <button
              type="button"
              onClick={onExploreCollections}
              className="inline-flex items-center gap-2.5 text-[11px] lg:text-[13px] font-semibold tracking-[0.12em] uppercase text-[#FFFCF9] md:text-[#1E1813] hover:opacity-75 transition-opacity duration-150 cursor-pointer whitespace-nowrap shrink-0 py-2"
            >
              <span>EXPLORE ALL 11 STYLES</span>
              <ArrowRight className="w-3.5 h-3.5 lg:w-4 lg:h-4" strokeWidth={1.8} />
            </button>
          </div>
        </div>

        {/* Right Editorial Bridal Portrait (Tablet & Desktop Full-Height Split) */}
        <div className="hidden md:block md:col-span-6 relative h-full">
          <img
            src="/categories/wedding_saree.jpg"
            alt="Alankrita bridal ivory and peach-gold Kanchipuram wedding saree with custom embroidered blouse"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-top"
          />
          {/* Soft Left Feather Gradient so portrait blends seamlessly into the arch backdrop */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-0 w-24 lg:w-36 bg-gradient-to-r from-[#DFD8D0] via-[#DFD8D0]/55 to-transparent"
          />
        </div>
      </div>

      {/* Subtle Scroll Cue to Explore Categories Below the Fold */}
      <button
        type="button"
        onClick={handleScrollDown}
        aria-label="Scroll to categories"
        className="hidden md:inline-flex items-center gap-1.5 absolute bottom-5 left-10 lg:left-14 xl:left-20 z-20 text-[11px] tracking-[0.14em] uppercase text-[#5E5247] hover:text-[#1E1813] transition-colors cursor-pointer py-1"
      >
        <span>Browse Categories</span>
        <ChevronDown className="w-3.5 h-3.5" strokeWidth={1.8} />
      </button>
    </section>
  );
}
