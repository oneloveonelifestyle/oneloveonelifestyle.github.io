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
    images: ["shoe1-1.jpg", "shoe1-2.jpg", "shoe1-3.jpg"],
    outOfStock: true,
    short: "Premium suede lace-up sneakers",
    description: `
      Size: 7, 8, 9, 10, 11<br>
      Fit: Regular Fit<br>
      Care Instruction: Wipe with dry cloth<br>
      Material: Genuine Suede Leather<br><br>
      Crafted for everyday elegance with a premium suede finish and durable sole.
    `,
    search: "mens brown suede sneakers leather lace up"
  },

  {
    id: "shoe-2",
    category: "shoe",
    title: "Men’s Black Leather Sneakers",
    price: "₹3,499",
    images: ["shoe2-1.jpg", "shoe2-2.jpg"],
    outOfStock: true,
    short: "Classic black leather sneakers",
    description: `
      Size: 7, 8, 9, 10, 11<br>
      Fit: Regular Fit<br>
      Care Instruction: Wipe clean<br>
      Material: Premium Leather
    `,
    search: "mens black leather sneakers premium"
  },

  /* ===================== SHIRTS ===================== */

  {
    id: "shirt-1",
    category: "clothing",
    title: "ETA Brown Textured Relaxed-Fit Cotton Shirt",
    price: "₹1,499",
    images: ["shirt1-1.jpg", "shirt1-2.jpg"],
    outOfStock: false,
    short: "Relaxed-fit cotton shirt",
    description: `
      Size: XS, S, M, L<br>
      Fit: Relaxed Fit<br>
      Care Instruction: Machine Wash<br>
      Fabric Composition: 100% Cotton<br><br>
      ETA redefines everyday comfort with this brown shirt, crafted from cotton-rich fabric for a soft, natural feel throughout the day. Framed in a relaxed silhouette, it features a spread collar, full-length sleeves and a classic button-up front.<br><br>
      Country Of Origin: India
    `,
    search: "eta brown textured cotton shirt relaxed"
  },

  /* ===================== JACKETS ===================== */

  {
    id: "jacket-1",
    category: "clothing",
    title: "Campus Sutra Zip-Front Bomber Jacket",
    price: "₹1,999",
    images: ["jacket1-1.jpg", "jacket1-2.jpg", "jacket1-3.jpg"],
    outOfStock: false,
    short: "Zip-front bomber jacket",
    description: `
      Size: S, M, L, XL<br>
      Fit: Regular Fit<br>
      Care Instruction: Machine Wash
    `,
    search: "campus sutra bomber jacket zip front"
  },

  {
    id: "jacket-2",
    category: "clothing",
    title: "Nuon Brown Text Design Relaxed-Fit Cotton Jacket",
    price: "₹2,999",
    images: ["jacket2-1.jpg", "jacket2-2.jpg", "jacket2-3.jpg"],
    outOfStock: false,
    short: "Relaxed-fit cotton jacket",
    description: `
      Size: XS, S, M, L, XL<br>
      Fit: Relaxed Fit<br>
      Care Instruction: Machine Wash<br>
      Fabric Composition: 100% Cotton<br><br>
      Manufactured and Marketed By:<br>
      Trent Limited, Bombay House, 24, Homi Mody Street, Fort, Mumbai – 400001<br><br>
      Country Of Origin: India
    `,
    search: "nuon brown relaxed fit jacket"
  },

  {
    id: "jacket-3",
    category: "clothing",
    title: "Studiofit Dark Brown Relaxed-Fit Hooded Jacket",
    price: "₹2,199",
    images: ["jacket3-1.jpg", "jacket3-2.jpg", "jacket3-3.jpg"],
    outOfStock: false,
    short: "Hooded relaxed-fit jacket",
    description: `
      Size: XS, S, M, L<br>
      Fit: Relaxed Fit<br>
      Care Instruction: Machine Wash<br>
      Fabric Composition: 79% Polyester, 18% Viscose, 3% Elastane<br><br>
      Manufactured and Marketed By:<br>
      Trent Limited, Bombay House, 24, Homi Mody Street, Fort, Mumbai – 400001<br><br>
      Country Of Origin: India
    `,
    search: "studiofit dark brown hooded jacket relaxed"
  }

];
