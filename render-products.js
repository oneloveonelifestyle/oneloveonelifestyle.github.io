const container = document.getElementById("productsContainer");

if (!container || typeof PRODUCTS === "undefined") {
  console.error("Products container or PRODUCTS not found");
}

container.innerHTML = PRODUCTS
  .filter(p => p.category === "clothing")
  .map(product => `
    <div class="product-card" onclick="toggleExpand('${product.id}')">

      <div class="slider">
        ${product.images.map(img => `
          <img src="${img}" alt="${product.title}">
        `).join("")}
      </div>

      <div class="details">
        <h3>${product.title}</h3>

        <!-- SMALL CARD CAPTION -->
        <p class="short-desc">${product.shortDesc || ""}</p>

        <!-- PRICE (ONLY ONCE) -->
        <div class="price">₹${product.price}</div>

        <!-- EXPANDED DETAILS -->
        <div class="full-details" id="details-${product.id}">
          <pre>${product.details || ""}</pre>
        </div>

        <button class="buy-btn">Buy via Instagram</button>
      </div>
    </div>
  `)
  .join("");

/* EXPAND / COLLAPSE */
function toggleExpand(id) {
  const details = document.getElementById(`details-${id}`);
  if (!details) return;

  details.classList.toggle("show");
}
