import { CATEGORIES } from '../data/storeData';

export default function CategoryStrip({ activeFilter, onSelectCategory }) {
  return (
    <section
      aria-label="Browse by category"
      className="bg-[#FBF7F4] py-9 sm:py-12 lg:py-16 border-b border-[#EFE8E0]/60"
    >
      <div className="w-full px-4 sm:px-6 lg:px-6">
        <div className="flex items-start justify-start sm:justify-between lg:justify-around gap-5 sm:gap-6 lg:gap-4 overflow-x-auto no-scrollbar pb-1">
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
                  className={`w-[78px] h-[78px] sm:w-[92px] sm:h-[92px] lg:w-[128px] lg:h-[128px] xl:w-[144px] xl:h-[144px] rounded-full overflow-hidden bg-[#F3ECE4] border transition-all duration-200 flex items-center justify-center ${
                    isActive
                      ? 'border-[#1E1813] ring-2 ring-[#1E1813] ring-offset-2 ring-offset-[#FBF7F4]'
                      : 'border-[#E7DFD5] group-hover:border-[#8F8072]'
                  }`}
                >
                  <img
                    src={category.image}
                    alt={category.label}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                  />
                </span>
                <span
                  className={`mt-2.5 lg:mt-4 text-[12px] sm:text-[13px] lg:text-[16px] tracking-[0.01em] whitespace-nowrap transition-colors ${
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
