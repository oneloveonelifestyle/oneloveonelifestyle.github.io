<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Accessories | One Love One Lifestyle</title>
<meta name="viewport" content="width=device-width, initial-scale=1">

<style>
body {
  margin: 0;
  font-family: Arial, sans-serif;
  background: #f4f4f4;
}

/* HEADER */
header {
  background: #000;
  color: #fff;
  padding: 15px;
  text-align: center;
  position: relative;
}

.home-btn {
  position: absolute;
  left: 15px;
  top: 15px;
  color: #fff;
  text-decoration: none;
  font-weight: bold;
}

.vault-icon {
  position: absolute;
  right: 15px;
  top: 15px;
  cursor: pointer;
}

.vault-count {
  background: red;
  color: #fff;
  font-size: 12px;
  border-radius: 50%;
  padding: 2px 6px;
  position: absolute;
  top: -8px;
  right: -10px;
}

/* SEARCH */
.search-bar {
  background: #fff;
  padding: 12px;
  display: flex;
  gap: 10px;
}

.search-input {
  flex: 1;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #ccc;
}

.search-btn {
  background: #000;
  color: #fff;
  border: none;
  padding: 12px 14px;
  border-radius: 8px;
}

/* GRID */
.products-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
  padding: 15px;
}

.product-card {
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  cursor: pointer;
}

/* SLIDER */
.slider {
  display: flex;
  overflow-x: auto;
}

.slider img {
  width: 100%;
}

/* DETAILS */
.details {
  padding: 12px;
}

.details h2 {
  font-size: 16px;
  margin: 0 0 6px;
}

.price {
  font-weight: bold;
}

.short {
  font-size: 13px;
  color: #555;
}

.big-product {
  grid-column: 1 / -1;
}

.full-description {
  display: none;
  margin-top: 12px;
  font-size: 14px;
}

.big-product .full-description {
  display: block;
}

/* BUTTONS */
.vault-btn {
  display: none;
  margin-top: 10px;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #ddd;
  background: #fff;
}

.big-product .vault-btn {
  display: block;
}

.vault-btn.remove {
  background: #f5f5f5;
}

.order-btn {
  display: block;
  margin-top: 10px;
  background: #000;
  color: #fff;
  padding: 12px;
  text-align: center;
  border-radius: 8px;
  text-decoration: none;
}
</style>
</head>

<body>

<header>
  <a href="index.html" class="home-btn">← Home</a>
  <h2>Accessories</h2>
  <div class="vault-icon" onclick="openVault()">
    ♡ <span class="vault-count" id="vaultCount">0</span>
  </div>
</header>

<div class="search-bar">
  <input id="searchInput" class="search-input" placeholder="Search accessories...">
  <button class="search-btn" onclick="searchProducts()">🔍</button>
</div>

<div class="products-grid" id="products"></div>

<!-- PRODUCTS SOURCE -->
<script src="products.js"></script>

<script>
const container = document.getElementById("products");
const vaultCount = document.getElementById("vaultCount");
const searchInput = document.getElementById("searchInput");

let vault = JSON.parse(localStorage.getItem("vault")) || [];
vaultCount.textContent = vault.length;

/* ===============================
   LOAD ACCESSORIES
================================ */
PRODUCTS.forEach(product => {
  if (product.category !== "accessories") return;

  const card = document.createElement("div");
  card.className = "product-card";
  card.dataset.id = product.id;
  card.dataset.search = product.search.toLowerCase();

  card.innerHTML = `
    <div class="slider">
      ${product.images.map(img => `<img src="${img}">`).join("")}
    </div>

    <div class="details">
      <h2>${product.title}</h2>
      <div class="price">${product.price}</div>

      <div class="full-description">${product.description}</div>

      <button class="vault-btn">
        ${vault.includes(product.id) ? "✕ Remove from Vault" : "♡ Save to Vault"}
      </button>

      <a class="order-btn" href="https://www.instagram.com/oneloveonelifestyle/" target="_blank">
        Buy via Instagram
      </a>
    </div>
  `;

  const btn = card.querySelector(".vault-btn");

  if (vault.includes(product.id)) {
    btn.classList.add("remove");
  }

  card.addEventListener("click", e => {
    if (e.target.closest(".vault-btn") || e.target.closest(".order-btn")) return;
    document.querySelectorAll(".product-card").forEach(c => c.classList.remove("big-product"));
    card.classList.add("big-product");
    container.prepend(card);
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  btn.addEventListener("click", e => {
    e.stopPropagation();
    if (vault.includes(product.id)) {
      vault = vault.filter(v => v !== product.id);
      btn.textContent = "♡ Save to Vault";
      btn.classList.remove("remove");
    } else {
      vault.push(product.id);
      btn.textContent = "✕ Remove from Vault";
      btn.classList.add("remove");
    }
    localStorage.setItem("vault", JSON.stringify(vault));
    vaultCount.textContent = vault.length;
  });

  container.appendChild(card);
});

/* ===============================
   SEARCH
================================ */
function searchProducts() {
  const q = searchInput.value.toLowerCase().trim();
  document.querySelectorAll(".product-card").forEach(card => {
    card.style.display = !q || card.dataset.search.includes(q) ? "block" : "none";
    card.classList.remove("big-product");
  });
}

function openVault() {
  window.location.href = "vault.html";
}
</script>

</body>
</html>
