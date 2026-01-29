<script>
function renderProducts(category) {
  const container = document.getElementById("products");
  const vaultCount = document.getElementById("vaultCount");
  const searchInput = document.getElementById("searchInput");

  if (!container || typeof PRODUCTS === "undefined") return;

  let vault = JSON.parse(localStorage.getItem("vault")) || [];
  vaultCount.textContent = vault.length;
  container.innerHTML = "";

  const filtered = PRODUCTS.filter(p => p.category === category);

  filtered.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.dataset.id = product.id;
    card.dataset.search = product.search || "";

    const imagesHTML = product.images.map(i => `<img src="${i}">`).join("");
    const isOut = product.outOfStock === true;

    card.innerHTML = `
      <div class="slider">${imagesHTML}</div>
      <div class="details">
        <h2>${product.title}</h2>

        ${
          isOut
            ? `<div class="price out-of-stock">Currently Out of Stock</div>`
            : `<div class="price">${product.price}</div>
               <div class="short">${product.short || ""}</div>`
        }

        <div class="full-description">${product.description || ""}</div>

        <button class="vault-btn">
          ${vault.includes(product.id)
            ? "✕ Remove from Vault"
            : "♡ Save to Vault"}
        </button>

        ${
          isOut
            ? `<a class="order-btn out-of-stock-btn">Out of Stock</a>`
            : `<a class="order-btn"
                 href="https://www.instagram.com/oneloveonelifestyle/"
                 target="_blank">Buy via Instagram</a>`
        }
      </div>
    `;

    /* CARD TAP */
    card.addEventListener("click", e => {
      if (e.target.closest(".vault-btn") || e.target.closest(".order-btn")) return;

      document.querySelectorAll(".product-card")
        .forEach(c => c.classList.remove("big-product"));

      card.classList.add("big-product");
      container.prepend(card);
      history.pushState({ big: true }, "");
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    /* VAULT */
    const btn = card.querySelector(".vault-btn");
    if (vault.includes(product.id)) btn.classList.add("remove");

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

  /* 🔥 FIXED VAULT → BIG PRODUCT OPEN */
  const openProduct = localStorage.getItem("openProduct");
  if (openProduct) {
    document.querySelectorAll(".product-card")
      .forEach(c => c.classList.remove("big-product"));

    const target = document.querySelector(
      `.product-card[data-id="${openProduct}"]`
    );

    if (target) {
      target.classList.add("big-product");
      container.prepend(target);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    localStorage.removeItem("openProduct");
  }

  /* BACK BUTTON */
  window.onpopstate = function () {
    document.querySelectorAll(".product-card")
      .forEach(c => c.classList.remove("big-product"));
  };
}

function openVault() {
  window.location.href = "vault.html";
}
</script>
