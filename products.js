/* =========================================================
   MASTER PRODUCTS DATABASE
   ONLY SOURCE OF TRUTH
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
    description: `
      Premium suede sneakers designed for everyday comfort and effortless style.
      Featuring a soft suede upper, durable sole and a clean lace-up silhouette,
      these sneakers pair perfectly with both casual and semi-formal outfits.
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
    description: `
      Crafted from premium leather, these black sneakers offer a sleek,
      modern profile with long-lasting comfort. Ideal for daily wear
      and smart casual styling.
    `
  },

  /* ===================== CLOTHING ===================== */

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
    search: "eta brown textured relaxed fit cotton shirt",
    description: `
      <strong>Size:</strong> XS, S, M, L<br>
      <strong>Fit:</strong> Relaxed Fit<br>
      <strong>Care Instruction:</strong> Machine Wash<br>
      <strong>Fabric Composition:</strong> 100% Cotton<br><br>

      ETA redefines everyday comfort with this brown shirt,
      crafted from cotton-rich fabric for a soft, breathable feel.
      Designed in a relaxed silhouette, it features a spread collar,
      full-length sleeves and a classic button-up front.<br><br>

      <strong>Country Of Origin:</strong> India
    `
  },

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
    description: `
      <strong>Size:</strong> S, M, L, XL<br>
      <strong>Fit:</strong> Regular Fit<br>
      <strong>Care Instruction:</strong> Machine Wash<br><br>

      A versatile zip-front bomber jacket designed for modern casual wear.
      Features a clean silhouette, durable construction and effortless layering
      for everyday styling.
    `
  },

  {
    id: "jacket-2",
    category: "clothing",
    title: "Nuon Brown Text Design Relaxed-Fit Cotton Jacket",
    price: "₹2,299",
    images: [
      "jacket2-1.jpg",
      "jacket2-2.jpg",
      "jacket2-3.jpg"
    ],
    stock: true,
    search: "nuon brown relaxed fit cotton jacket",
    description: `
      <strong>Size:</strong> XS, S, M, L, XL<br>
      <strong>Fit:</strong> Relaxed Fit<br>
      <strong>Care Instruction:</strong> Machine Wash<br>
      <strong>Fabric Composition:</strong> 100% Cotton<br><br>

      Manufactured and Marketed By:<br>
      Trent Limited, Bombay House, 24, Homi Mody Street, Fort, Mumbai – 400001<br><br>

      <strong>Country Of Origin:</strong> India
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
    search: "studiofit dark brown hooded jacket",
    description: `
      <strong>Size:</strong> XS, S, M, L<br>
      <strong>Fit:</strong> Relaxed Fit<br>
      <strong>Care Instruction:</strong> Machine Wash<br>
      <strong>Fabric Composition:</strong> 79% Polyester, 18% Viscose, 3% Elastane<br><br>

      Manufactured and Marketed By:<br>
      Trent Limited, Bombay House, 24, Homi Mody Street, Fort, Mumbai – 400001<br><br>

      <strong>Country Of Origin:</strong> India
    `
  },

  /* ===================== ACCESSORIES ===================== */

  {
    id: "watch-1",
    category: "accessories",
    title: "Men’s Chronograph Stainless Steel Watch",
    price: "₹3,999",
    images: [
      "watch1-1.jpg"
    ],
    stock: true,
    search: "mens chronograph stainless steel watch",
    description: `
      A bold, precision-engineered chronograph watch crafted
      for modern sophistication. Featuring a stainless steel build,
      refined dial detailing and reliable performance.<br><br>

      🚚 Free Shipping All Over India
    `
  }

];
