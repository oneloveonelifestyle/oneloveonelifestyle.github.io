<script>
/* ================================
   GLOBAL RENDER ENGINE
   ================================ */

function renderProducts(category) {
  const container = document.getElementById("products");
  const vaultCount = document.getElementById("vaultCount");
  const searchInput = document.getElementById("searchInput");

  if (!container || typeof PRODUCTS === "undefined") return;

  let vault = JSON.parse(localStorage.getItem("vault")) || [];
  vaultCount.textContent = vault.length;

  container.innerHTML = "";

  const filteredProducts = PRODUCTS.filter(p => p.category === category);

  filteredProducts.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.dataset.id = product.id;
    card.dataset.search = product.search || "";

    const imagesHTML = product.images
      .map(img => `<img src="${img}">`)
      .join("");

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

        <div class="full-description">
          ${product.description || ""}
        </div>

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

    /* ---------- CARD TAP → BIG ---------- */
    card.addEventListener("click", e => {
      if (
        e.target.closest(".vault-btn") ||
        e.target.closest(".order-btn")
      ) return;

      document
        .querySelectorAll(".product-card")
        .forEach(c => c.classList.remove("big-product"));

      card.classList.add("big-product");
      container.prepend(card);

      history.pushState({ big: true }, "");
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    /* ---------- VAULT BUTTON ---------- */
    const vaultBtn = card.querySelector(".vault-btn");

    if (vault.includes(product.id)) {
      vaultBtn.classList.add("remove");
    }

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

  /* ---------- SEARCH ---------- */
  if (searchInput) {
    window.searchProducts = function () {
      const q = searchInput.value.toLowerCase().trim();
      let found = 0;

      document.querySelectorAll(".product-card").forEach(card => {
        card.classList.remove("big-product");
        if (!q || card.dataset.search.includes(q)) {
          card.style.display = "block";
          found++;
        } else {
          card.style.display = "none";
        }
      });

      const existing = document.querySelector(".no-results");
      if (existing) existing.remove();

      if (found === 0) {
        const msg = document.createElement("div");
        msg.className = "no-results";
        msg.innerHTML = `
          <h3>No results found</h3>
          <p>Try different keywords</p>
        `;
        container.appendChild(msg);
      }
    };
  }

  /* ---------- OPEN FROM VAULT ---------- */
  const openProduct = localStorage.getItem("openProduct");
  if (openProduct) {
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

  /* ---------- BACK BUTTON (BIG → NORMAL) ---------- */
  window.onpopstate = function () {
    document
      .querySelectorAll(".product-card")
      .forEach(c => c.classList.remove("big-product"));
  };
}

/* ---------- VAULT ICON ---------- */
function openVault() {
  window.location.href = "vault.html";
}
</script>
