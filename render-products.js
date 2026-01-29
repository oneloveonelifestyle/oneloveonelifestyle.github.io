const container = document.getElementById("products");
const vaultCount = document.getElementById("vaultCount");

let vault = JSON.parse(localStorage.getItem("vault")) || [];
vaultCount.textContent = vault.length;

/* ===============================
   RENDER PRODUCTS BY CATEGORY
================================ */
function renderProducts(category) {
  container.innerHTML = "";

  PRODUCTS.filter(p => p.category === category).forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.dataset.id = product.id;
    card.dataset.search = product.search.toLowerCase();

    const isSaved = vault.includes(product.id);

    card.innerHTML = `
      <div class="slider">
        ${product.images.map(img => `<img src="${img}">`).join("")}
      </div>

      <div class="details">
        <h2>${product.title}</h2>

        <div class="price ${product.stock === false ? 'out-of-stock' : ''}">
          ${product.stock === false ? "Currently Out of Stock" : product.price}
        </div>

        <div class="full-description">
          ${product.description || ""}
        </div>

        <button class="vault-btn ${isSaved ? 'remove' : ''}">
          ${isSaved ? "✕ Remove from Vault" : "♡ Save to Vault"}
        </button>

        ${
          product.stock === false
            ? `<div class="order-btn disabled">Out of Stock</div>`
            : `<a class="order-btn" href="https://www.instagram.com/oneloveonelifestyle/" target="_blank">
                 Buy via Instagram
               </a>`
        }
      </div>
    `;

    /* ===============================
       CARD CLICK → EXPAND / COLLAPSE
    ================================ */
    card.addEventListener("click", e => {
      if (
        e.target.closest(".vault-btn") ||
        e.target.closest(".order-btn")
      ) return;

      const alreadyBig = card.classList.contains("big-product");

      document.querySelectorAll(".product-card").forEach(c =>
        c.classList.remove("big-product")
      );

      if (!alreadyBig) {
        card.classList.add("big-product");
        container.prepend(card);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    });

    /* ===============================
       VAULT BUTTON
    ================================ */
    const vaultBtn = card.querySelector(".vault-btn");
    vaultBtn.addEventListener("click", e => {
      e.stopPropagation();

      if (vault.includes(product.id)) {
        vault = vault.filter(v => v !== product.id);
        vaultBtn.textContent = "♡ Save to Vault";
        vaultBtn.classList.remove("remove");
      } else {
        vault.push(product.id);
        vaultBtn.textContent = "✕ Remove from Vault";
        vaultBtn.classList.add("remove");
      }

      localStorage.setItem("vault", JSON.stringify(vault));
      vaultCount.textContent = vault.length;
    });

    container.appendChild(card);
  });

  /* ===============================
     OPEN PRODUCT FROM VAULT
  ================================ */
  const openProduct = localStorage.getItem("openProduct");
  if (openProduct) {
    const target = document.querySelector(`[data-id="${openProduct}"]`);
    if (target) {
      target.classList.add("big-product");
      container.prepend(target);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    localStorage.removeItem("openProduct");
  }
}
