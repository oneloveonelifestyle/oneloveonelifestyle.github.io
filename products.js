const PRODUCTS = [
  /* ================= CLOTHING ================= */

  {
    id: "jacket-1",
    category: "clothing",
    title: "Campus Sutra Zip-Front Bomber Jacket",
    price: "₹1,999",
    stock: true,
    search: "campus sutra jacket bomber regular",
    images: ["jacket1-1.jpg", "jacket1-2.jpg", "jacket1-3.jpg"],
    description: `
      <b>Size :</b> S, M, L, XL<br><br>
      <b>Fit:</b> Regular Fit<br>
      <b>Care:</b> Machine Wash
    `
  },

  {
    id: "shirt-1",
    category: "clothing",
    title: "ETA Brown Textured Cotton Shirt",
    price: "₹1,799",
    stock: true,
    search: "eta shirt cotton brown relaxed",
    images: ["shirt1-1.jpg", "shirt1-2.jpg"],
    description: `
      <b>Size :</b> XS, S, M, L<br><br>
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
    search: "mens brown suede sneakers leather",
    images: ["shoe1-1.jpg", "shoe1-2.jpg", "shoe1-3.jpg"],
    description: `
      <b>Size:</b> 6,7,8,9,10<br>
      <b>Material:</b> Leather
    `
  },

  {
    id: "shoe-2",
    category: "shoes",
    title: "Men’s Black Leather Casual Shoes",
    price: "₹3,499",
    stock: true,
    search: "mens black leather casual shoes",
    images: ["shoe2-1.jpg", "shoe2-2.jpg"],
    description: `
      <b>Size:</b> 7,8,9,10<br>
      <b>Material:</b> Leather
    `
  }
];

/* ================= RENDER ENGINE ================= */

function renderProducts(category) {
  const container = document.getElementById("products");
  if (!container) return;

  container.innerHTML = "";

  const vault = JSON.parse(localStorage.getItem("vault")) || [];

  PRODUCTS.filter(p => p.category === category).forEach(p => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.dataset.id = p.id;

    card.innerHTML = `
      <div class="slider">
        ${p.images.map(img => `<img src="${img}">`).join("")}
      </div>

      <div class="details">
        <h2>${p.title}</h2>

        <div class="price ${!p.stock ? "out-of-stock" : ""}">
          ${p.price}
        </div>

        <div class="full-description">
          ${p.description}
        </div>

        <button class="vault-btn">
          ${vault.includes(p.id) ? "✕ Remove from Vault" : "♡ Save to Vault"}
        </button>

        <a class="order-btn ${!p.stock ? "out-of-stock-btn" : ""}">
          ${p.stock ? "Buy via Instagram" : "Out of Stock"}
        </a>
      </div>
    `;

    container.appendChild(card);

    const btn = card.querySelector(".vault-btn");

    btn.addEventListener("click", e => {
      e.stopPropagation();
      let v = JSON.parse(localStorage.getItem("vault")) || [];

      if (v.includes(p.id)) {
        v = v.filter(x => x !== p.id);
        btn.textContent = "♡ Save to Vault";
      } else {
        v.push(p.id);
        btn.textContent = "✕ Remove from Vault";
      }

      localStorage.setItem("vault", JSON.stringify(v));
      document.getElementById("vaultCount").textContent = v.length;
    });

    card.addEventListener("click", e => {
      if (e.target.closest(".vault-btn") || e.target.closest(".order-btn")) return;
      document.querySelectorAll(".product-card").forEach(c => c.classList.remove("big-product"));
      card.classList.add("big-product");
      container.prepend(card);
    });
  });

  document.getElementById("vaultCount").textContent = vault.length;
}
