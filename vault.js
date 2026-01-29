const container = document.getElementById("vaultContainer");

/* ===============================
   LOAD VAULT IDS
================================ */
let vault = JSON.parse(localStorage.getItem("vault")) || [];

/* ===============================
   EMPTY VAULT STATE
================================ */
if (!vault.length) {
  container.innerHTML = `
    <div class="empty-vault">
      Your vault is empty.<br>
      Save products to view them here.
    </div>
  `;
  return;
}

/* ===============================
   RENDER VAULT PRODUCTS
================================ */
vault.forEach(id => {
  const product = PRODUCTS.find(p => p.id === id);

  /* SAFETY CHECK */
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

      <div class="price ${product.outOfStock ? 'out-of-stock' : ''}">
        ${product.outOfStock ? "Currently Out of Stock" : product.price}
      </div>

      <button class="vault-btn remove">✕ Remove from Vault</button>

      ${
        product.outOfStock
          ? `<div class="order-btn out-of-stock-btn">Out of Stock</div>`
          : `<a class="order-btn" href="https://www.instagram.com/oneloveonelifestyle/" target="_blank">
               Buy via Instagram
             </a>`
      }
    </div>
  `;

  /* ===============================
     REMOVE FROM VAULT
  ================================ */
  const removeBtn = card.querySelector(".vault-btn");
  removeBtn.addEventListener("click", e => {
    e.stopPropagation();

    vault = vault.filter(v => v !== product.id);
    localStorage.setItem("vault", JSON.stringify(vault));
    card.remove();

    if (!vault.length) {
      container.innerHTML = `
        <div class="empty-vault">
          Your vault is empty.<br>
          Save products to view them here.
        </div>
      `;
    }
  });

  /* ===============================
     OPEN PRODUCT ON CLICK
  ================================ */
  card.addEventListener("click", e => {
    if (
      e.target.closest(".vault-btn") ||
      e.target.closest(".order-btn")
    ) return;

    localStorage.setItem("openProduct", product.id);

    if (product.category === "shoe") {
      window.location.href = "shoes.html";
    } else {
      window.location.href = "clothing.html";
    }
  });

  container.appendChild(card);
});
