import { Heart } from 'lucide-react';
import { formatPrice } from '../data/storeData';

const FILTER_HEADERS = {
  'new-in': {
    title: 'New Arrivals',
    subtitle: 'Fresh boutique pieces just in from our Kochi studio. Ready-to-wear and custom-stitched.',
  },
  all: {
    title: 'All Collections',
    subtitle: 'Every signature women\'s and kids\' style at Alankrita—from bridal sarees to daily kurtis.',
  },
  'wedding-saree': {
    title: 'Wedding Sarees',
    subtitle: 'Heirloom bridal Kanchipuram silks paired with bespoke hand-embroidered blouses.',
  },
  anarkali: {
    title: 'Anarkali',
    subtitle: 'Graceful hand-embroidered cotton and festive Anarkalis crafted for effortless twirls.',
  },
  aline: {
    title: 'A-Line Kurtis',
    subtitle: 'Flattering pleated and yoke-worked A-line silhouettes tailored for everyday elegance.',
  },
  gown: {
    title: 'Designer Gowns',
    subtitle: 'Floor-length tissue silk and hand-embellished party gowns custom-fitted to you.',
  },
  'saree-gown': {
    title: 'Saree Gowns',
    subtitle: 'Pre-draped fluid georgette saree gowns blending traditional grace with modern ease.',
  },
  lehenga: {
    title: 'Lehenga Sets',
    subtitle: 'Hand-beaded bridal and reception lehengas customizable in your preferred shade.',
  },
  'crop-top-skirt': {
    title: 'Crop Top & Skirt',
    subtitle: 'Contemporary festive two-piece ensembles with artisan embroidery and flared skirts.',
  },
  dhavani: {
    title: 'Dhavani Sets',
    subtitle: 'Traditional South Indian half-sarees with hand-embroidered blouses and zari trims.',
  },
  'side-slit-kurti': {
    title: 'Side Slit Kurtis',
    subtitle: 'Straight-cut georgette side-slit kurtis finished with antique-gold beadwork.',
  },
  'umbrella-kurti': {
    title: 'Umbrella Kurtis',
    subtitle: 'Full-flared umbrella kurtis paired with scalloped dupattas for festive comfort.',
  },
  'kids-wear': {
    title: 'Kids Wear',
    subtitle: 'Kerala kasavu pattu pavadas and festive frocks soft-lined and stitched for little ones.',
  },
  festive: {
    title: 'Bridal & Festive',
    subtitle: 'Curated wedding sarees, designer gowns, saree gowns, lehengas, and dhavani sets.',
  },
  kurtis: {
    title: 'Kurtis & Anarkalis',
    subtitle: 'Signature A-line, Anarkali, side-slit, and umbrella kurtis tailored in Kochi.',
  },
  sale: {
    title: 'Festive Offers',
    subtitle: 'Selected Alankrita favorites at special studio pricing for a limited period.',
  },
};

export default function NewArrivals({
  products,
  activeFilter,
  wishlistIds,
  onToggleWishlist,
  onQuickAdd,
  onOpenProduct,
  onShowAll,
  onResetFilter,
}) {
  const headerInfo = FILTER_HEADERS[activeFilter] || FILTER_HEADERS['new-in'];

  return (
    <section id="new-arrivals" className="bg-[#FBF7F4] py-12 sm:py-16 lg:py-20">
      <div className="w-full px-4 sm:px-6 lg:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-start">
          {/* Left Editorial Intro Column */}
          <div className="lg:col-span-3 pt-1 lg:pr-4">
            <h2 className="font-serif font-normal text-[#1E1813] text-[30px] sm:text-[36px] lg:text-[44px] xl:text-[48px] leading-[1.12] tracking-[-0.01em] text-balance">
              {headerInfo.title}
            </h2>
            <p className="mt-3 lg:mt-4 text-[13px] sm:text-[14px] lg:text-[16px] text-[#5E544C] leading-[1.6] max-w-[300px] lg:max-w-[340px]">
              {headerInfo.subtitle}
            </p>
            <div className="mt-6 lg:mt-8 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={activeFilter === 'all' ? onResetFilter : onShowAll}
                className="bg-[#1E1813] text-[#FFFCF9] text-[11px] lg:text-[13px] font-semibold tracking-[0.12em] uppercase px-8 py-3.5 lg:px-10 lg:py-4 hover:bg-[#352C24] transition-colors duration-150 cursor-pointer whitespace-nowrap shrink-0"
              >
                {activeFilter === 'all' ? 'VIEW NEW ARRIVALS' : 'SHOP ALL'}
              </button>
              {activeFilter !== 'new-in' && activeFilter !== 'all' && (
                <button
                  type="button"
                  onClick={onResetFilter}
                  className="text-[12px] lg:text-[14px] text-[#5E544C] hover:text-[#1E1813] underline underline-offset-4 cursor-pointer"
                >
                  Back to New Arrivals
                </button>
              )}
            </div>
          </div>

          {/* Right Product Grid */}
          <div className="lg:col-span-9">
            {products.length === 0 ? (
              <div className="bg-[#F4EEE7] p-12 text-center">
                <p className="font-serif text-2xl text-[#1E1813]">No pieces match this selection.</p>
                <button
                  type="button"
                  onClick={onResetFilter}
                  className="mt-5 bg-[#1E1813] text-[#FFFCF9] text-[12px] font-semibold tracking-[0.12em] uppercase px-7 py-3.5 cursor-pointer"
                >
                  View New Arrivals
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
                {products.map((product) => {
                  const isWishlisted = wishlistIds.includes(product.id);
                  const displayPrice = product.salePrice ?? product.price;
                  return (
                    <article key={product.id} className="group flex flex-col">
                      <div className="relative aspect-[111/143] bg-[#EAE3DC] overflow-hidden">
                        <button
                          type="button"
                          onClick={() => onOpenProduct(product)}
                          className="w-full h-full block cursor-pointer focus-visible:outline-none"
                          aria-label={`View ${product.name}`}
                        >
                          <img
                            src={product.image}
                            alt={product.name}
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-300"
                          />
                        </button>

                        {/* Wishlist Heart Button */}
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            onToggleWishlist(product.id);
                          }}
                          aria-label={
                            isWishlisted
                              ? `Remove ${product.name} from saved items`
                              : `Save ${product.name} to wishlist`
                          }
                          className="absolute top-2.5 right-2.5 w-9 h-9 lg:w-10 lg:h-10 flex items-center justify-center rounded-full bg-[#FFFCF9]/75 hover:bg-[#FFFCF9] transition-colors cursor-pointer"
                        >
                          <Heart
                            className={`w-[17px] h-[17px] lg:w-[20px] lg:h-[20px] transition-colors ${
                              isWishlisted
                                ? 'fill-[#8B3E35] text-[#8B3E35]'
                                : 'text-[#4A4139] hover:text-[#1E1813]'
                            }`}
                            strokeWidth={1.6}
                          />
                        </button>

                        {/* Hover Quick Add Bar */}
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            onQuickAdd(product);
                          }}
                          className="absolute inset-x-3 bottom-3 bg-[#FFFCF9]/95 text-[#1E1813] text-[10px] lg:text-[12px] font-semibold tracking-[0.12em] uppercase py-2.5 lg:py-3 opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 focus:opacity-100 focus:translate-y-0 transition-all duration-150 cursor-pointer shadow-sm hover:bg-[#1E1813] hover:text-[#FFFCF9]"
                        >
                          Quick Add
                        </button>
                      </div>

                      <div className="mt-3.5">
                        <h3 className="text-[13px] sm:text-[14px] lg:text-[16px] font-medium text-[#231D18] leading-snug">
                          <button
                            type="button"
                            onClick={() => onOpenProduct(product)}
                            className="text-left hover:underline underline-offset-2 cursor-pointer"
                          >
                            {product.name}
                          </button>
                        </h3>
                        <div className="mt-1 flex items-center gap-2 text-[13px] lg:text-[15px] tabular-nums">
                          <span className="text-[#5E544C]">{formatPrice(displayPrice)}</span>
                          {product.salePrice && (
                            <span className="text-[#9E9286] line-through text-[12px] lg:text-[14px]">
                              {formatPrice(product.price)}
                            </span>
                          )}
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
