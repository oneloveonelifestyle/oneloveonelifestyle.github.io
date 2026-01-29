/* =========================================================
   MASTER PRODUCTS DATABASE
   DO NOT CHANGE FIELD NAMES
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
    search: "mens brown suede sneakers leather lace up"
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
    search: "mens black leather sneakers premium"
  },

  /* ===================== SHIRTS ===================== */

  {
    id: "shirt-1",
    category: "clothing",
    title: "ETA Brown Textured Relaxed-Fit Cotton Shirt",
    short: "Relaxed-fit cotton shirt",
    price: "₹1,499",
    images: [
      "shirt1-1.jpg",
      "shirt1-2.jpg"
    ],
    stock: true,
    search: "eta brown textured cotton shirt relaxed",
    description: `
      <strong>Size:</strong> XS, S, M, L<br>
      <strong>Fit:</strong> Relaxed Fit<br>
      <strong>Care Instruction:</strong> Machine Wash<br>
      <strong>Fabric Composition:</strong> 100% Cotton<br><br>

      ETA redefines everyday comfort with this brown shirt, crafted from
      cotton-rich fabric for a soft, natural feel throughout the day.
      Designed with a spread collar, full-length sleeves and a
      classic button-up front.<br><br>

      <strong>Country Of Origin:</strong> India
    `
  },

  /* ===================== JACKETS ===================== */

  {
    id: "jacket-1",
    category: "clothing",
    title: "Campus Sutra Zip-Front Bomber Jacket",
    short: "Classic zip-front bomber jacket",
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
      <strong>Care Instruction:</strong> Machine Wash
    `
  },

  {
    id: "jacket-2",
    category: "clothing",
    title: "Nuon Brown Text Design Relaxed-Fit Cotton Jacket",
    short: "Relaxed-fit cotton jacket",
    price: "₹2,299",
    images: [
      "jacket2-1.jpg",
      "jacket2-2.jpg",
      "jacket2-3.jpg"
    ],
    stock: true,
    search: "nuon brown relaxed fit jacket",
    description: `
      <strong>Size:</strong> XS, S, M, L, XL<br>
      <strong>Fit:</strong> Relaxed Fit<br>
      <strong>Care Instruction:</strong> Machine Wash<br>
      <strong>Fabric Composition:</strong> 100% Cotton<br><br>

      <strong>Manufactured and Marketed By:</strong><br>
      Trent Limited, Bombay House, 24, Homi Mody Street,
      Fort, Mumbai – 400001<br><br>

      <strong>Country Of Origin:</strong> India
    `
  },

  {
    id: "jacket-3",
    category: "clothing",
    title: "Studiofit Dark Brown Relaxed-Fit Hooded Jacket",
    short: "Relaxed-fit hooded jacket",
    price: "₹2,199",
    images: [
      "jacket3-1.jpg",
      "jacket3-2.jpg",
      "jacket3-3.jpg"
    ],
    stock: true,
    search: "studiofit dark brown hooded jacket relaxed",
    description: `
      <strong>Size:</strong> XS, S, M, L<br>
      <strong>Fit:</strong> Relaxed Fit<br>
      <strong>Care Instruction:</strong> Machine Wash<br>
      <strong>Fabric Composition:</strong>
      79% Polyester, 18% Viscose, 3% Elastane<br><br>

      <strong>Manufactured and Marketed By:</strong><br>
      Trent Limited, Bombay House, 24, Homi Mody Street,
      Fort, Mumbai – 400001<br><br>

      <strong>Country Of Origin:</strong> India
    `
  }

];
