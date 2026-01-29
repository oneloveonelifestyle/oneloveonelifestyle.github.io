/* ===================== BASIC SAFETY ===================== */
if (typeof PRODUCTS === "undefined") {
  console.error("PRODUCTS not found");
}

/* ===================== CONTAINER ===================== */
const container = document.getElementById("productsContainer");
if (!container) {
  console.warn("productsContainer not found on this page");
}

/* ===================== VAULT ===================== */
let vault = JSON.parse(localStorage.getItem("vault")) || [];

/* ===================== HELPERS ===================== */
function isInVault(id) {
  return vault.includes(id);
}

function saveVault() {
  localStorage.setItem("vault", JSON.stringify(vault));
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

/* ===================== RENDER ===================== */
function renderProducts(category) {
  if (!container) return;

  container.innerHTML = "";

  PRODUCTS
    .filter(p => p.category === category)
    .forEach(product => {

      const card = document.createElement("div");
      card.className = "product-card";
      card.dataset.id = product.id;

      /* ---------- IMAGE SLIDER ---------- */
      const slider = document.createElement("div");
      slider.className = "slider";

      product.images.forEach(src => {
        const img = document.createElement("img");
        img.src = src;
        slider.appendChild(img);
      });

      /* ---------- DETAILS ---------- */
      const details = document.createElement("div");
      details.className = "details";

      const title = document.createElement("h3");
      title.textContent = product.title;

      const short = document.createElement("div");
      short.className = "short";
      short.textContent = product.short;

      const price = document.createElement("div");
      price.className = "price";
      price.textContent = product.price;

      if (product.outOfStock) {
        price.classList.add("out-of-stock");
      }

      const full = document.createElement("div");
      full.className = "full-description";
      full.innerHTML = product.description || "";

      /* ---------- VAULT BUTTON ---------- */
      const vaultBtn = document.createElement("button");
      vaultBtn.className = "vault-btn";

      if (isInVault(product.id)) {
        vaultBtn.textContent = "✕ Remove from Vault";
        vaultBtn.classList.add("remove");
      } else {
        vaultBtn.textContent = "♡ Save to Vault";
      }

      vaultBtn.addEventListener("click", e => {
        e.stopPropagation();

        if (isInVault(product.id)) {
          vault = vault.filter(v => v !== product.id);
          vaultBtn.textContent = "♡ Save to Vault";
          vaultBtn.classList.remove("remove");
        } else {
          vault.push(product.id);
          vaultBtn.textContent = "✕ Remove from Vault";
          vaultBtn.classList.add("remove");
        }

        saveVault();
      });

      /* ---------- ORDER BUTTON ---------- */
      const orderBtn = document.createElement("a");
      orderBtn.className = "order-btn";

      if (product.outOfStock) {
        orderBtn.textContent = "Out of Stock";
        orderBtn.classList.add("out-of-stock-btn");
      } else {
        orderBtn.textContent = "Order via Instagram";
        orderBtn.href = "#";
      }

      /* ---------- APPEND ---------- */
      details.appendChild(title);
      details.appendChild(short);
      details.appendChild(price);
      details.appendChild(full);
      details.appendChild(vaultBtn);
      details.appendChild(orderBtn);

      card.appendChild(slider);
      card.appendChild(details);

      /* ---------- BIG CARD OPEN ---------- */
      card.addEventListener("click", () => {
        document.querySelectorAll(".product-card").forEach(c => {
          c.classList.remove("big-product");
        });

        card.classList.add("big-product");
        container.prepend(card);
        scrollToTop();
      });

      container.appendChild(card);
    });

  restoreBigCard();
}

/* ===================== RESTORE FROM VAULT ===================== */
function restoreBigCard() {
  const openId = localStorage.getItem("openProduct");
  if (!openId) return;

  const card = document.querySelector(`[data-id="${openId}"]`);
  if (card) {
    card.classList.add("big-product");
    container.prepend(card);
    scrollToTop();
  }

  localStorage.removeItem("openProduct");
                            }
