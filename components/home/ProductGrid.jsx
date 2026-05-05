// components/home/ProductGrid.jsx
const products = [
  {
    id: 1,
    title: "Minimalist Watch",
    category: "Accessories",
    price: "$129.00",
  },
  {
    id: 2,
    title: "Leather Wallet",
    category: "Accessories",
    price: "$89.00",
  },
  {
    id: 3,
    title: "Silk Scarf",
    category: "Fashion",
    price: "$69.00",
  },
  {
    id: 4,
    title: "Canvas Tote",
    category: "Bags",
    price: "$49.00",
  },
  {
    id: 5,
    title: "Gold Bracelet",
    category: "Jewelry",
    price: "$159.00",
  },
  {
    id: 6,
    title: "Sunglasses",
    category: "Accessories",
    price: "$99.00",
  },
];

export default function ProductGrid() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-2">
            Our Collection
          </p>
          <h2 className="text-4xl font-bold tracking-tight text-black">
            Featured Products
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((p) => (
            <div key={p.id} className="group cursor-pointer">
              {/* Image */}
              <div className="w-full h-72 bg-[#f5f0eb] flex items-center justify-center mb-4 overflow-hidden">
                <p className="text-gray-400 uppercase tracking-widest text-xs">
                  Product Image
                </p>
              </div>
              {/* Info */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">
                    {p.category}
                  </p>
                  <h3 className="text-sm font-semibold text-black group-hover:text-gray-500 transition-colors">
                    {p.title}
                  </h3>
                </div>
                <p className="text-sm font-semibold text-black">{p.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}