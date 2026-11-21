export const BRAND = {
  name: 'Alankrita',
  tagline: "Women's & Kids' Boutique",
  instagramHandle: '@alankrita_for_women',
  instagramUrl: 'https://www.instagram.com/alankrita_for_women',
  whatsappDisplay: '+91 70347 31936',
  whatsappUrl: 'https://wa.me/917034731936',
  location: 'Kochi, Kerala, India',
  logo: '/logo/alankrita_for_womern_logo.jpg',
};

export function formatPrice(amount) {
  return `₹${Number(amount).toLocaleString('en-IN')}`;
}

export const CATEGORIES = [
  { id: 'wedding-saree', label: 'Wedding Saree', image: '/categories/wedding_saree.jpg' },
  { id: 'anarkali', label: 'Anarkali', image: '/categories/anarkali.jpg' },
  { id: 'aline', label: 'A-Line Kurtis', image: '/categories/aline.jpg' },
  { id: 'gown', label: 'Designer Gowns', image: '/categories/gown.jpg' },
  { id: 'saree-gown', label: 'Saree Gowns', image: '/categories/saree_gown.jpg' },
  { id: 'lehenga', label: 'Lehenga', image: '/categories/lehanka.jpg' },
  { id: 'crop-top-skirt', label: 'Crop Top & Skirt', image: '/categories/crop_top_&_skirt.jpg' },
  { id: 'dhavani', label: 'Dhavani Sets', image: '/categories/dhawani.jpg' },
  { id: 'side-slit-kurti', label: 'Side Slit Kurtis', image: '/categories/side_slit_kurti.jpg' },
  { id: 'umbrella-kurti', label: 'Umbrella Kurtis', image: '/categories/umbrella_kurtis.jpg' },
  { id: 'kids-wear', label: 'Kids Wear', image: '/categories/kids_wear.jpg' },
];

export const PRODUCTS = [
  {
    id: 'champagne-tissue-party-gown',
    name: 'Champagne Tissue Silk Gown',
    price: 5499,
    category: 'gown',
    collectionGroup: 'festive',
    image: '/categories/gown.jpg',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'Custom'],
    description:
      'Luminous champagne-ivory tissue silk floor-length gown with a sweetheart neckline and emerald-green stone & pearl handwork waist belt. Custom-stitched to your measurements in Kochi.',
    isNewArrival: true,
    onSale: false,
  },
  {
    id: 'ruby-pleated-aline-kurti',
    name: 'Ruby Handworked A-Line Kurti',
    price: 2499,
    category: 'aline',
    collectionGroup: 'kurtis',
    image: '/categories/aline.jpg',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'Custom'],
    description:
      'Vibrant ruby-crimson finely pleated A-line kurti adorned with delicate hand-embroidered zardosi yoke borders and floral motifs. Available for color and size customization.',
    isNewArrival: true,
    onSale: false,
  },
  {
    id: 'ivory-floral-anarkali',
    name: 'Ivory Floral Cotton Anarkali',
    price: 2899,
    category: 'anarkali',
    collectionGroup: 'kurtis',
    image: '/categories/anarkali.jpg',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'Custom'],
    description:
      'Breathable ivory cotton-linen Anarkali featuring dainty coral and mustard floral threadwork bootis, a structured square neckline, and front button placket for effortless grace.',
    isNewArrival: true,
    onSale: false,
  },
  {
    id: 'cobalt-georgette-lehenga',
    name: 'Royal Cobalt Embellished Lehenga',
    price: 6299,
    salePrice: 5499,
    category: 'lehenga',
    collectionGroup: 'festive',
    image: '/categories/lehanka.jpg',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'Custom'],
    description:
      'Flowy royal-blue georgette flared lehenga paired with a sheer-sleeve crop blouse showcasing diagonal hand-beaded cutdana work and a lightweight matching dupatta.',
    isNewArrival: true,
    onSale: true,
  },
  {
    id: 'kanchipuram-bridal-wedding-saree',
    name: 'Ivory & Peach Bridal Wedding Saree',
    price: 14999,
    category: 'wedding-saree',
    collectionGroup: 'festive',
    image: '/categories/wedding_saree.jpg',
    sizes: ['Free Size', 'With Custom Blouse'],
    description:
      'Radiant ivory-gold Kanchipuram bridal silk saree woven with rich peach-coral zari borders and paired with a bespoke hand-embroidered bridal silk blouse tailored to fit.',
    isNewArrival: false,
    onSale: false,
  },
  {
    id: 'cocoa-draped-saree-gown',
    name: 'Cocoa Draped Georgette Saree Gown',
    price: 4899,
    salePrice: 4299,
    category: 'saree-gown',
    collectionGroup: 'festive',
    image: '/categories/saree_gown.jpg',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'Custom'],
    description:
      'Warm cocoa-brown pre-draped saree gown in fluid georgette with a tiered ruffle hem, hand-beaded sleeves, and an embellished waist belt for effortless evening elegance.',
    isNewArrival: false,
    onSale: true,
  },
  {
    id: 'tangerine-emerald-dhavani',
    name: 'Tangerine & Emerald Festive Dhavani',
    price: 4499,
    category: 'dhavani',
    collectionGroup: 'festive',
    image: '/categories/dhawani.jpg',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'Custom'],
    description:
      'Traditional South Indian half-saree set pairing a vibrant tangerine pleated skirt and gold-trimmed drape with a deep bottle-green floral hand-embroidered blouse.',
    isNewArrival: false,
    onSale: false,
  },
  {
    id: 'designer-crop-top-skirt',
    name: 'Festive Crop Top & Skirt Set',
    price: 4699,
    salePrice: 3999,
    category: 'crop-top-skirt',
    collectionGroup: 'festive',
    image: '/categories/crop_top_&_skirt.jpg',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'Custom'],
    description:
      'Handcrafted two-piece festive crop top and flared skirt ensemble designed in our Kochi studio with artisanal handwork and custom color options on pre-booking.',
    isNewArrival: false,
    onSale: true,
  },
  {
    id: 'emerald-side-slit-kurti',
    name: 'Emerald Gold-Work Side Slit Kurti',
    price: 2299,
    category: 'side-slit-kurti',
    collectionGroup: 'kurtis',
    image: '/categories/side_slit_kurti.jpg',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'Custom'],
    description:
      'Deep emerald-green georgette straight side-slit kurti accented with intricate antique-gold beadwork along the boat neckline and sleeve cuffs, paired with a sheer organza dupatta.',
    isNewArrival: false,
    onSale: false,
  },
  {
    id: 'crimson-umbrella-kurti',
    name: 'Crimson Scallop Umbrella Kurti',
    price: 2699,
    salePrice: 2299,
    category: 'umbrella-kurti',
    collectionGroup: 'kurtis',
    image: '/categories/umbrella_kurtis.jpg',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'Custom'],
    description:
      'Full-flared crimson georgette umbrella kurti finished with handworked neckline detailing and a matching gold-scalloped dupatta for festive gatherings.',
    isNewArrival: false,
    onSale: true,
  },
  {
    id: 'kasavu-brocade-kids-pattu-pavada',
    name: 'Kids Kasavu Brocade Pattu Pavada',
    price: 1899,
    category: 'kids-wear',
    collectionGroup: 'kids',
    image: '/categories/kids_wear.jpg',
    sizes: ['1–2Y', '3–4Y', '5–6Y', '7–8Y', '9–10Y', 'Custom'],
    description:
      'Traditional Kerala kasavu cream-gold pleated skirt paired with a rich magenta-gold brocade ruffle-sleeve blouse and handcrafted tassels. Soft cotton-lined for little ones.',
    isNewArrival: false,
    onSale: false,
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    quote:
      '"Ordered a custom tissue silk gown and matching pattu pavada for my daughter—the stitching, fall, and handwork were beyond expectations!"',
    author: 'Anjali Menon',
    location: 'Kochi',
    initials: 'AM',
    rating: 5,
  },
  {
    id: 2,
    quote:
      '"Alankrita tailored my bridal blouse and wedding saree drape to perfection. Smooth WhatsApp coordination and on-time delivery."',
    author: 'Meera Nair',
    location: 'Trivandrum',
    initials: 'MN',
    rating: 5,
  },
  {
    id: 3,
    quote:
      '"The Ivory Anarkali and Ruby A-Line Kurti fit like a dream. Soft lining, neat finishing, and exact colors just like on Instagram."',
    author: 'Divya Krishnan',
    location: 'Bengaluru',
    initials: 'DK',
    rating: 5,
  },
  {
    id: 4,
    quote:
      '"My daughter wore Alankrita\'s kasavu brocade pattu pavada for Onam and everyone asked where it was stitched. So comfortable for kids!"',
    author: 'Sneha Varghese',
    location: 'Thrissur',
    initials: 'SV',
    rating: 5,
  },
  {
    id: 5,
    quote:
      '"Loved how they customized the Royal Blue Lehenga in my exact measurements and shipped it safely to Dubai well before the reception."',
    author: 'Fathima Rahman',
    location: 'Dubai',
    initials: 'FR',
    rating: 5,
  },
  {
    id: 6,
    quote:
      '"From daily-wear side slit kurtis to festive saree gowns, Alankrita is always my first choice for women\'s and kids\' boutique wear."',
    author: 'Lakshmi Pillai',
    location: 'Chennai',
    initials: 'LP',
    rating: 5,
  },
];

export const INSTAGRAM_POSTS = [
  {
    id: 'ig-1',
    image: '/categories/gown.jpg',
    caption: 'Champagne tissue silk gown with emerald hand-embroidered waist detailing. Custom sizing open via DM & WhatsApp.',
    handle: '@alankrita_for_women',
  },
  {
    id: 'ig-2',
    image: '/categories/aline.jpg',
    caption: 'Ruby pleated A-line kurti with delicate gold zardosi yoke work — crafted in our Kochi studio.',
    handle: '@alankrita_for_women',
  },
  {
    id: 'ig-3',
    image: '/categories/kids_wear.jpg',
    caption: 'Little festive charm: Kerala kasavu pleated skirt paired with magenta brocade ruffle blouse & handmade tassels.',
    handle: '@alankrita_for_women',
  },
  {
    id: 'ig-4',
    image: '/categories/wedding_saree.jpg',
    caption: 'Bridal elegance in ivory & peach-gold Kanchipuram silk paired with our custom hand-embroidered bridal blouse.',
    handle: '@alankrita_for_women',
  },
  {
    id: 'ig-5',
    image: '/categories/saree_gown.jpg',
    caption: 'Twirling in our warm cocoa draped georgette saree gown with ruffled hem & handworked sleeves.',
    handle: '@alankrita_for_women',
  },
  {
    id: 'ig-6',
    image: '/categories/dhawani.jpg',
    caption: 'Festive tangerine & bottle-green dhavani set with hand-embroidered floral blouse. Pre-book in your custom shade.',
    handle: '@alankrita_for_women',
  },
  {
    id: 'ig-7',
    image: '/categories/umbrella_kurtis.jpg',
    caption: 'Rich crimson flared umbrella kurti paired with a delicate gold scalloped dupatta.',
    handle: '@alankrita_for_women',
  },
];

export const FOOTER_COLUMNS = [
  {
    title: 'Shop',
    links: [
      { label: 'New Arrivals', action: { type: 'filter', value: 'new-in' } },
      { label: 'Wedding Sarees', action: { type: 'filter', value: 'wedding-saree' } },
      { label: 'Anarkali & Kurtis', action: { type: 'filter', value: 'kurtis' } },
      { label: 'Gowns & Lehengas', action: { type: 'filter', value: 'festive' } },
      { label: 'Dhavani Sets', action: { type: 'filter', value: 'dhavani' } },
      { label: 'Kids Wear', action: { type: 'filter', value: 'kids-wear' } },
    ],
  },
  {
    title: 'Customer Care',
    links: [
      { label: 'Track Order', action: { type: 'modal', value: 'track-order' } },
      { label: 'Custom Stitching', action: { type: 'modal', value: 'custom-stitching' } },
      { label: 'Shipping & Pre-Book', action: { type: 'modal', value: 'shipping' } },
      { label: 'Size Guide', action: { type: 'modal', value: 'size-guide' } },
      { label: 'FAQ', action: { type: 'modal', value: 'faq' } },
      { label: 'Contact & WhatsApp', action: { type: 'modal', value: 'contact' } },
    ],
  },
  {
    title: 'About Alankrita',
    links: [
      { label: 'Our Story', action: { type: 'modal', value: 'story' } },
      { label: 'Women & Kids Edit', action: { type: 'modal', value: 'women-kids' } },
      { label: 'Handcraft & Fabrics', action: { type: 'modal', value: 'craftsmanship' } },
      { label: 'Kochi Studio', action: { type: 'modal', value: 'studio' } },
    ],
  },
  {
    title: 'Policies',
    links: [
      { label: 'Terms & Conditions', action: { type: 'modal', value: 'terms' } },
      { label: 'Care & Exchanges', action: { type: 'modal', value: 'returns' } },
      { label: 'Privacy Policy', action: { type: 'modal', value: 'privacy' } },
    ],
  },
];
