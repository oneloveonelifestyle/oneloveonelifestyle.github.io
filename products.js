const PRODUCTS = [
  /* ================= CLOTHING ================= */

  {
    id: "jacket-1",
    category: "clothing",
    title: "Campus Sutra Zip-Front Bomber Jacket",
    price: "₹1,999",
    stock: true,
    search: "campus sutra bomber jacket",
    images: ["jacket1-1.jpg", "jacket1-2.jpg", "jacket1-3.jpg"],
    description: `
      <b>Size:</b> S, M, L, XL<br>
      <b>Fit:</b> Regular Fit<br>
      <b>Care:</b> Machine Wash
    `
  },

  {
    id: "jacket-2",
    category: "clothing",
    title: "Nuon Brown Relaxed-Fit Cotton Jacket",
    price: "₹2,199",
    stock: true,
    search: "nuon brown cotton jacket",
    images: ["shirt1-3.jpg", "shirt1-4.jpg", "shirt1-5.jpg"],
    description: `
      <b>Size:</b> XS, S, M, L, XL<br>
      <b>Fit:</b> Relaxed Fit<br>
      <b>Fabric:</b> 100% Cotton
    `
  },

  /* ================= SHOES ================= */

  {
    id: "shoe-1",
    category: "shoes",
    title: "Men’s Brown Suede Sneakers",
    price: "Currently Out of Stock",
    stock: false,
    search: "brown suede sneakers men",
    images: ["shoe1-1.jpg", "shoe1-2.jpg", "shoe1-3.jpg"],
    description: `
      <b>Size:</b> 6, 7, 8, 9, 10<br>
      <b>Material:</b> Suede Leather
    `
  },

  {
    id: "shoe-2",
    category: "shoes",
    title: "Olive Suede Rowan Leather",
    price: "₹3,599",
    stock: true,
    search: "olive suede rowan leather shoes",
    images: ["shoe2-1.jpg", "shoe2-2.jpg"],
    description: `
      <b>Size:</b> 7, 8, 9, 10<br>
      <b>Material:</b> Leather
    `
  }
];

/* ================= RENDER FUNCTION ================= */

function renderProducts(category) {
  const container = document.getElementById("products");
  if (!container) return;

  container.innerHTML = "";

  PRODUCTS.filter(p => p.category === category).forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.dataset.id = product.id;
    card.dataset.search = product.search;

    card.innerHTML = `
      <div class="slider">
        ${product.images.map(img => `<img src="${img}">`).join("")}
      </div>

      <div class="details">
        <h2>${product.title}</h2>

        ${
          product.stock
            ? `<div class="price">${product.price}</div>`
            : `<div class="price out-of-stock">Currently Out of Stock</div>`
        }

        <div class="full-description">
          ${product.description}
        </div>

        <button class="vault-btn">♡ Save to Vault</button>

        ${
          product.stock
            ? `<a class="order-btn" href="https://www.instagram.com/oneloveonelifestyle/" target="_blank">Buy via Instagram</a>`
            : `<a class="order-btn out-of-stock-btn">Out of Stock</a>`
        }
      </div>
    `;

    container.appendChild(card);
  });
}
