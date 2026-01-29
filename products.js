/* =========================================================
   MASTER PRODUCTS DATABASE
   This file is the ONLY place where products are defined
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
    details: `
      Premium suede sneakers designed for everyday wear.<br><br>
      Upper Material: Suede<br>
      Sole Material: Rubber<br>
      Closure: Lace-Up<br>
      Style: Casual<br><br>
      Country Of Origin: India
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
    details: `
      Crafted with premium leather for a refined everyday look.<br><br>
      Upper Material: Genuine Leather<br>
      Sole Material: Rubber<br>
      Closure: Lace-Up<br>
      Style: Casual<br><br>
      Country Of Origin: India
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
    details: `
      Size: S, M, L, XL<br>
      Fit: Regular Fit<br>
      Care Instruction: Machine Wash<br><br>
      A versatile zip-front bomber jacket suitable for everyday wear.
    `
  },

  {
    id: "jacket-2",
    category: "clothing",
    title: "Nuon Brown Text Design Relaxed-Fit Cotton Jacket",
    price: "₹2,999",
    images: [
      "jacket2-1.jpg",
      "jacket2-2.jpg",
      "jacket2-3.jpg"
    ],
    stock: true,
    search: "nuon brown relaxed fit jacket",
    details: `
      Size: XS, S, M, L, XL<br>
      Fit: Relaxed Fit<br>
      Care Instruction: Machine Wash<br>
      Fabric Composition: 100% Cotton<br><br>
      Manufactured and Marketed By:<br>
      Trent Limited, Bombay House, 24, Homi Mody Street, Fort, Mumbai – 400001<br><br>
      Country Of Origin: India
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
    details: `
      Size: XS, S, M, L<br>
      Fit: Relaxed Fit<br>
      Care Instruction: Machine Wash<br>
      Fabric Composition: 79% Polyester, 18% Viscose, 3% Elastane<br><br>
      Manufactured and Marketed By:<br>
      Trent Limited, Bombay House, 24, Homi Mody Street, Fort, Mumbai – 400001<br><br>
      Country Of Origin: India
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
    details: `
      Size: XS, S, M, L<br>
      Fit: Relaxed Fit<br>
      Care Instruction: Machine Wash<br>
      Fabric Composition: 100% Cotton<br><br>
      ETA redefines everyday comfort with this brown shirt, crafted from
      cotton-rich fabric for a soft, natural feel. Designed with a spread
      collar, full-length sleeves and a classic button-up front.<br><br>
      Country Of Origin: India
    `
  }

];
