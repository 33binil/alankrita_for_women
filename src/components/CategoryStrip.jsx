import { CATEGORIES } from '../data/storeData';

export default function CategoryStrip({ activeFilter, onSelectCategory }) {
  return (
    <section
      id="categories"
      aria-label="Browse by category"
      className="bg-[#FBF7F4] py-9 sm:py-12 lg:py-14 border-b border-[#EFE8E0]/60 scroll-mt-[98px] sm:scroll-mt-[106px] lg:scroll-mt-[126px]"
    >
      <div className="w-full px-4 sm:px-6 lg:px-6">
        <div className="flex items-start justify-start xl:justify-between gap-4 sm:gap-5 lg:gap-4 overflow-x-auto no-scrollbar pb-2">
          {CATEGORIES.map((category) => {
            const isActive = activeFilter === category.id;
            return (
              <button
                key={category.id}
                type="button"
                onClick={() => onSelectCategory(isActive ? 'new-in' : category.id)}
                className="group flex flex-col items-center shrink-0 cursor-pointer focus-visible:outline-none"
              >
                <span
                  className={`w-[78px] h-[78px] sm:w-[88px] sm:h-[88px] lg:w-[98px] lg:h-[98px] xl:w-[106px] xl:h-[106px] rounded-full overflow-hidden bg-[#F3ECE4] border transition-all duration-200 flex items-center justify-center ${
                    isActive
                      ? 'border-[#1E1813] ring-2 ring-[#1E1813] ring-offset-2 ring-offset-[#FBF7F4]'
                      : 'border-[#E7DFD5] group-hover:border-[#8F8072]'
                  }`}
                >
                  <img
                    src={category.image}
                    alt={category.label}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-200"
                  />
                </span>
                <span
                  className={`mt-2.5 lg:mt-3 text-[12px] sm:text-[13px] xl:text-[13px] tracking-[0.01em] whitespace-nowrap transition-colors ${
                    isActive
                      ? 'text-[#1E1813] font-semibold'
                      : 'text-[#3A322C] group-hover:text-[#1E1813]'
                  }`}
                >
                  {category.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
