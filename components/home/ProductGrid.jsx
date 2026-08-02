// components/home/ProductGrid.jsx
import Image from "next/image";
import { products } from "@/lib/products";

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
            <div key={p.id} href={`/products/${p.slug}`} className="group cursor-pointer">
              {/* Image */}
              <div className="relative w-full h-72 bg-[#f5f0eb] mb-4 overflow-hidden">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              {/* Info */}
              <div>
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-sm font-semibold text-black group-hover:text-gray-500 transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-sm font-semibold text-black">{p.price}</p>
                </div>
                <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">
                  {p.size}
                </p>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {p.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}