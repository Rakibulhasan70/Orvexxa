// components/home/MidBanner.jsx
import Link from "next/link";

export default function MidBanner() {
  return (
    <section className="w-full bg-black py-24">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Image Placeholder */}
        <div className="w-full h-[400px] bg-gray-800 flex items-center justify-center">
          <p className="text-gray-500 uppercase tracking-widest text-sm">
            Banner Image
          </p>
        </div>

        {/* Text */}
        <div className="flex flex-col gap-6">
          <p className="text-xs uppercase tracking-[0.3em] text-gray-400">
            Limited Edition
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight">
            Crafted For <br />
            <span className="italic font-light">Perfection</span>
          </h2>
          <p className="text-gray-400 text-base leading-relaxed max-w-md">
            Our limited edition collection blends modern design with timeless
            craftsmanship. Every piece tells a story of quality and elegance.
          </p>
          <Link
            href="/benefits"
            className="self-start bg-white text-black px-8 py-3 text-sm uppercase tracking-widest hover:bg-gray-200 transition-colors"
          >
            Discover More
          </Link>
        </div>
      </div>
    </section>
  );
}