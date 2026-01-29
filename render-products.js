function renderProducts(category) {
  const container = document.getElementById("products");
  if (!container) return;

  let vault = JSON.parse(localStorage.getItem("vault")) || [];
  container.innerHTML = "";

  PRODUCTS.filter(p => p.category === category).forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.dataset.id = product.id;

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

        <div class="full-description">${product.description}</div>

        <button class="vault-btn">
          ${vault.includes(product.id) ? "✕ Remove from Vault" : "♡ Save to Vault"}
        </button>

        ${
          product.stock
            ? `<a class="order-btn" href="https://www.instagram.com/oneloveonelifestyle/" target="_blank">Buy via Instagram</a>`
            : `<a class="order-btn out-of-stock-btn">Out of Stock</a>`
        }
      </div>
    `;

    const vaultBtn = card.querySelector(".vault-btn");

    vaultBtn.addEventListener("click", e => {
      e.stopPropagation();

      if (vault.includes(product.id)) {
        vault = vault.filter(v => v !== product.id);
        vaultBtn.textContent = "♡ Save to Vault";
      } else {
        vault.push(product.id);
        vaultBtn.textContent = "✕ Remove from Vault";
      }

      localStorage.setItem("vault", JSON.stringify(vault));
    });

    container.appendChild(card);
  });
}
