/* =========================================================
   MASTER PRODUCTS DATABASE
   ========================================================= */

const PRODUCTS = [

  /* ===================== SHOES ===================== */

  {
    id: "shoe-1",
    category: "shoe",
    title: "Men’s Brown Suede Sneakers",
    price: "₹2,999",
    images: [
      "shoe1-1.jpg",
      "shoe1-2.jpg",
      "shoe1-3.jpg"
    ],
    stock: false,
    search: "mens brown suede sneakers leather lace up",
    short: "Casual suede sneakers with lace-up closure",
    description: `
      Premium quality suede sneakers designed for everyday comfort.
      Features a durable sole, classic lace-up closure, and a versatile
      silhouette suitable for casual and semi-formal wear.
    `
  },

  {
    id: "shoe-2",
    category: "shoe",
    title: "Men’s Black Leather Sneakers",
    price: "₹3,499",
    images: [
      "shoe2-1.jpg",
      "shoe2-2.jpg"
    ],
    stock: false,
    search: "mens black leather sneakers premium",
    short: "Premium leather sneakers for daily wear",
    description: `
      Crafted from high-quality leather, these sneakers deliver durability,
      comfort, and a clean modern look suitable for everyday styling.
    `
  },

  /* ===================== SHIRTS ===================== */

  {
    id: "shirt-1",
    category: "clothing",
    title: "ETA Brown Textured Relaxed-Fit Cotton Shirt",
    price: "₹1,499",
    images: [
      "shirt1-1.jpg",
      "shirt1-2.jpg"
    ],
    stock: true,
    search: "eta brown textured cotton shirt relaxed",
    short: "Relaxed-fit cotton shirt with textured finish",
    description: `
      Size: XS, S, M, L<br>
      Fit: Relaxed Fit<br>
      Care Instruction: Machine Wash<br>
      Fabric Composition: 100% Cotton<br><br>

      ETA redefines everyday comfort with this brown shirt,
      crafted from cotton-rich fabric for a soft, natural feel.
      Designed with a spread collar, full-length sleeves,
      and a classic button-up front.<br><br>

      Country of Origin: India
    `
  },

  /* ===================== JACKETS ===================== */

  {
    id: "jacket-1",
    category: "clothing",
    title: "Campus Sutra Zip-Front Bomber Jacket",
    price: "₹1,999",
    images: [
      "jacket1-1.jpg",
      "jacket1-2.jpg",
      "jacket1-3.jpg"
    ],
    stock: true,
    search: "campus sutra bomber jacket zip front",
    short: "Zip-front bomber jacket with regular fit",
    description: `
      Size: S, M, L, XL<br>
      Fit: Regular Fit<br>
      Care Instruction: Machine Wash<br><br>

      A versatile bomber jacket featuring a clean zip-front design,
      ideal for everyday casual styling.
    `
  },

  {
    id: "jacket-2",
    category: "clothing",
    title: "Nuon Brown Text Design Relaxed-Fit Jacket",
    price: "₹2,999",
    images: [
      "jacket2-1.jpg",
      "jacket2-2.jpg",
      "jacket2-3.jpg"
    ],
    stock: true,
    search: "nuon brown relaxed fit jacket",
    short: "Relaxed-fit cotton jacket with text design",
    description: `
      Size: XS, S, M, L, XL<br>
      Fit: Relaxed Fit<br>
      Care Instruction: Machine Wash<br>
      Fabric Composition: 100% Cotton<br><br>

      Manufactured and Marketed By:<br>
      Trent Limited, Bombay House,<br>
      24, Homi Mody Street, Fort,<br>
      Mumbai – 400001<br><br>

      Country of Origin: India
    `
  },

  {
    id: "jacket-3",
    category: "clothing",
    title: "Studiofit Dark Brown Relaxed-Fit Hooded Jacket",
    price: "₹2,199",
    images: [
      "jacket3-1.jpg",
      "jacket3-2.jpg",
      "jacket3-3.jpg"
    ],
    stock: true,
    search: "studiofit dark brown hooded jacket relaxed",
    short: "Hooded jacket with relaxed fit and stretch fabric",
    description: `
      Size: XS, S, M, L<br>
      Fit: Relaxed Fit<br>
      Care Instruction: Machine Wash<br>
      Fabric Composition: 79% Polyester, 18% Viscose, 3% Elastane<br><br>

      Manufactured and Marketed By:<br>
      Trent Limited, Bombay House,<br>
      24, Homi Mody Street, Fort,<br>
      Mumbai – 400001<br><br>

      Country of Origin: India
    `
  }

];
