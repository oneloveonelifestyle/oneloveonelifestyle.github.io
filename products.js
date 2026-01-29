/* products.js */
/* SINGLE SOURCE OF TRUTH – ALL PAGES MUST RENDER ONLY FROM HERE */

const products = [
  /* ================= CLOTHING ================= */
  {
    id: "clothing_001",
    category: "clothing",
    name: "Men’s Black Oversized T-Shirt",
    price: "₹999",
    description: "Premium cotton oversized t-shirt with a relaxed fit. Soft, breathable, and perfect for everyday wear.",
    images: [
      "images/clothing/black-oversized-1.jpg",
      "images/clothing/black-oversized-2.jpg",
      "images/clothing/black-oversized-3.jpg"
    ],
    inStock: true
  },
  {
    id: "clothing_002",
    category: "clothing",
    name: "Men’s White Classic T-Shirt",
    price: "₹799",
    description: "Classic white t-shirt made with high-quality cotton. Durable, minimal, and timeless.",
    images: [
      "images/clothing/white-classic-1.jpg",
      "images/clothing/white-classic-2.jpg"
    ],
    inStock: true
  },
  {
    id: "clothing_003",
    category: "clothing",
    name: "Men’s Black Hoodie",
    price: "₹1,999",
    description: "Heavyweight black hoodie with premium stitching and long-lasting fabric.",
    images: [
      "images/clothing/black-hoodie-1.jpg",
      "images/clothing/black-hoodie-2.jpg"
    ],
    inStock: true
  },

  /* ================= SHOES ================= */
  {
    id: "shoes_001",
    category: "shoes",
    name: "Men’s Black Leather Sneakers",
    price: "₹3,999",
    description: "Premium black leather sneakers crafted for comfort, durability, and everyday luxury.",
    images: [
      "images/shoes/black-leather-1.jpg",
      "images/shoes/black-leather-2.jpg",
      "images/shoes/black-leather-3.jpg"
    ],
    inStock: true
  },
  {
    id: "shoes_002",
    category: "shoes",
    name: "Men’s White Casual Sneakers",
    price: "₹2,999",
    description: "Lightweight white sneakers designed for daily wear with a clean, modern look.",
    images: [
      "images/shoes/white-sneakers-1.jpg",
      "images/shoes/white-sneakers-2.jpg"
    ],
    inStock: true
  },

  /* ================= ACCESSORIES ================= */
  {
    id: "accessories_001",
    category: "accessories",
    name: "Unisex Black Cap",
    price: "₹499",
    description: "Minimal black cap with adjustable strap. Perfect for daily styling.",
    images: [
      "images/accessories/black-cap-1.jpg",
      "images/accessories/black-cap-2.jpg"
    ],
    inStock: true
  }
];

/* ================= VAULT HELPERS ================= */

function getProductById(productId) {
  return products.find(p => p.id === productId);
}
