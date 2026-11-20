import { useState } from 'react';
import { X, Search } from 'lucide-react';

export default function SearchModal({ isOpen, products, onClose, onSelectProduct }) {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const trimmed = query.trim().toLowerCase();
  const matches = trimmed
    ? products.filter(
        (p) =>
          p.name.toLowerCase().includes(trimmed) ||
          p.category.toLowerCase().includes(trimmed) ||
          p.description.toLowerCase().includes(trimmed)
      )
    : products.slice(0, 4);

  return (
    <div
      className="fixed inset-0 z-50 bg-[#1E1813]/45 backdrop-blur-xs flex items-start justify-center pt-16 sm:pt-24 px-4"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Search catalog"
        className="w-full max-w-2xl bg-[#FFFCF9] border border-[#E7DFD6] shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 px-5 py-4 border-b border-[#EFE8E0]">
          <Search className="w-4 h-4 text-[#6F645B] shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search blazers, knitwear, dresses, accessories..."
            className="flex-1 bg-transparent text-[14px] text-[#1E1813] placeholder:text-[#968A7E] focus:outline-none"
          />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close search"
            className="p-1 text-[#5E544C] hover:text-[#1E1813] cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-5 max-h-[65vh] overflow-y-auto">
          <p className="text-[11px] uppercase tracking-[0.12em] text-[#7B6E63] mb-3">
            {trimmed ? `Results (${matches.length})` : 'Popular Pieces'}
          </p>

          {matches.length === 0 ? (
            <p className="py-8 text-center text-[13px] text-[#6F645B]">
              No items found for &ldquo;{query}&rdquo;. Try &ldquo;blazer&rdquo;, &ldquo;shirt&rdquo;, or &ldquo;pants&rdquo;.
            </p>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {matches.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    onSelectProduct(item);
                    onClose();
                  }}
                  className="text-left group cursor-pointer"
                >
                  <div className="aspect-[111/143] bg-[#EAE3DC] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-200"
                    />
                  </div>
                  <p className="mt-2 text-[12px] font-medium text-[#1E1813] truncate">
                    {item.name}
                  </p>
                  <p className="text-[12px] text-[#5E544C] tabular-nums">
                    ${(item.salePrice ?? item.price).toFixed(2)}
                  </p>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
