const PRODUCTS = [

  /* ===================== SHOES ===================== */

  {
    id: "shoe-1",
    category: "shoe",
    title: "Men’s Brown Suede Sneakers",
    price: "₹2,999.00",
    images: ["shoe1-1.jpg","shoe1-2.jpg","shoe1-3.jpg"],
    stock: true,
    search: "mens brown suede sneakers leather lace up",
    description: "Men’s Brown Suede Sneakers<br><br>" +
      "Size: 6, 7, 8, 9, 10<br><br>" +
      "Material : Leather<br><br>" +
      "Weight : 2kg<br><br>" +
      "Lace-up."
  },

  {
    id: "shoe-2",
    category: "shoe",
    title: "Men’s Black Leather Sneakers",
    price: "₹3,499.00",
    images: ["shoe2-1.jpg","shoe2-2.jpg"],
    stock: true,
    search: "mens black leather sneakers premium",
    description: "Classic black leather sneakers with premium finish."
  },

  {
    id: "shoe-3",
    category: "shoe",
    title: "Navy Knit Textured",
    price: "₹1,199.00",
    images: ["shoe-navy-1.jpg", "shoe-navy-2.jpg", "shoe-navy-3.jpg"],
    stock: true,
    search: "navy knit textured shoes men casual breathable",
    description: "Lightweight navy knit textured shoes designed for everyday comfort and breathability."
  },

  /* ===================== CLOTHING ===================== */

  {
    id: "shirt-1",
    category: "clothing",
    title: "ETA Brown Textured Relaxed-Fit Cotton Shirt",
    price: "₹1,499.00",
    images: ["shirt1-1.jpg","shirt1-2.jpg"],
    stock: true,
    search: "eta brown textured relaxed fit cotton shirt",
    description:
      "ETA Brown Textured Relaxed-Fit Cotton Shirt<br><br>" +
      "Size : XS, S, M, L<br><br>" +
      "Fit: Relaxed Fit<br><br>" +
      "Care Instruction: Machine Wash<br><br>" +
      "Fabric Composition: 100% Cotton<br><br>" +
      "ETA redefines everyday comfort with this brown shirt, crafted from cotton-rich fabric, for a soft, natural feel throughout the day. " +
      "Framed in a relaxed silhouette, it features a spread collar, full-length sleeves and a classic button-up front.<br><br>" +
      "Country Of Origin: India"
  },
{
  id: "wes-casuals-sage-relaxed-fit-cotton-shirt",
  category: "clothing",
  title: "WES Casuals Sage Solid Relaxed-Fit Cotton Shirt",
  price: "₹1,799.00",
  images: ["wes-sage-shirt-1.jpg","wes-sage-shirt-2.jpg","wes-sage-shirt-3.jpg"],
  stock: true,
  search: "wes casuals sage solid relaxed fit cotton shirt shirts",
  description:
    "WES Casuals Sage Solid Relaxed-Fit Cotton Shirt<br><br>" +
    "Size : XS, S, M, L, XL<br><br>" +
    "Fit: Relaxed Fit<br><br>" +
    "Care Instruction: Machine Wash<br><br>" +
    "Fabric Composition: 100% Cotton<br><br>" +
    "Manufactured and Marketed By:<br>" +
    "Trent Limited, Bombay House, 24, Homi Mody Street, Fort, Mumbai – 400001<br><br>" +
    "Country Of Origin: India"
},

  {
    id: "jacket-1",
    category: "clothing",
    title: "Campus Sutra Zip-Front Bomber Jacket",
    price: "₹1,999.00",
    images: ["jacket1-1.jpg","jacket1-2.jpg","jacket1-3.jpg"],
    stock: true,
    search: "campus sutra zip front bomber jacket",
    description:
      "Campus Sutra Zip-Front Bomber Jacket<br><br>" +
      "Size : S, M, L, XL<br><br>" +
      "Fit: Regular Fit<br><br>" +
      "Care Instruction: Machine Wash"
  },

  {
    id: "jacket-2",
    category: "clothing",
    title: "Nuon Brown Text Design Relaxed-Fit Cotton Jacket",
    price: "₹2,299.00",
    images: ["jacket2-1.jpg","jacket2-2.jpg","jacket2-3.jpg"],
    stock: true,
    search: "nuon brown text design relaxed fit cotton jacket",
    description:
      "Nuon Brown Text Design Relaxed-Fit Cotton Jacket<br><br>" +
      "Size : XS, S, M, L, XL<br><br>" +
      "Fit: Relaxed Fit<br><br>" +
      "Care Instruction: Machine Wash<br><br>" +
      "Fabric Composition: 100% Cotton<br><br>" +
      "Manufactured and Marketed By:<br>" +
      "Trent Limited, Bombay House, 24, Homi Mody Street, Fort, Mumbai – 400001<br><br>" +
      "Country Of Origin: India"
  },

  {
    id: "jacket-3",
    category: "clothing",
    title: "Studiofit Dark Brown Hooded Jacket",
    price: "₹2,199.00",
    images: ["jacket3-1.jpg","jacket3-2.jpg","jacket3-3.jpg"],
    stock: true,
    search: "studiofit dark brown relaxed fit hooded jacket",
    description:
      "Studiofit Dark Brown Relaxed-Fit Hooded Jacket<br><br>" +
      "Size : XS, S, M, L<br><br>" +
      "Fit: Relaxed Fit<br><br>" +
      "Care Instruction: Machine Wash<br><br>" +
      "Fabric Composition: 79% Polyester, 18% Viscose, 3% Elastane<br><br>" +
      "Manufactured and Marketed By:<br>" +
      "Trent Limited, Bombay House, 24, Homi Mody Street, Fort, Mumbai – 400001<br><br>" +
      "Country Of Origin: India"
  },

  {
    id: "shirt-orchid-1",
    category: "clothing",
    title: "Wild Orchid Pink Corduroy Boxy Fit Crop Shirt",
    price: "₹1,399.00",
    images: ["shirt-orchid-1.jpg", "shirt-orchid-2.jpg"],
    stock: true,
    search: "wild orchid pink corduroy boxy fit crop shirt corduroy",
    description:
      "Wild Orchid Pink Corduroy Boxy Fit Crop Shirt<br><br>" +
      "Size : L, XL, XXL<br><br>" +
      "Fit : Boxy Fit<br><br>" +
      "Care Instruction : Machine Wash<br><br>" +
      "Fabric Composition : Corduroy Cotton<br><br>" +
      "This wild orchid pink crop shirt is crafted from soft corduroy fabric for a structured yet comfortable feel. Designed with a modern boxy silhouette, it offers a relaxed fit that pairs effortlessly with everyday outfits<br><br>" +
      "Country Of Origin : India"
  },
  {
  id: "shirt-wes-sage-1",
  category: "clothing",
  title: "WES Casuals Sage Solid Relaxed-Fit Cotton Shirt",
  price: "₹2,499.00",
  images: [
    "wes-sage-1.jpg",
    "wes-sage-2.jpg",
    "wes-sage-3.jpg"
  ],
  stock: true,
  search: "wes casuals sage solid relaxed fit cotton shirt",
  description:
    "WES Casuals Sage Solid Relaxed-Fit Cotton Shirt<br><br>" +
    "Size : S, M, L, XL<br><br>" +
    "Fit : Relaxed Fit<br><br>" +
    "Care Instruction : Machine Wash<br><br>" +
    "Fabric Composition : 100% Cotton<br><br>" +
    "Manufactured and Marketed By:<br>" +
    "Trent Limited, Bombay House, 24, Homi Mody Street, Fort, Mumbai – 400001<br><br>" +
    "Country Of Origin : India"
  },
  {
  id: "shirt-ascot-offwhite-1",
  category: "clothing",
  title: "Ascot Off-White Striped Relaxed-Fit Linen Shirt",
  price: "₹2,499.00",
  images: [
    "ascot-offwhite-1.jpg",
    "ascot-offwhite-2.jpg",
    "ascot-offwhite-3.jpg"
  ],
  stock: true,
  search: "ascot off white striped relaxed fit linen shirt",
  description:
    "Ascot Off-White Striped Relaxed-Fit Linen Shirt<br><br>" +
    "Size : XS, S, M, L, XL<br><br>" +
    "Fit : Relaxed Fit<br><br>" +
    "Care Instruction : Machine Wash<br><br>" +
    "Fabric Composition : 100% Linen<br><br>" +
    "Manufactured and Marketed By:<br>" +
    "Trent Limited, Bombay House, 24, Homi Mody Street, Fort, Mumbai – 400001<br><br>" +
    "Country Of Origin : India"
  },

  /* ===================== ACCESSORIES ===================== */

  {
    id: "watch-1",
    category: "accessories",
    title: "Men’s Chronograph Stainless Steel Watch",
    price: "₹3,999.00",
    images: ["watch1.jpg"],
    stock: true,
    search: "mens chronograph stainless steel watch",
    description:
      "Men’s Chronograph Stainless Steel Watch<br><br>" +
      "A bold, precision-engineered timepiece crafted for modern sophistication."
  },
  {
  id: "watch-2",
  category: "accessories",
  title: "Men’s Powermatic Automatic Watch",
  price: "₹3,199.00",
  images: ["style-video.jpg"],
  stock: true,
  search: "mens automatic watch open heart stainless steel premium japanese movement",
  description:
    "Men’s Gentleman Powermatic 80 Automatic Watch<br><br>" +
    "Collection: 7AA Premium<br><br>" +
    "Movement: 100% Premium Automatic Japanese Machinery<br><br>" +
    "Display: 3-Hand Watch with Open Heart Dial<br><br>" +
    "Case Size: 41mm<br><br>" +
    "Weight: 126g<br><br>" +
    "Glass: Mineral Crystal<br><br>" +
    "Bracelet: Stainless Steel 3-Pink Bracelet<br><br>" +
    "Clasp: Butterfly Clasp<br><br>" +
    "Back Case: Open Transparent Mechanical View<br><br>" +
    "Coating: IGP Colour Coating (No Fading, No Rusting)<br><br>" +
    "Crown: Tissot Branding<br><br>" +
    "Needles: Radium-Enabled for Low-Light Visibility"
},
  {
  id: "necklace-silver-heart-chain",
  category: "accessories",
  title: "Silver Heart and Textured Chain Necklace",
  price: "₹499.00",
  images: ["silver-heart-1.jpg", "silver-heart-2.jpg"],
  stock: true,
  search: "silver heart textured chain necklace accessories",
  description:
    "Silver Heart and Textured Chain Necklace<br><br>" +
    "Style: Heart Pendant with Textured Chain<br><br>" +
    "Care Instruction: Keep away from water and perfumes<br><br>" +
    "Occasion: Casual & Party Wear<br><br>" +
    "Country Of Origin: India"
},
{
  id: "watch-chronograph-black-head",
  category: "accessories",
  title: "Men’s Black Dial Chronograph Watch",
  price: "₹3,199.00",
  images: ["watch-white-1.jpg"],
  stock: true,
  search: "mens black dial chronograph stainless steel watch watches",
  description:
    "Men’s Chronograph Stainless Steel Watch<br><br>" +
    "A bold, precision-engineered timepiece crafted for modern sophistication."
}
 
];
