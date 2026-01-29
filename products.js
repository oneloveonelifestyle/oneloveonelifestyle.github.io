/* =========================================================
   MASTER PRODUCTS DATABASE
   SINGLE SOURCE OF TRUTH
   ========================================================= */

const PRODUCTS = [

  /* ===================== SHOES ===================== */

  {
    id: "shoe-1",
    category: "shoe",
    title: "Men’s Brown Suede Sneakers",
    short: "Premium suede lace-up sneakers",
    price: "₹2,999",
    images: [
      "shoe1-1.jpg",
      "shoe1-2.jpg",
      "shoe1-3.jpg"
    ],
    outOfStock: true,
    search: "mens brown suede sneakers leather lace up",
    description: `
      Size: UK 6, 7, 8, 9, 10<br>
      Material: Premium Suede Leather<br>
      Sole: Rubber<br>
      Closure: Lace-Up<br><br>

      Crafted for everyday wear, these brown suede sneakers combine timeless
      style with long-lasting comfort and durability.
    `
  },

  {
    id: "shoe-2",
    category: "shoe",
    title: "Men’s Black Leather Sneakers",
    short: "Premium leather everyday sneakers",
    price: "₹3,499",
    images: [
      "shoe2-1.jpg",
      "shoe2-2.jpg"
    ],
    outOfStock: true,
    search: "mens black leather sneakers premium",
    description: `
      Size: UK 6, 7, 8, 9, 10<br>
      Material: Genuine Leather<br>
      Sole: Rubber<br>
      Closure: Lace-Up<br><br>

      Designed for a clean urban look, these black leather sneakers
      offer premium comfort with a polished finish.
    `
  },

  /* ===================== CLOTHING ===================== */

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
    outOfStock: false,
    search: "eta brown textured cotton shirt relaxed",
    description: `
      Size: XS, S, M, L<br>
      Fit: Relaxed Fit<br>
      Care Instruction: Machine Wash<br>
      Fabric Composition: 100% Cotton<br><br>

      ETA redefines everyday comfort with this brown shirt, crafted from
      cotton-rich fabric for a soft, breathable feel throughout the day.
      Designed with a spread collar and full-length sleeves.<br><br>

      Country Of Origin: India
    `
  },

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
    outOfStock: false,
    search: "campus sutra bomber jacket zip front",
    description: `
      Size: S, M, L, XL<br>
      Fit: Regular Fit<br>
      Care Instruction: Machine Wash<br><br>

      A versatile bomber jacket with a structured silhouette,
      suitable for everyday casual wear.
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
    outOfStock: false,
    search: "nuon brown relaxed fit jacket",
    description: `
      Size: XS, S, M, L, XL<br>
      Fit: Relaxed Fit<br>
      Care Instruction: Machine Wash<br>
      Fabric Composition: 100% Cotton<br><br>

      Manufactured and Marketed By:<br>
      Trent Limited, Bombay House, 24, Homi Mody Street,
      Fort, Mumbai – 400001<br><br>

      Country Of Origin: India
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
    outOfStock: false,
    search: "studiofit dark brown hooded jacket relaxed",
    description: `
      Size: XS, S, M, L<br>
      Fit: Relaxed Fit<br>
      Care Instruction: Machine Wash<br>
      Fabric Composition: 79% Polyester, 18% Viscose, 3% Elastane<br><br>

      Manufactured and Marketed By:<br>
      Trent Limited, Bombay House, 24, Homi Mody Street,
      Fort, Mumbai – 400001<br><br>

      Country Of Origin: India
    `
  }

];
