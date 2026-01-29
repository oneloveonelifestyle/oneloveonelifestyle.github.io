/* =========================================================
   PRODUCT RENDER ENGINE
   READS FROM PRODUCTS.JS ONLY
   ========================================================= */

(function () {

  const container = document.getElementById("productsContainer");

  if (!container) {
    console.error("productsContainer not found in HTML");
    return;
  }

  if (typeof PRODUCTS === "undefined") {
    console.error("PRODUCTS not loaded. Check script order");
    return;
  }

  const category = container.getAttribute("data-category");

  if (!category) {
    console.error("data-category attribute missing on productsContainer");
    return;
  }

  const filteredProducts = PRODUCTS.filter(
    product => product.category === category
  );

  if (filteredProducts.length === 0) {
    container.innerHTML = "<p>No products found</p>";
    return;
  }

  container.innerHTML = filteredProducts.map(product => `
    <div class="product-card" data-id="${product.id}">

      <div class="slider">
        ${product.images.map(img =>
          `<img src="${img}" alt="${product.title}">`
        ).join("")}
      </div>

      <div class="details">
        <h3>${product.title}</h3>

        <div class="price">${product.price}</div>

        ${product.stock === false
          ? `<div class="unavailable">Out of Stock</div>`
          : ``}

        <div class="full-description">
          ${product.description}
        </div>
      </div>

    </div>
  `).join("");

})();
