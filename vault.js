const vaultContainer = document.getElementById("vault");
const vault = JSON.parse(localStorage.getItem("vault")) || [];

if (vault.length === 0) {
  vaultContainer.innerHTML = `<div class="empty">Your vault is empty</div>`;
}

/*
MAP EACH PRODUCT ID TO:
- page
- image
- title
*/
const PRODUCTS = {
  // CLOTHING
  "cloth-1": {
    page: "clothing.html",
    image: "cloth1-1.jpg",
    title: "Classic Black Tee"
  },
  "cloth-2": {
    page: "clothing.html",
    image: "cloth2-1.jpg",
    title: "Oversized White Tee"
  },

  // SHOES
  "shoe-1": {
    page: "shoes.html",
    image: "shoe1-1.jpg",
    title: "Men’s Brown Suede Sneakers"
  },
  "shoe-2": {
    page: "shoes.html",
    image: "shoe2-1.jpg",
    title: "Men’s Olive Suede Sneakers"
  }
};

vault.forEach(id => {
  const product = PRODUCTS[id];
  if (!product) return;

  const card = document.createElement("div");
  card.className = "vault-card";
  card.innerHTML = `
    <img src="${product.image}">
    <div class="details">
      <h3>${product.title}</h3>
    </div>
  `;

  card.onclick = () => {
    localStorage.setItem("openProduct", id);
    window.location.href = product.page;
  };

  vaultContainer.appendChild(card);
});
