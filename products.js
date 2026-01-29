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
    description: `
Style: Lace-Up Sneakers
Upper Material: Suede
Occasion: Casual Wear
Care Instruction: Wipe with dry cloth
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
Style: Lace-Up Sneakers
Upper Material: Leather
Occasion: Casual Wear
Care Instruction: Wipe with dry cloth
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
    description: `
Size: S, M, L, XL
Fit: Regular Fit
Care Instruction: Machine Wash
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
    search: "nuon brown relaxed fit jacket",
    description: `
Size: XS, S, M, L, XL
Fit: Relaxed Fit
Care Instruction: Machine Wash
Fabric Composition: 100% Cotton

Manufactured and Marketed By:
Trent Limited, Bombay House, 24, Homi Mody Street,
Fort, Mumbai – 400001

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
    description: `
Size: XS, S, M, L
Fit: Relaxed Fit
Care Instruction: Machine Wash
Fabric Composition: 79% Polyester, 18% Viscose, 3% Elastane

Manufactured and Marketed By:
Trent Limited, Bombay House, 24, Homi Mody Street,
Fort, Mumbai – 400001

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
    description: `
Size: XS, S, M, L
Fit: Relaxed Fit
Care Instruction: Machine Wash
Fabric Composition: 100% Cotton

ETA redefines everyday comfort with this brown shirt,
crafted from cotton-rich fabric for a soft, natural feel.
Designed with a spread collar, full sleeves and
a classic button-up front.

Country Of Origin: India
`
  }

];
