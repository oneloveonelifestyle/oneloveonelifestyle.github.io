const vaultContainer = document.getElementById("vaultContainer");

let vault = JSON.parse(localStorage.getItem("vault")) || [];

/* EMPTY VAULT */
if (vault.length === 0) {
  vaultContainer.innerHTML = `
    <div class="empty-vault">
      Your vault is empty.
    </div>
  `;
} else {
  vault.forEach(id => {
    const product = PRODUCTS.find(p => p.id === id);
    if (!product) return;

    const card = document.createElement("div");
    card.className = "product-card";

    card.innerHTML = `
      <div class="slider">
        ${product.images.map(img => `<img src="${img}">`).join("")}
      </div>

      <div class="details">
        <h3>${product.title}</h3>
        <div class="short">${product.short}</div>
        <div class="price ${product.outOfStock ? 'out-of-stock' : ''}">
          ${product.outOfStock ? "Currently Out of Stock" : product.price}
        </div>
      </div>
    `;

    card.addEventListener("click", () => {
      localStorage.setItem("openProduct", product.id);

      if (product.category === "clothing") {
        window.location.href = "clothing.html";
      } else if (product.category === "shoes") {
        window.location.href = "shoes.html";
      }
    });

    vaultContainer.appendChild(card);
  });
}
