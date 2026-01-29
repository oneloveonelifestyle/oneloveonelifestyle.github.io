const container = document.getElementById("vaultContainer");

let vault = JSON.parse(localStorage.getItem("vault")) || [];

/* EMPTY VAULT */
if (vault.length === 0) {
  container.innerHTML = `<div class="empty-vault">Your vault is empty</div>`;
}

/* RENDER VAULT PRODUCTS */
vault.forEach(id => {
  const product = PRODUCTS.find(p => p.id === id);
  if (!product) return;

  const card = document.createElement("div");
  card.className = "product-card";
  card.dataset.id = product.id;

  card.innerHTML = `
    <div class="slider">
      ${product.images.map(img => `<img src="${img}">`).join("")}
    </div>

    <div class="details">
      <h3>${product.title}</h3>

      <div class="price ${product.stock === false ? 'out-of-stock' : ''}">
        ${product.stock === false ? "Out of Stock" : product.price}
      </div>

      <button class="vault-btn remove">
        ✕ Remove from Vault
      </button>

      <a
        class="order-btn"
        href="https://www.instagram.com/oneloveonelifestyle/"
        target="_blank"
      >
        Buy via Instagram
      </a>
    </div>
  `;

  /* REMOVE FROM VAULT */
  card.querySelector(".vault-btn").addEventListener("click", e => {
    e.stopPropagation();

    vault = vault.filter(v => v !== product.id);
    localStorage.setItem("vault", JSON.stringify(vault));
    card.remove();

    if (vault.length === 0) {
      container.innerHTML = `<div class="empty-vault">Your vault is empty</div>`;
    }
  });

  container.appendChild(card);
});
