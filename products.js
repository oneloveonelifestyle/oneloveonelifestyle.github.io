/* =========================================================
   MASTER PRODUCTS DATABASE
   SINGLE SOURCE OF TRUTH
   DO NOT ADD RENDER LOGIC HERE
   ========================================================= */

const PRODUCTS = [

  /* ===================== SHOES ===================== */

  {
    id: "shoe-1",
    category: "shoe",
    title: "Men’s Brown Suede Sneakers",
    price: "₹2,999",
    images: ["shoe1-1.jpg", "shoe1-2.jpg", "shoe1-3.jpg"],
    stock: false,
    search: "mens brown suede sneakers leather",
    description: `
• Material: Premium suede leather  
• Closure: Lace-up  
• Sole: Cushioned rubber sole  
• Comfort: Soft inner lining for daily wear  
• Occasion: Casual & everyday use  
• Country of Origin: India
`
  },

  {
    id: "shoe-2",
    category: "shoe",
    title: "Men’s Black Leather Sneakers",
    price: "₹3,499",
    images: ["shoe2-1.jpg", "shoe2-2.jpg"],
    stock: false,
    search: "mens black leather sneakers",
    description: `
• Material: Genuine leather upper  
• Closure: Lace-up  
• Design: Minimal premium finish  
• Sole: Durable anti-slip outsole  
• Ideal for daily & semi-formal wear  
• Country of Origin: India
`
  },

  /* ===================== CLOTHING ===================== */

  {
    id: "shirt-1",
    category: "clothing",
    title: "ETA Brown Textured Relaxed-Fit Cotton Shirt",
    price: "₹1,499",
    images: ["shirt1-1.jpg", "shirt1-2.jpg"],
    stock: true,
    search: "eta brown textured cotton shirt",
    description: `
• Size: XS, S, M, L  
• Fit: Relaxed Fit  
• Fabric: 100% Cotton  
• Care: Machine Wash  

ETA redefines everyday comfort with this brown shirt crafted from cotton-rich fabric for a soft natural feel.  
Features a spread collar, full-length sleeves and classic button-up front.

• Country of Origin: India
`
  },

  {
    id: "jacket-1",
    category: "clothing",
    title: "Campus Sutra Zip-Front Bomber Jacket",
    price: "₹1,999",
    images: ["jacket1-1.jpg", "jacket1-2.jpg", "jacket1-3.jpg"],
    stock: true,
    search: "campus sutra bomber jacket",
    description: `
• Size: S, M, L, XL  
• Fit: Regular Fit  
• Closure: Zip-front  
• Care: Machine Wash  

Stylish bomber jacket designed for everyday urban wear with a clean silhouette.
`
  },

  {
    id: "jacket-2",
    category: "clothing",
    title: "Nuon Brown Text Design Relaxed-Fit Cotton Jacket",
    price: "₹2,299",
    images: ["jacket2-1.jpg", "jacket2-2.jpg", "jacket2-3.jpg"],
    stock: true,
    search: "nuon brown cotton jacket",
    description: `
• Size: XS, S, M, L, XL  
• Fit: Relaxed Fit  
• Fabric: 100% Cotton  
• Care: Machine Wash  

Manufactured & Marketed By:  
Trent Limited, Bombay House, Mumbai – 400001  

• Country of Origin: India
`
  },

  {
    id: "jacket-3",
    category: "clothing",
    title: "Studiofit Dark Brown Relaxed-Fit Hooded Jacket",
    price: "₹2,199",
    images: ["jacket3-1.jpg", "jacket3-2.jpg", "jacket3-3.jpg"],
    stock: true,
    search: "studiofit dark brown hooded jacket",
    description: `
• Size: XS, S, M, L  
• Fit: Relaxed Fit  
• Fabric: 79% Polyester, 18% Viscose, 3% Elastane  
• Care: Machine Wash  

Manufactured & Marketed By:  
Trent Limited, Bombay House, Mumbai – 400001  

• Country of Origin: India
`
  },

  /* ===================== ACCESSORIES ===================== */

  {
    id: "watch-1",
    category: "accessories",
    title: "Men’s Chronograph Stainless Steel Watch",
    price: "₹3,999",
    images: ["watch1.jpg"],
    stock: true,
    search: "mens chronograph stainless steel watch",
    description: `
• Dial: Chronograph  
• Strap: Stainless Steel  
• Display: Analog  
• Water Resistance: Yes  

A bold precision-engineered timepiece crafted for modern sophistication.

🚚 Free Shipping All Over India
`
  }

];
