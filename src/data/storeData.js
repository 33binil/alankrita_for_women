export const CATEGORIES = [
  { id: 'dresses', label: 'Dresses', image: '/images/cat-dresses.jpg' },
  { id: 'tops', label: 'Tops', image: '/images/cat-tops.jpg' },
  { id: 'bottoms', label: 'Bottoms', image: '/images/cat-bottoms.jpg' },
  { id: 'bags', label: 'Bags', image: '/images/cat-bags.jpg' },
  { id: 'accessories', label: 'Accessories', image: '/images/cat-accessories.jpg' },
  { id: 'blazers', label: 'Blazers', image: '/images/cat-blazers.jpg' },
  { id: 'shoes', label: 'Shoes', image: '/images/cat-shoes.jpg' },
];

export const PRODUCTS = [
  {
    id: 'ribbed-knit-top',
    name: 'Ribbed Knit Top',
    price: 49.0,
    category: 'tops',
    image: '/images/prod-knit-top.jpg',
    sizes: ['XS', 'S', 'M', 'L'],
    description:
      'Finely ribbed ivory mock-neck tank crafted from breathable organic cotton-modal blend for effortless layering.',
    isNewArrival: true,
    onSale: false,
  },
  {
    id: 'oversized-blazer',
    name: 'Oversized Blazer',
    price: 89.0,
    category: 'blazers',
    image: '/images/prod-oversized-blazer.jpg',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    description:
      'Relaxed single-breasted tailoring in warm oatmeal linen-viscose with structured shoulders and tonal lining.',
    isNewArrival: true,
    onSale: false,
  },
  {
    id: 'classic-white-shirt',
    name: 'Classic White Shirt',
    price: 59.0,
    category: 'tops',
    image: '/images/prod-white-shirt.jpg',
    sizes: ['XS', 'S', 'M', 'L'],
    description:
      'Crisp poplin button-down featuring dropped shoulders, mother-of-pearl buttons, and an effortless curved hem.',
    isNewArrival: true,
    onSale: false,
  },
  {
    id: 'tailored-wide-leg-pants',
    name: 'Tailored Wide Leg Pants',
    price: 79.0,
    category: 'bottoms',
    image: '/images/prod-wide-pants.jpg',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    description:
      'High-waisted pleated trousers in soft champagne twill with fluid drape and side-seam pockets.',
    isNewArrival: true,
    onSale: false,
  },
  {
    id: 'linen-wrap-midi-dress',
    name: 'Linen Wrap Midi Dress',
    price: 118.0,
    salePrice: 84.0,
    category: 'dresses',
    image: '/images/ig-5.jpg',
    sizes: ['XS', 'S', 'M', 'L'],
    description:
      'Sunlit cream linen midi dress with a sculpted bodice and breathable A-line silhouette for warm-weather ease.',
    isNewArrival: false,
    onSale: true,
  },
  {
    id: 'structured-leather-tote',
    name: 'Structured Leather Tote',
    price: 145.0,
    salePrice: 109.0,
    category: 'bags',
    image: '/images/promo-accessory.jpg',
    sizes: ['One Size'],
    description:
      'Supple pebbled calfskin top-handle bag in warm alabaster with brushed gold hardware and detachable strap.',
    isNewArrival: false,
    onSale: true,
  },
  {
    id: 'sculpted-gold-hoop-set',
    name: 'Sculpted Gold Hoop Set',
    price: 44.0,
    category: 'accessories',
    image: '/images/ig-6.jpg',
    sizes: ['One Size'],
    description:
      '18k gold-vermeil everyday hoop earrings and delicate layered chains crafted for subtle luminosity.',
    isNewArrival: false,
    onSale: false,
  },
  {
    id: 'minimal-court-sneaker',
    name: 'Minimal Court Sneaker',
    price: 110.0,
    category: 'shoes',
    image: '/images/cat-shoes.jpg',
    sizes: ['36', '37', '38', '39', '40'],
    description:
      'Clean low-profile Italian leather sneakers with cushioned footbed and tonal stitched sole.',
    isNewArrival: false,
    onSale: false,
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    quote:
      '"The quality is incredible and the styles are so timeless. ÉLANORA is my go-to for everything!"',
    author: 'Sophia L.',
    avatar: '/images/avatar-sophia.jpg',
    rating: 5,
  },
  {
    id: 2,
    quote:
      '"Beautiful pieces, fast shipping, and amazing customer service. Highly recommend!"',
    author: 'Jessica M.',
    avatar: '/images/avatar-jessica.jpg',
    rating: 5,
  },
  {
    id: 3,
    quote:
      '"I feel so confident in everything I\'ve ordered. Worth every penny."',
    author: 'Ava T.',
    avatar: '/images/avatar-ava.jpg',
    rating: 5,
  },
  {
    id: 4,
    quote:
      '"The Oversized Blazer drapes like bespoke tailoring. Effortless from office meetings to dinner."',
    author: 'Claire R.',
    avatar: '/images/avatar-sophia.jpg',
    rating: 5,
  },
  {
    id: 5,
    quote:
      '"Every fabric feels substantial and thoughtfully finished. My capsule wardrobe is finally complete."',
    author: 'Elena K.',
    avatar: '/images/avatar-jessica.jpg',
    rating: 5,
  },
  {
    id: 6,
    quote:
      '"Packaging, fit, and silhouette are consistently refined. Easily my favorite boutique online."',
    author: 'Maya H.',
    avatar: '/images/avatar-ava.jpg',
    rating: 5,
  },
];

export const INSTAGRAM_POSTS = [
  {
    id: 'ig-1',
    image: '/images/ig-1.jpg',
    caption: 'Weekend tailoring — Oversized Blazer paired with relaxed denim.',
    handle: '@elanora.style',
  },
  {
    id: 'ig-2',
    image: '/images/ig-2.jpg',
    caption: 'Morning essentials: structured leather, straw sunhat, and tortoise frames.',
    handle: '@elanora.style',
  },
  {
    id: 'ig-3',
    image: '/images/ig-3.jpg',
    caption: 'Draped ivory silk halter styled with tailored champagne trousers.',
    handle: '@elanora.style',
  },
  {
    id: 'ig-4',
    image: '/images/ig-4.jpg',
    caption: 'Inside the atelier: neutral palettes curated for every season.',
    handle: '@elanora.style',
  },
  {
    id: 'ig-5',
    image: '/images/ig-5.jpg',
    caption: 'Golden hour linen dress from the Summer Essentials edit.',
    handle: '@elanora.style',
  },
  {
    id: 'ig-6',
    image: '/images/ig-6.jpg',
    caption: 'Delicate gold accents for an understated everyday finish.',
    handle: '@elanora.style',
  },
  {
    id: 'ig-7',
    image: '/images/ig-7.jpg',
    caption: 'The signature ÉLANORA blazer silhouette in warm taupe.',
    handle: '@elanora.style',
  },
];

export const FOOTER_COLUMNS = [
  {
    title: 'Shop',
    links: [
      { label: 'New In', action: { type: 'filter', value: 'new-in' } },
      { label: 'Dresses', action: { type: 'filter', value: 'dresses' } },
      { label: 'Tops', action: { type: 'filter', value: 'tops' } },
      { label: 'Bottoms', action: { type: 'filter', value: 'bottoms' } },
      { label: 'Accessories', action: { type: 'filter', value: 'accessories' } },
      { label: 'Sale', action: { type: 'filter', value: 'sale' } },
    ],
  },
  {
    title: 'Customer Care',
    links: [
      { label: 'Track Order', action: { type: 'modal', value: 'track-order' } },
      { label: 'Returns & Exchanges', action: { type: 'modal', value: 'returns' } },
      { label: 'Shipping Info', action: { type: 'modal', value: 'shipping' } },
      { label: 'Size Guide', action: { type: 'modal', value: 'size-guide' } },
      { label: 'FAQ', action: { type: 'modal', value: 'faq' } },
      { label: 'Contact Us', action: { type: 'modal', value: 'contact' } },
    ],
  },
  {
    title: 'About',
    links: [
      { label: 'Our Story', action: { type: 'modal', value: 'story' } },
      { label: 'Sustainability', action: { type: 'modal', value: 'sustainability' } },
      { label: 'Careers', action: { type: 'modal', value: 'careers' } },
      { label: 'Press', action: { type: 'modal', value: 'press' } },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Terms & Conditions', action: { type: 'modal', value: 'terms' } },
      { label: 'Privacy Policy', action: { type: 'modal', value: 'privacy' } },
      { label: 'Cookie Policy', action: { type: 'modal', value: 'cookies' } },
    ],
  },
];
