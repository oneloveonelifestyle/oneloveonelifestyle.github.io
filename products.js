/* =========================================================
   MASTER PRODUCTS DATABASE
   SINGLE SOURCE OF TRUTH
   ========================================================= */

const PRODUCTS = [

  /* SHOES */
  {
    id: "shoe-1",
    category: "shoe",
    title: "Men’s Brown Suede Sneakers",
    price: "₹2,999",
    images: ["shoe1-1.jpg","shoe1-2.jpg","shoe1-3.jpg"],
    stock: false
  },
  {
    id: "shoe-2",
    category: "shoe",
    title: "Men’s Black Leather Sneakers",
    price: "₹3,499",
    images: ["shoe2-1.jpg","shoe2-2.jpg"],
    stock: false
  },

  /* CLOTHING */
  {
    id: "jacket-1",
    category: "clothing",
    title: "Campus Sutra Zip-Front Bomber Jacket",
    price: "₹1,999",
    images: ["jacket1-1.jpg","jacket1-2.jpg","jacket1-3.jpg"],
    stock: true
  },
  {
    id: "shirt-1",
    category: "clothing",
    title: "ETA Brown Textured Relaxed-Fit Cotton Shirt",
    price: "₹1,499",
    images: ["shirt1-1.jpg","shirt1-2.jpg"],
    stock: true
  },

  /* ACCESSORIES */
  {
    id: "watch-1",
    category: "accessories",
    title: "Men’s Chronograph Stainless Steel Watch",
    price: "₹3,999",
    images: ["watch1.jpg"],
    stock: true
  }
];

/* =========================================================
   RENDER ENGINE (AUTO-DETECT CATEGORY)
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  const container = document.getElementById("productsContainer");
  if (!container) return;

  const category = container.getAttribute("data-category");
  if (!category) return;

  const filtered = PRODUCTS.filter(p => p.category === category);

  container.innerHTML = filtered.map(p => `
    <div class="product-card">
      <div class="slider">
        ${p.images.map(img => `<img src="${img}" alt="${p.title}">`).join("")}
      </div>

      <div class="details">
        <h3>${p.title}</h3>
        <div class="price">${p.price}</div>

        ${
          p.stock
            ? `<a class="buy-btn" href="https://www.instagram.com/oneloveonelifestyle/" target="_blank">
                 Buy via Instagram
               </a>`
            : `<div class="out-stock">Out of Stock</div>`
        }
      </div>
    </div>
  `).join("");

});
