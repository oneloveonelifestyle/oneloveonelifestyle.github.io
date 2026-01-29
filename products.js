/* =====================================================
   MASTER PRODUCT DATABASE
   Single source of truth for entire website
===================================================== */

const PRODUCTS = [
  /* ======================
     CLOTHING
  ====================== */

  {
    id: "jacket-1",
    category: "clothing",
    title: "Campus Sutra Zip-Front Bomber Jacket",
    price: "₹1,999",
    short: "Regular Fit",
    search: "campus sutra jacket bomber regular",
    images: ["jacket1-1.jpg", "jacket1-2.jpg", "jacket1-3.jpg"],
    stock: true
  },

  {
    id: "jacket-2",
    category: "clothing",
    title: "Nuon Brown Text Design Relaxed-Fit Cotton Jacket",
    price: "₹2,999",
    short: "Relaxed Fit",
    search: "nuon jacket cotton relaxed brown",
    images: ["shirt1-3.jpg", "shirt1-4.jpg", "shirt1-5.jpg"],
    stock: true
  },

  {
    id: "shirt-1",
    category: "clothing",
    title: "ETA Brown Textured Relaxed-Fit Cotton Shirt",
    price: "₹1,799",
    short: "Relaxed Fit",
    search: "eta shirt cotton brown relaxed",
    images: ["shirt1-1.jpg", "shirt1-2.jpg"],
    stock: true
  },

  {
    id: "jacket-4",
    category: "clothing",
    title: "Studiofit Dark Brown Relaxed-Fit Hooded Jacket",
    price: "₹2,199",
    short: "Relaxed Fit",
    search: "studiofit dark brown hooded jacket relaxed",
    images: ["jacket3-1.jpg", "jacket3-2.jpg", "jacket3-3.jpg"],
    stock: true
  },

  /* ======================
     SHOES
  ====================== */

  {
    id: "shoe-1",
    category: "shoes",
    title: "Men’s Brown Suede Sneakers",
    price: "Currently unavailable",
    short: "Premium Leather · Lace-Up",
    search: "mens brown suede sneakers leather lace up",
    images: ["shoe1-1.jpg", "shoe1-2.jpg", "shoe1-3.jpg"],
    stock: false   // OUT OF STOCK
  },

  {
    id: "shoe-2",
    category: "shoes",
    title: "Men’s White Casual Sneakers",
    price: "Currently unavailable",
    short: "Casual Wear · Lightweight",
    search: "mens white casual sneakers",
    images: ["shoe2-1.jpg", "shoe2-2.jpg"],
    stock: false   // OUT OF STOCK
  }
];

/* =====================================================
   HELPER FUNCTIONS (GLOBAL)
===================================================== */

/* Get products by category */
function getProductsByCategory(category) {
  return PRODUCTS.filter(p => p.category === category);
}

/* Get product by ID (Vault, Redirect, etc.) */
function getProductById(id) {
  return PRODUCTS.find(p => p.id === id);
}
