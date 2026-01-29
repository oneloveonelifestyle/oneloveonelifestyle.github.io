/* =====================================
   PRODUCT RENDER ENGINE
   Do NOT change layout / styles
===================================== */

const container = document.getElementById("products");
if (!container || typeof PRODUCTS === "undefined") return;

const pageCategory =
  document.title.toLowerCase().includes("shoe") ? "shoes" : "clothing";

const vaultCount = document.getElementById("vaultCount");
let vault = JSON.parse(localStorage.getItem("vault")) || [];
if (vaultCount) vaultCount.textContent = vault.length;

/* RENDER */
PRODUCTS.filter(p => p.category === pageCategory).forEach(product => {
  const card = document.createElement("div");
  card.className = "product-card";
  card.dataset.id = product.id;
  card.dataset.search = product.search;

  card.innerHTML = `
    <div class="slider">
      ${product.images.map(i => `<img src="${i}">`).join("")}
    </div>

    <div class="details">
      <h2>${product.title}</h2>
      <div class="price">${product.price}</div>
      <div class="short">${product.short}</div>

      <div class="full-description">
        ${product.description}
      </div>

      <button class="vault-btn">♡ Save to Vault</button>
      <a class="order-btn"
         href="https://www.instagram.com/oneloveonelifestyle/"
         target="_blank">
        Buy via Instagram
      </a>
    </div>
  `;

  const btn = card.querySelector(".vault-btn");

  if (vault.includes(product.id)) {
    btn.classList.add("remove");
    btn.textContent = "✕ Remove from Vault";
  }

  card.addEventListener("click", e => {
    if (e.target.closest(".vault-btn") || e.target.closest(".order-btn")) return;
    document.querySelectorAll(".product-card").forEach(c => c.classList.remove("big-product"));
    card.classList.add("big-product");
    container.prepend(card);
    window.scrollTo({ top: 0, behavior: "smooth" });
    history.pushState({ open: true }, "");
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
    if (vaultCount) vaultCount.textContent = vault.length;
  });

  container.appendChild(card);
});

/* BACK BUTTON — collapse big card, stay on page */
window.addEventListener("popstate", () => {
  document.querySelectorAll(".product-card")
    .forEach(c => c.classList.remove("big-product"));
});
