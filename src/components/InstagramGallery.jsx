import { useState } from 'react';
import { X, Instagram, ArrowUpRight } from 'lucide-react';
import { BRAND, INSTAGRAM_POSTS } from '../data/storeData';

export default function InstagramGallery() {
  const [selectedPost, setSelectedPost] = useState(null);

  return (
    <section aria-label="Instagram Lookbook" className="bg-[#FBF7F4] pb-12 sm:pb-16 lg:pb-20">
      <div className="w-full px-4 sm:px-6 lg:px-0">
        <div className="text-center mb-6 sm:mb-8 lg:mb-10">
          <a
            href={BRAND.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-serif font-normal text-[#1E1813] text-[22px] sm:text-[28px] lg:text-[34px] tracking-[-0.01em] hover:opacity-75 transition-opacity"
          >
            <span>Follow Us {BRAND.instagramHandle}</span>
            <ArrowUpRight className="w-5 h-5 lg:w-6 lg:h-6 text-[#6F645B]" strokeWidth={1.6} />
          </a>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-7 gap-2.5 sm:gap-3 lg:gap-2">
          {INSTAGRAM_POSTS.map((post, index) => (
            <button
              key={post.id}
              type="button"
              onClick={() => setSelectedPost(post)}
              className={`group relative aspect-square overflow-hidden bg-[#EAE2D8] cursor-pointer focus-visible:outline-none ${
                index === 6 ? 'hidden sm:block' : ''
              }`}
              aria-label={`View Instagram post: ${post.caption}`}
            >
              <img
                src={post.image}
                alt={post.caption}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-[#1E1813]/0 group-hover:bg-[#1E1813]/25 transition-colors flex items-center justify-center">
                <Instagram
                  className="w-5 h-5 text-[#FFFCF9] opacity-0 group-hover:opacity-100 transition-opacity"
                  strokeWidth={1.6}
                />
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox Preview Modal */}
      {selectedPost && (
        <div
          className="fixed inset-0 z-50 bg-[#1E1813]/65 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setSelectedPost(null)}
        >
          <div
            className="relative bg-[#FFFCF9] max-w-md w-full overflow-hidden shadow-2xl border border-[#E7DFD6]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedPost(null)}
              aria-label="Close post preview"
              className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-[#FFFCF9]/90 text-[#1E1813] flex items-center justify-center hover:bg-[#1E1813] hover:text-[#FFFCF9] transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="aspect-square bg-[#EAE2D8]">
              <img
                src={selectedPost.image}
                alt={selectedPost.caption}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="p-5">
              <div className="flex items-center justify-between gap-2">
                <p className="text-[12px] font-semibold tracking-[0.04em] text-[#6F645B]">
                  {selectedPost.handle}
                </p>
                <a
                  href={BRAND.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] font-semibold tracking-[0.08em] uppercase text-[#1E1813] hover:underline underline-offset-4"
                >
                  <span>View on Instagram</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
              <p className="mt-2 text-[14px] text-[#231D18] leading-relaxed">
                {selectedPost.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
