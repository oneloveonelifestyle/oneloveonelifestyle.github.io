/* ==================================
   MASTER PRODUCT DATABASE
   SINGLE SOURCE OF TRUTH
================================== */

const PRODUCTS = [
  {
    id: "jacket-1",
    title: "Campus Sutra Zip-Front Bomber Jacket",
    category: "clothing",
    images: ["jacket1-1.jpg","jacket1-2.jpg","jacket1-3.jpg"],
    inStock: true
  },
  {
    id: "jacket-2",
    title: "Nuon Brown Text Design Relaxed-Fit Jacket",
    category: "clothing",
    images: ["shirt1-3.jpg","shirt1-4.jpg","shirt1-5.jpg"],
    inStock: true
  },
  {
    id: "jacket-3",
    title: "Studiofit Dark Brown Hooded Jacket",
    category: "clothing",
    images: ["shirt1-1.jpg","shirt1-2.jpg"],
    inStock: true
  },
  {
    id: "shirt-1",
    title: "ETA Brown Textured Cotton Shirt",
    category: "clothing",
    images: ["shirt1-1.jpg","shirt1-2.jpg"],
    inStock: true
  },
  {
    id: "shoe-1",
    title: "Men’s Brown Suede Sneakers",
    category: "shoes",
    images: ["shoe1-1.jpg","shoe1-2.jpg","shoe1-3.jpg"],
    inStock: false
  },
  {
    id: "shoe-2",
    title: "Men’s Classic Black Sneakers",
    category: "shoes",
    images: ["shoe2-1.jpg","shoe2-2.jpg"],
    inStock: false
  }
];

/* quick lookup by ID (used by vault) */
const PRODUCT_MAP = {};
PRODUCTS.forEach(p => PRODUCT_MAP[p.id] = p);
