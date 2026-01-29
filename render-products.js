/* ==================================================
   RENDER PRODUCTS – CLOTHING & SHOES
   Depends on products.js (PRODUCTS array)
================================================== */

const container = document.getElementById("products");
const vaultCountEl = document.getElementById("vaultCount");

let vault = JSON.parse(localStorage.getItem("vault")) || [];

/* ================= VAULT COUNT ================= */

if (vaultCountEl) {
  vaultCountEl.textContent = vault.length;
}

/* ================= PAGE CATEGORY ================= */

const PAGE_CATEGORY =
  document.body.dataset.category || null; // "clothing" or "shoes"

/* ================= RENDER ================= */

function renderProducts() {
  if (!container || !PAGE_CATEGORY) return;

  container.innerHTML = "";

  const filtered = PRODUCTS.filter(
    p => p.category === PAGE_CATEGORY
  );

  filtered.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.dataset.id = product.id;
    card.dataset.search = product.search;

    /* ---------- IMAGES ---------- */
    const slider = document.createElement("div");
    slider.className = "slider";
    product.images.forEach(img => {
      const i = document.createElement("img");
      i.src = img;
      slider.appendChild(i);
    });

    /* ---------- DETAILS ---------- */
    const details = document.createElement("div");
    details.className = "details";

    const title = document.createElement("h2");
    title.textContent = product.title;

    /* ---------- PRICE ---------- */
    const price = document.createElement("div");
    price.className = "price";

    let orderBtn;

    if (product.status === "outofstock") {
      price.classList.add("out-of-stock");
      price.textContent = "Currently Out of Stock";

      orderBtn = document.createElement("a");
      orderBtn.className = "order-btn out-of-stock-btn";
      orderBtn.textContent = "Out of Stock";
    } else {
      price.textContent = product.price;

      orderBtn = document.createElement("a");
      orderBtn.className = "order-btn";
      orderBtn.href = "https://www.instagram.com/oneloveonelifestyle/";
      orderBtn.target = "_blank";
      orderBtn.textContent = "Buy via Instagram";
    }

    /* ---------- DESCRIPTION ---------- */
    const fullDesc = document.createElement("div");
    fullDesc.className = "full-description";
    fullDesc.innerHTML = product.description;

    /* ---------- VAULT BUTTON ---------- */
    const vaultBtn = document.createElement("button");
    vaultBtn.className = "vault-btn";

    if (vault.includes(product.id)) {
      vaultBtn.textContent = "✕ Remove from Vault";
      vaultBtn.classList.add("remove");
    } else {
      vaultBtn.textContent = "♡ Save to Vault";
    }

    /* ================= EVENTS ================= */

    /* BIG CARD OPEN */
    card.addEventListener("click", e => {
      if (
        e.target.closest(".vault-btn") ||
        e.target.closest(".order-btn")
      ) return;

      document
        .querySelectorAll(".product-card")
        .forEach(c => c.classList.remove("big-product"));

      card.classList.add("big-product");
      container.prepend(card);

      history.pushState(
        { product: product.id },
        "",
        window.location.pathname
      );
    });

    /* VAULT TOGGLE */
    vaultBtn.addEventListener("click", e => {
      e.stopPropagation();

      if (vault.includes(product.id)) {
        vault = vault.filter(v => v !== product.id);
        vaultBtn.textContent = "♡ Save to Vault";
        vaultBtn.classList.remove("remove");
      } else {
        vault.push(product.id);
        vaultBtn.textContent = "✕ Remove from Vault";
        vaultBtn.classList.add("remove");
      }

      localStorage.setItem("vault", JSON.stringify(vault));
      if (vaultCountEl) vaultCountEl.textContent = vault.length;
    });

    /* ================= BUILD CARD ================= */

    details.appendChild(title);
    details.appendChild(price);
    details.appendChild(fullDesc);
    details.appendChild(vaultBtn);
    details.appendChild(orderBtn);

    card.appendChild(slider);
    card.appendChild(details);
    container.appendChild(card);
  });

  restoreFromVault();
}

/* ================= VAULT → BIG CARD ================= */

function restoreFromVault() {
  const openId = localStorage.getItem("openProduct");
  if (!openId) return;

  const target = document.querySelector(
    `.product-card[data-id="${openId}"]`
  );

  if (target) {
    target.classList.add("big-product");
    container.prepend(target);
  }

  localStorage.removeItem("openProduct");
}

/* ================= BACK BUTTON ================= */

window.addEventListener("popstate", () => {
  document
    .querySelectorAll(".product-card")
    .forEach(c => c.classList.remove("big-product"));
});

/* ================= INIT ================= */

renderProducts();

/* ================= SEARCH ================= */

function searchProducts() {
  const q = document
    .getElementById("searchInput")
    ?.value.toLowerCase();

  document.querySelectorAll(".product-card").forEach(card => {
    const match = card.dataset.search.includes(q);
    card.style.display = match ? "" : "none";
  });
}

/* ================= VAULT OPEN ================= */

function openVault() {
  window.location.href = "vault.html";
}
