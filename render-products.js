<script>
const container = document.getElementById("products");
const vaultCount = document.getElementById("vaultCount");

let vault = JSON.parse(localStorage.getItem("vault")) || [];
vaultCount.textContent = vault.length;

/* ===============================
   RENDER PRODUCTS
================================ */
function renderProducts(category) {
  container.innerHTML = "";

  PRODUCTS.filter(p => p.category === category).forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.dataset.id = product.id;

    const isSaved = vault.includes(product.id);

    card.innerHTML = `
      <div class="slider">
        ${product.images.map(img => `<img src="${img}">`).join("")}
      </div>

      <div class="details">
        <h3>${product.title}</h3>

        <!-- PRICE (ONLY ONCE) -->
        <div class="price">
          ${product.price}
        </div>

        <!-- FULL DETAILS (ONLY VISIBLE WHEN BIG) -->
        <div class="full-description">
          ${product.details || ""}
        </div>

        <button class="vault-btn ${isSaved ? "remove" : ""}">
          ${isSaved ? "✕ Remove from Vault" : "♡ Save to Vault"}
        </button>

        <a class="order-btn" href="https://www.instagram.com/oneloveonelifestyle/" target="_blank">
          Buy via Instagram
        </a>
      </div>
    `;

    /* ===============================
       CARD CLICK → EXPAND
    ================================ */
    card.addEventListener("click", e => {
      if (
        e.target.closest(".vault-btn") ||
        e.target.closest(".order-btn")
      ) return;

      document.querySelectorAll(".product-card").forEach(c =>
        c.classList.remove("big-product")
      );

      card.classList.add("big-product");
      container.prepend(card);

      window.scrollTo({ top: 0, behavior: "smooth" });
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
     OPEN FROM VAULT
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
</script>
