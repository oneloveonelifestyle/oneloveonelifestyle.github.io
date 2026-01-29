/* =========================================================
   MASTER PRODUCTS DATABASE
   SINGLE SOURCE OF TRUTH
   ========================================================= */

const PRODUCTS = [

  /* ===================== SHOES ===================== */

  {
    id: "shoe-1",
    category: "shoe",
    title: "Men’s Brown Suede Sneakers",
    price: "₹2,999",
    images: ["shoe1-1.jpg", "shoe1-2.jpg", "shoe1-3.jpg"],
    stock: false,
    shortDesc: "Premium suede sneakers",
    details: "Premium suede sneakers for everyday comfort."
  },

  {
    id: "shoe-2",
    category: "shoe",
    title: "Men’s Black Leather Sneakers",
    price: "₹3,499",
    images: ["shoe2-1.jpg", "shoe2-2.jpg"],
    stock: false,
    shortDesc: "Classic leather sneakers",
    details: "Classic black leather sneakers with premium finish."
  },

  /* ===================== JACKETS ===================== */

  {
    id: "jacket-1",
    category: "clothing",
    title: "Campus Sutra Zip-Front Bomber Jacket",
    price: "₹1,999",
    images: ["jacket1-1.jpg", "jacket1-2.jpg", "jacket1-3.jpg"],
    stock: true,
    shortDesc: "Zip-front bomber jacket",
    details: "Regular-fit bomber jacket with zip-front design."
  },

  {
    id: "jacket-2",
    category: "clothing",
    title: "Nuon Brown Text Design Relaxed-Fit Cotton Jacket",
    price: "₹2,299",
    images: ["jacket2-1.jpg", "jacket2-2.jpg", "jacket2-3.jpg"],
    stock: true,
    shortDesc: "Relaxed-fit cotton jacket",
    details: "Relaxed-fit cotton jacket with textured brown design."
  },

  {
    id: "jacket-3",
    category: "clothing",
    title: "Studiofit Dark Brown Relaxed-Fit Hooded Jacket",
    price: "₹2,199",
    images: ["jacket3-1.jpg", "jacket3-2.jpg", "jacket3-3.jpg"],
    stock: true,
    shortDesc: "Hooded relaxed-fit jacket",
    details: "Hooded jacket with relaxed fit and stretch fabric."
  },

  /* ===================== SHIRTS ===================== */

  {
    id: "shirt-1",
    category: "clothing",
    title: "ETA Brown Textured Relaxed-Fit Cotton Shirt",
    price: "₹1,499",
    images: ["shirt1-1.jpg", "shirt1-2.jpg"],
    stock: true,
    shortDesc: "Textured cotton shirt",
    details: "Comfort-focused cotton shirt with textured finish."
  },

  /* ===================== ACCESSORIES ===================== */

  {
    id: "watch-1",
    category: "accessories",
    title: "Men’s Chronograph Stainless Steel Watch",
    price: "₹3,999",
    images: ["watch1.jpg"],
    stock: true,
    shortDesc: "Stainless steel chronograph",
    details:
      "A bold, precision-engineered timepiece crafted for modern sophistication.\n\n🚚 Free Shipping All Over India"
  }
];

/* =========================================================
   RENDER ENGINE (AUTO)
   ========================================================= */

const container = document.getElementById("productsContainer");

if (!container) {
  console.error("productsContainer not found");
} else {
  const category = container.dataset.category;

  const filtered = PRODUCTS.filter(
    p => p.category === category
  );

  container.innerHTML = filtered
    .map(product => `
      <div class="product-card" onclick="toggleExpand('${product.id}')">

        <div class="slider">
          ${product.images
            .map(img => `<img src="${img}" alt="${product.title}">`)
            .join("")}
        </div>

        <div class="details">
          <h3>${product.title}</h3>

          <p class="short-desc">${product.shortDesc || ""}</p>

          <div class="price">${product.price}</div>

          <div class="full-details" id="details-${product.id}">
            <pre>${product.details || ""}</pre>
          </div>

          ${
            product.stock
              ? `<button class="buy-btn">Buy via Instagram</button>`
              : `<div class="out-stock">Out of Stock</div>`
          }
        </div>
      </div>
    `)
    .join("");
}

/* =========================================================
   EXPAND / COLLAPSE
   ========================================================= */

function toggleExpand(id) {
  const el = document.getElementById(`details-${id}`);
  if (!el) return;
  el.classList.toggle("show");
}
