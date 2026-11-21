import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { TESTIMONIALS } from '../data/storeData';

export default function Testimonials() {
  const [pageIndex, setPageIndex] = useState(0);
  const totalPages = Math.ceil(TESTIMONIALS.length / 3);

  const visibleItems = TESTIMONIALS.slice(pageIndex * 3, pageIndex * 3 + 3);

  const handlePrev = () => {
    setPageIndex((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const handleNext = () => {
    setPageIndex((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  return (
    <section aria-label="Customer Reviews" className="bg-[#FBF7F4] py-14 sm:py-18 lg:py-22">
      <div className="w-full px-4 sm:px-6 lg:px-6">
        <h2 className="font-serif font-normal text-center text-[#1E1813] text-[24px] sm:text-[30px] lg:text-[38px] tracking-[-0.01em]">
          Loved by Women &amp; Moms Everywhere
        </h2>

        <div className="relative mt-9 sm:mt-12 lg:mt-14 flex items-center">
          {/* Left Arrow */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous customer reviews"
            className="hidden sm:flex shrink-0 w-9 h-9 lg:w-12 lg:h-12 rounded-full border border-[#DFD5CA] bg-[#FFFCF9] text-[#5E544C] hover:text-[#1E1813] hover:border-[#1E1813] items-center justify-center transition-colors cursor-pointer mr-4 lg:mr-10"
          >
            <ChevronLeft className="w-4 h-4 lg:w-5 lg:h-5" strokeWidth={1.6} />
          </button>

          {/* 3-Column Reviews Grid */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-7 sm:gap-10 lg:gap-14">
            {visibleItems.map((item) => (
              <blockquote key={item.id} className="flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1.5" aria-label={`${item.rating} out of 5 stars`}>
                    {Array.from({ length: item.rating }).map((_, idx) => (
                      <Star
                        key={idx}
                        className="w-3.5 h-3.5 lg:w-4.5 lg:h-4.5 fill-[#1E1813] text-[#1E1813]"
                        strokeWidth={1.2}
                      />
                    ))}
                  </div>
                  <p className="mt-3.5 lg:mt-4 text-[13px] sm:text-[14px] lg:text-[16px] text-[#3A322C] leading-[1.65]">
                    {item.quote}
                  </p>
                </div>

                <footer className="mt-5 lg:mt-6 flex items-center gap-3">
                  <span
                    aria-hidden="true"
                    className="w-8 h-8 lg:w-9 lg:h-9 rounded-full bg-[#EAE1D7] border border-[#DFD3C6] text-[#1E1813] font-serif text-[12px] lg:text-[13px] flex items-center justify-center shrink-0"
                  >
                    {item.initials}
                  </span>
                  <div className="flex items-center gap-1.5 text-[12px] sm:text-[13px] lg:text-[15px]">
                    <cite className="not-italic font-medium text-[#231D18]">
                      {item.author}
                    </cite>
                    <span className="text-[#9B8F84]" aria-hidden="true">·</span>
                    <span className="text-[#6F645B]">{item.location}</span>
                  </div>
                </footer>
              </blockquote>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next customer reviews"
            className="hidden sm:flex shrink-0 w-9 h-9 lg:w-12 lg:h-12 rounded-full border border-[#DFD5CA] bg-[#FFFCF9] text-[#5E544C] hover:text-[#1E1813] hover:border-[#1E1813] items-center justify-center transition-colors cursor-pointer ml-4 lg:ml-10"
          >
            <ChevronRight className="w-4 h-4 lg:w-5 lg:h-5" strokeWidth={1.6} />
          </button>
        </div>

        {/* Mobile Carousel Controls */}
        <div className="mt-6 flex sm:hidden items-center justify-center gap-4">
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous customer reviews"
            className="w-9 h-9 rounded-full border border-[#DFD5CA] bg-[#FFFCF9] text-[#3A322C] flex items-center justify-center"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <span className="text-[12px] text-[#6F645B] tabular-nums">
            {pageIndex + 1} / {totalPages}
          </span>
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next customer reviews"
            className="w-9 h-9 rounded-full border border-[#DFD5CA] bg-[#FFFCF9] text-[#3A322C] flex items-center justify-center"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
