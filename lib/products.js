// lib/products.js
export const products = [
  {
    id: 1,
    slug: "cream-floral-shoulder-bag",
    title: "Cream Floral Shoulder Bag",
    image: "/products/cream-floral-shoulder-bag.png",
    size: "12\"W x 9\"H x 4\"D",
    description:
      "An elegant cream shoulder bag featuring a sculpted floral design, cascading ruffles, and antique-gold accents. A distinctive handcrafted accessory for casual outings, celebrations, or gifting.",
    price: "$49.99",
  },
  {
    id: 2,
    slug: "black-floral-tote",
    title: "Black Floral Tote",
    image: "/products/black-floral-tote.png",
    size: "15\"W x 12\"H x 4\"D",
    description:
      "A spacious black tote decorated with colorful hand-embroidered wildflowers. Its artistic design and practical shape make it suitable for shopping, work, travel, or everyday use.",
    price: "$44.99",
  },
  {
    id: 3,
    slug: "pink-floral-tote",
    title: "Pink Floral Tote",
    image: "/products/pink-floral-tote.png",
    size: "14\"W x 13\"H x 4\"D",
    description:
      "A charming pink tote featuring vibrant three-dimensional floral embroidery. Lightweight, colorful, and practical, it brings handmade beauty to everyday outfits.",
    price: "$44.99",
  },
  {
    id: 4,
    slug: "red-embroidered-clutch",
    title: "Red Embroidered Clutch",
    image: "/products/red-embroidered-clutch.png",
    size: "10\"W x 7\"H x 2\"D",
    description:
      "A statement clutch featuring floral embroidery, decorative beads, sequins, fringe, and coin-inspired embellishments. Ideal for festivals, cultural events, and special occasions.",
    price: "$39.99",
  },
  {
    id: 5,
    slug: "cat-butterfly-wall-art",
    title: "Cat-and-Butterfly Wall Art",
    image: "/products/cat-butterfly-wall-art.png",
    size: "12\"W x 18\"H",
    description:
      "A delightful hand-embroidered artwork capturing a curious cat meeting a colorful butterfly among garden flowers. A playful decorative piece for children's rooms, nurseries, or animal lovers.",
    price: "$44.99",
  },
];

export function getProductBySlug(slug) {
  return products.find((p) => p.slug === slug);
}