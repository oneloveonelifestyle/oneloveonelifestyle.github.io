const container = document.getElementById("products");
const vaultCount = document.getElementById("vaultCount");

let vault = JSON.parse(localStorage.getItem("vault")) || [];
vaultCount.textContent = vault.length;

function renderProducts(category) {
  container.innerHTML = "";

  PRODUCTS.filter(p => p.category === category).forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.dataset.id = product.id;

    const saved = vault.includes(product.id);

    card.innerHTML = `
      <div class="slider">
        ${product.images.map(i => `<img src="${i}">`).join("")}
      </div>

      <div class="details">
        <h3>${product.title}</h3>
        <div class="short">${product.short}</div>

        <div class="price ${!product.stock ? "out-of-stock" : ""}">
          ${product.stock ? product.price : "Currently Unavailable"}
        </div>

        <div class="full-description">
          ${product.description}
        </div>

        <button class="vault-btn ${saved ? "remove" : ""}">
          ${saved ? "✕ Remove from Vault" : "♡ Save to Vault"}
        </button>

        ${
          product.stock
            ? `<a class="order-btn" href="https://www.instagram.com/oneloveonelifestyle/" target="_blank">Buy via Instagram</a>`
            : `<div class="order-btn disabled">Out of Stock</div>`
        }
      </div>
    `;

    card.addEventListener("click", e => {
      if (e.target.closest(".vault-btn") || e.target.closest(".order-btn")) return;
      document.querySelectorAll(".product-card").forEach(c => c.classList.remove("big-product"));
      card.classList.add("big-product");
      container.prepend(card);
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    const btn = card.querySelector(".vault-btn");
    btn.addEventListener("click", e => {
      e.stopPropagation();
      if (vault.includes(product.id)) {
        vault = vault.filter(v => v !== product.id);
      } else {
        vault.push(product.id);
      }
      localStorage.setItem("vault", JSON.stringify(vault));
      vaultCount.textContent = vault.length;
      renderProducts(category);
    });

    container.appendChild(card);
  });
}
