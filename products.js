/* =========================================================
   MASTER PRODUCTS DATABASE
   ONLY SOURCE OF TRUTH
   ========================================================= */

const PRODUCTS = [

  /* ===================== SHOES ===================== */

  {
    id: "shoe-1",
    category: "shoe",
    title: "Men’s Brown Suede Sneakers",
    price: "₹2,999",
    images: ["shoe1-1.jpg","shoe1-2.jpg","shoe1-3.jpg"],
    stock: false,
    description: "Premium suede sneakers for everyday comfort."
  },

  {
    id: "shoe-2",
    category: "shoe",
    title: "Men’s Black Leather Sneakers",
    price: "₹3,499",
    images: ["shoe2-1.jpg","shoe2-2.jpg"],
    stock: false,
    description: "Classic black leather sneakers with premium finish."
  },

  /* ===================== CLOTHING ===================== */

  {
    id: "jacket-1",
    category: "clothing",
    title: "Campus Sutra Zip-Front Bomber Jacket",
    price: "₹1,999",
    images: ["jacket1-1.jpg","jacket1-2.jpg","jacket1-3.jpg"],
    stock: true,
    description: "Regular-fit bomber jacket with zip-front design."
  },

  {
    id: "jacket-2",
    category: "clothing",
    title: "Nuon Brown Text Design Relaxed-Fit Cotton Jacket",
    price: "₹2,299",
    images: ["jacket2-1.jpg","jacket2-2.jpg","jacket2-3.jpg"],
    stock: true,
    description: "Relaxed-fit cotton jacket with textured brown design."
  },

  {
    id: "jacket-3",
    category: "clothing",
    title: "Studiofit Dark Brown Relaxed-Fit Hooded Jacket",
    price: "₹2,199",
    images: ["jacket3-1.jpg","jacket3-2.jpg","jacket3-3.jpg"],
    stock: true,
    description: "Hooded jacket with relaxed fit and stretch fabric."
  },

  {
    id: "shirt-1",
    category: "clothing",
    title: "ETA Brown Textured Relaxed-Fit Cotton Shirt",
    price: "₹1,499",
    images: ["shirt1-1.jpg","shirt1-2.jpg"],
    stock: true,
    description: "Comfort-focused cotton shirt with textured finish."
  },

  /* ===================== ACCESSORIES ===================== */

  {
    id: "watch-1",
    category: "accessories",
    title: "Men’s Chronograph Stainless Steel Watch",
    price: "₹3,999",
    images: ["watch1.jpg"],
    stock: true,
    description: "A bold, precision-engineered timepiece crafted for modern sophistication."
  }
];

/* =========================================================
   RENDER ENGINE (AMAZON-STYLE)
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  const container = document.getElementById("productsContainer");
  if (!container) return;

  const category = container.dataset.category;
  if (!category) return;

  const items = PRODUCTS.filter(p => p.category === category);

  container.innerHTML = items.map(product => `
    <div class="product-card">

      <div class="slider">
        ${product.images.map(img => `
          <img src="${img}" alt="${product.title}">
        `).join("")}
      </div>

      <div class="details">
        <h3>${product.title}</h3>

        <div class="price">${product.price}</div>

        <p class="short-desc">${product.description}</p>

        ${
          product.stock
            ? `<a class="buy-btn" href="https://www.instagram.com/oneloveonelifestyle/" target="_blank">
                 Buy via Instagram
               </a>`
            : `<div class="out-stock">Out of Stock</div>`
        }
      </div>

    </div>
  `).join("");

});
