/* =========================
   PRODUCTS DATA
========================= */

const PRODUCTS = [

  /* ===== CLOTHING ===== */
  {
    id: "cloth_1",
    category: "clothing",
    title: "Men’s Oversized Black T-Shirt",
    price: 799,
    shortDesc: "Relaxed fit • Premium cotton",
    details: "🚚 Free Shipping All Over India",
    images: ["images/cloth1.jpg"],
    stock: true
  },

  {
    id: "cloth_2",
    category: "clothing",
    title: "Men’s Brown Hoodie",
    price: 1499,
    shortDesc: "Warm • Minimal • Everyday",
    details: "🚚 Free Shipping All Over India",
    images: ["images/cloth2.jpg"],
    stock: true
  },

  /* ===== SHOES ===== */
  {
    id: "shoe_1",
    category: "shoe",
    title: "Men’s Black Leather Sneakers",
    price: 2499,
    shortDesc: "Premium leather • Everyday wear",
    details: "🚚 Free Shipping All Over India",
    images: ["images/shoe1.jpg"],
    stock: true
  },

  {
    id: "shoe_2",
    category: "shoe",
    title: "Men’s Brown Suede Sneakers",
    price: 2699,
    shortDesc: "Soft suede • Urban style",
    details: "🚚 Free Shipping All Over India",
    images: ["images/shoe2.jpg"],
    stock: true
  },

  /* ===== ACCESSORIES ===== */
  {
    id: "acc_1",
    category: "accessories",
    title: "Men’s Chronograph Stainless Steel Watch",
    price: 3999,
    shortDesc: "Bold • Precision engineered",
    details: "🚚 Free Shipping All Over India",
    images: ["images/watch1.jpg"],
    stock: true
  }

];

/* =========================
   RENDER ENGINE
========================= */

document.addEventListener("DOMContentLoaded", () => {

  const container = document.getElementById("productsContainer");
  if (!container) return;

  const pageCategory = container.dataset.category;
  if (!pageCategory) {
    console.error("data-category missing on productsContainer");
    return;
  }

  const filtered = PRODUCTS.filter(
    p => p.category === pageCategory
  );

  container.innerHTML = filtered.map(product => `
    <div class="product-card" onclick="toggleExpand('${product.id}')">

      <div class="slider">
        ${product.images.map(img =>
          `<img src="${img}" alt="${product.title}">`
        ).join("")}
      </div>

      <div class="details">
        <h3>${product.title}</h3>

        <p class="short-desc">${product.shortDesc || ""}</p>

        <div class="price">₹${product.price}</div>

        <div class="full-details" id="details-${product.id}">
          <pre>${product.details || ""}</pre>
        </div>

        ${
          product.stock
            ? `<button class="buy-btn"
                 onclick="event.stopPropagation();
                 window.open(
                 'https://www.instagram.com/oneloveonelifestyle/',
                 '_blank'
               )">Buy via Instagram</button>`
            : `<div class="out-stock">Out of Stock</div>`
        }
      </div>
    </div>
  `).join("");

});

/* =========================
   EXPAND / COLLAPSE
========================= */

function toggleExpand(id) {
  const el = document.getElementById(`details-${id}`);
  if (!el) return;
  el.classList.toggle("show");
}
