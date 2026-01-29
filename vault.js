const vaultContainer = document.getElementById("vaultContainer");
let vault = JSON.parse(localStorage.getItem("vault")) || [];

if (vault.length === 0) {
  vaultContainer.innerHTML = `<div class="empty-vault">Your vault is empty</div>`;
}

vault.forEach(id => {
  const product = PRODUCTS.find(p => p.id === id);
  if (!product) return;

  const card = document.createElement("div");
  card.className = "product-card";

  card.innerHTML = `
    <div class="slider">
      ${product.images.map(i => `<img src="${i}">`).join("")}
    </div>

    <div class="details">
      <h3>${product.title}</h3>
      <div class="price">${product.price}</div>

      <button class="vault-btn remove">✕ Remove</button>
      <a class="order-btn" href="https://www.instagram.com/oneloveonelifestyle/" target="_blank">
        Buy via Instagram
      </a>
    </div>
  `;

  card.querySelector(".vault-btn").onclick = () => {
    vault = vault.filter(v => v !== id);
    localStorage.setItem("vault", JSON.stringify(vault));
    location.reload();
  };

  card.onclick = () => {
    localStorage.setItem("openProduct", id);
    location.href = product.category === "shoe" ? "shoes.html" : "clothing.html";
  };

  vaultContainer.appendChild(card);
});
