/* ================================
   CENTRAL PRODUCT DATABASE
   DO NOT PUT UI LOGIC HERE
================================ */

const PRODUCTS = [
  /* ================= CLOTHING ================= */

  {
    id: "jacket-1",
    category: "clothing",
    title: "Campus Sutra Zip-Front Bomber Jacket",
    price: "₹1,999",
    status: "instock",
    short: "Regular Fit",
    search: "campus sutra bomber jacket regular",
    images: ["jacket1-1.jpg", "jacket1-2.jpg", "jacket1-3.jpg"],
    description: `
      <b>Size:</b> S, M, L, XL<br><br>
      <b>Fit:</b> Regular Fit<br>
      <b>Care:</b> Machine Wash
    `
  },

  {
    id: "jacket-2",
    category: "clothing",
    title: "Nuon Brown Text Design Relaxed-Fit Cotton Jacket",
    price: "₹2,999",
    status: "instock",
    short: "Relaxed Fit",
    search: "nuon cotton jacket brown relaxed",
    images: ["shirt1-3.jpg", "shirt1-4.jpg", "shirt1-5.jpg"],
    description: `
      <b>Size:</b> XS, S, M, L, XL<br><br>
      <b>Fit:</b> Relaxed Fit<br>
      <b>Fabric:</b> 100% Cotton<br>
      <b>Country:</b> India
    `
  },

  {
    id: "shirt-1",
    category: "clothing",
    title: "ETA Brown Textured Relaxed-Fit Cotton Shirt",
    price: "₹1,799",
    status: "instock",
    short: "Relaxed Fit",
    search: "eta brown shirt cotton relaxed",
    images: ["shirt1-1.jpg", "shirt1-2.jpg"],
    description: `
      <b>Size:</b> XS, S, M, L<br><br>
      <b>Fit:</b> Relaxed Fit<br>
      <b>Fabric:</b> 100% Cotton
    `
  },

  {
    id: "jacket-4",
    category: "clothing",
    title: "Studiofit Dark Brown Relaxed-Fit Hooded Jacket",
    price: "₹2,199",
    status: "instock",
    short: "Relaxed Fit",
    search: "studiofit hooded jacket brown relaxed",
    images: ["jacket3-1.jpg", "jacket3-2.jpg", "jacket3-3.jpg"],
    description: `
      <b>Size:</b> XS, S, M, L<br><br>
      <b>Fit:</b> Relaxed Fit<br>
      <b>Care:</b> Machine Wash
    `
  },

  /* ================= SHOES ================= */

  {
  id: "shoe-2",
  category: "shoes",
  title: "Men’s Olive Suede Sneakers",
  price: "Currently Out of Stock",
  short: "Suede Leather",
  search: "mens olive suede sneakers leather olive",
  images: [
    "shoe2-1.jpg",
    "shoe2-2.jpg"
  ],
  description: `
    <b>Size:</b> 6, 7, 8, 9, 10<br><br>
    <b>Material:</b> Suede Leather
  `,
  outOfStock: true
  }

  {
    id: "shoe-2",
    category: "shoes",
    title: "Men’s Olive Suede Sneakers",
    price: "Currently Out of Stock",
    status: "outofstock",
    short: "Olive Suede",
    search: "mens olive suede sneakers",
    images: ["shoe2-1.jpg", "shoe2-2.jpg"],
    description: `
      <b>Size:</b> 6, 7, 8, 9, 10<br><br>
      <b>Material:</b> Suede Leather
    `
  }
];

/* ================================
   DO NOT EXPORT / MODIFY
   render-products.js will consume this
================================ */
