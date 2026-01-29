const container = document.getElementById("productsContainer");
if (!container) return;

// detect page category
const isClothingPage = location.pathname.includes("clothing");
const isShoesPage = location.pathname.includes("shoes");

const pageCategory = isClothingPage
  ? "clothing"
  : isShoesPage
  ? "shoes"
  : null;

if (!pageCategory) return;

// vault
let vault = JSON.parse(localStorage.getItem("vault")) || [];

// filter products
const pageProducts = PRODUCTS.filter(p => p.category === pageCategory);

// render
pageProducts.forEach(product => {
  const card = document.createElement("div");
  card.className = "product-card";
  card.setAttribute("data-id", product.id);

  // price / stock
  const outOfStock = product.outOfStock === true;

  card.innerHTML = `
    <div class="slider">
      ${product.images
        .map(img => `<img src="${img}" alt="${product.title}">`)
        .join("")}
    </div>

    <div class="product-info">
      <h4>${product.title}</h4>

      ${
        outOfStock
          ? `<div class="price out-of-stock">Currently Out of Stock</div>`
          : `<div class="price">${product.price}</div>`
      }

      <div class="actions">
        ${
          outOfStock
            ? `<a class="order-btn out-of-stock-btn">Out of Stock</a>`
            : `<a class="order-btn" href="#">Order via Instagram</a>`
        }

        <button class="vault-btn">
          ${vault.includes(product.id) ? "✕ Remove from Vault" : "♡ Save to Vault"}
        </button>
      </div>
    </div>
  `;

  // expand card
  card.addEventListener("click", e => {
    if (e.target.closest(".vault-btn") || e.target.closest(".order-btn")) return;

    document
      .querySelectorAll(".product-card.big-product")
      .forEach(c => c.classList.remove("big-product"));

    card.classList.add("big-product");
    card.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  // vault toggle
  const vaultBtn = card.querySelector(".vault-btn");
  vaultBtn.addEventListener("click", e => {
    e.stopPropagation();

    if (vault.includes(product.id)) {
      vault = vault.filter(id => id !== product.id);
      vaultBtn.textContent = "♡ Save to Vault";
    } else {
      vault.push(product.id);
      vaultBtn.textContent = "✕ Remove from Vault";
    }

    localStorage.setItem("vault", JSON.stringify(vault));
  });

  container.appendChild(card);
});
