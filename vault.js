// vault.js — FINAL

const vaultContainer = document.getElementById("vaultProducts");
let vault = JSON.parse(localStorage.getItem("vault")) || [];

/**
 * Find product by ID from PRODUCTS (products.js)
 */
function getProductById(id) {
  return PRODUCTS.find(p => p.id === id);
}

/**
 * Render vault products
 */
function renderVault() {
  vaultContainer.innerHTML = "";
  let rendered = 0;

  vault.forEach(id => {
    const product = getProductById(id);
    if (!product) return;

    rendered++;

    const card = document.createElement("div");
    card.className = "product-card";

    // When clicking the card → go to page AND open as BIG card
    card.addEventListener("click", () => {
      localStorage.setItem("openProduct", product.id);
      window.location.href =
        product.category === "clothing"
          ? "clothing.html"
          : "shoes.html";
    });

    card.innerHTML = `
      <div class="slider">
        ${product.images.map(img => `<img src="${img}">`).join("")}
      </div>

      <div class="details">
        <h3>${product.title}</h3>

        <div class="actions">
          <button class="remove-btn">Remove</button>
          <a class="order-btn"
             href="https://www.instagram.com/oneloveonelifestyle/"
             target="_blank">Buy via Instagram</a>
        </div>
      </div>
    `;

    // Remove from vault
    card.querySelector(".remove-btn").addEventListener("click", e => {
      e.stopPropagation();
      vault = vault.filter(v => v !== product.id);
      localStorage.setItem("vault", JSON.stringify(vault));
      renderVault();
    });

    // Prevent card click when clicking order
    card.querySelector(".order-btn").addEventListener("click", e => {
      e.stopPropagation();
    });

    vaultContainer.appendChild(card);
  });

  // Empty vault state
  if (rendered === 0) {
    vaultContainer.innerHTML = `
      <div class="empty-vault">
        <h3>Your vault is empty</h3>
        <p>Save products you love and find them here anytime.</p>
      </div>
    `;
  }
}

// Initial render
renderVault();
