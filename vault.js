const vaultContainer = document.getElementById("vaultContainer");
const emptyVault = document.getElementById("emptyVault");

// read saved IDs
let vault = JSON.parse(localStorage.getItem("vault")) || [];

// empty state
if (vault.length === 0) {
  emptyVault.style.display = "block";
  return;
}

// PRODUCTS must come from products.js
vault.forEach(id => {
  const product = PRODUCTS.find(p => p.id === id);
  if (!product) return;

  const card = document.createElement("div");
  card.className = "product-card"; // IMPORTANT: same class as normal cards
  card.setAttribute("data-id", product.id);

  card.innerHTML = `
    <img src="${product.images[0]}" alt="${product.title}">
    <div class="product-info">
      <h4>${product.title}</h4>
      <div class="price">${product.price}</div>
    </div>
  `;

  card.addEventListener("click", () => {
    // tell next page which product to open
    localStorage.setItem("openProduct", product.id);

    if (product.category === "clothing") {
      window.location.href = "clothing.html";
    } else if (product.category === "shoes") {
      window.location.href = "shoes.html";
    }
  });

  vaultContainer.appendChild(card);
});
