/* ===============================
   MASTER PRODUCT DATABASE
   =============================== */

const PRODUCTS = [

  /* ===============================
     CLOTHING PRODUCTS
     =============================== */

  {
    id: "jacket-1",
    category: "clothing",
    title: "Campus Sutra Zip-Front Bomber Jacket",
    price: "₹1,999",
    short: "Regular Fit",
    search: "campus sutra jacket bomber regular",
    images: ["jacket1-1.jpg", "jacket1-2.jpg", "jacket1-3.jpg"],
    outOfStock: false,
    description: `
      <b>Size :</b> S, M, L, XL<br><br>
      <b>Fit:</b> Regular Fit<br>
      <b>Care Instruction:</b> Machine Wash
    `
  },

  {
    id: "jacket-2",
    category: "clothing",
    title: "Nuon Brown Text Design Relaxed-Fit Cotton Jacket",
    price: "₹2,999",
    short: "Relaxed Fit",
    search: "nuon jacket cotton relaxed brown",
    images: ["shirt1-3.jpg", "shirt1-4.jpg", "shirt1-5.jpg"],
    outOfStock: false,
    description: `
      <b>Size :</b> XS, S, M, L, XL<br><br>
      <b>Fit:</b> Relaxed Fit<br>
      <b>Care Instruction:</b> Machine Wash<br>
      <b>Fabric Composition:</b> 100% Cotton<br>
      <b>Country Of Origin:</b> India
    `
  },

  {
    id: "shirt-1",
    category: "clothing",
    title: "ETA Brown Textured Relaxed-Fit Cotton Shirt",
    price: "₹1,799",
    short: "Relaxed Fit",
    search: "eta shirt cotton brown relaxed",
    images: ["shirt1-1.jpg", "shirt1-2.jpg"],
    outOfStock: false,
    description: `
      <b>Size :</b> XS, S, M, L<br><br>
      <b>Fit:</b> Relaxed Fit<br>
      <b>Care Instruction:</b> Machine Wash<br>
      <b>Fabric Composition:</b> 100% Cotton
    `
  },

  {
    id: "jacket-4",
    category: "clothing",
    title: "Studiofit Dark Brown Relaxed-Fit Hooded Jacket",
    price: "₹2,199",
    short: "Relaxed Fit",
    search: "studiofit dark brown hooded jacket relaxed",
    images: ["jacket3-1.jpg", "jacket3-2.jpg", "jacket3-3.jpg"],
    outOfStock: false,
    description: `
      <b>Size :</b> XS, S, M, L<br><br>
      <b>Fit:</b> Relaxed Fit<br>
      <b>Care Instruction:</b> Machine Wash
    `
  },

  /* ===============================
     SHOE PRODUCTS
     =============================== */

  {
    id: "shoe-1",
    category: "shoes",
    title: "Men’s Brown Suede Sneakers",
    price: "Currently Out of Stock",
    short: "Leather Upper",
    search: "mens brown suede sneakers leather",
    images: ["shoe1-1.jpg", "shoe1-2.jpg", "shoe1-3.jpg"],
    outOfStock: true,
    description: `
      <b>Size:</b> 6, 7, 8, 9, 10<br>
      <b>Material:</b> Leather
    `
  },

  {
    id: "shoe-2",
    category: "shoes",
    title: "Olive Suede Rowan Leather",
    price: "₹3,599",
    short: "Premium Suede Leather",
    search: "olive suede rowan leather shoes",
    images: ["shoe2-1.jpg", "shoe2-2.jpg"],
    outOfStock: false,
    description: `
      <b>Size:</b> 6, 7, 8, 9, 10<br>
      <b>Material:</b> Suede Leather
    `
  }

];

/* ===============================
   RENDER ENGINE (DO NOT EDIT)
   =============================== */

function renderProducts(category) {
  const container = document.getElementById("products");
  if (!container) return;

  container.innerHTML = "";

  const vault = JSON.parse(localStorage.getItem("vault")) || [];

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
          product.outOfStock
            ? `<div class="price out-of-stock">Currently Out of Stock</div>`
            : `<div class="price">${product.price}</div>`
        }

        <div class="short">${product.short}</div>

        <div class="full-description">
          ${product.description}
        </div>

        <button class="vault-btn">
          ${vault.includes(product.id) ? "✕ Remove from Vault" : "♡ Save to Vault"}
        </button>

        ${
          product.outOfStock
            ? `<a class="order-btn out-of-stock-btn">Out of Stock</a>`
            : `<a class="order-btn" href="https://www.instagram.com/oneloveonelifestyle/" target="_blank">
                 Buy via Instagram
               </a>`
        }
      </div>
    `;

    container.appendChild(card);
  });
}
