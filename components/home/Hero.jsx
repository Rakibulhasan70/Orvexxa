// components/home/Hero.jsx
import Link from "next/link";

export default function Hero() {
  return (
    <section className="w-full bg-[#f5f0eb] min-h-[90vh] flex items-center">
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div className="flex flex-col gap-6">
          <p className="text-xs uppercase tracking-[0.3em] text-gray-500">
            New Collection 2025
          </p>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight text-black">
            Elevate Your <br />
            <span className="italic font-light">Lifestyle</span>
          </h1>
          <p className="text-gray-500 text-base leading-relaxed max-w-md">
            Discover premium products designed for those who seek quality,
            elegance, and timeless style in every detail.
          </p>
          <div className="flex items-center gap-4 mt-2">
            <Link
              href="/benefits"
              className="bg-black text-white px-8 py-3 text-sm uppercase tracking-widest hover:bg-gray-800 transition-colors"
            >
              Explore Now
            </Link>
            <Link
              href="/about"
              className="text-sm uppercase tracking-widest text-black border-b border-black hover:text-gray-500 hover:border-gray-500 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Image Placeholder */}
        <div className="w-full h-[500px] bg-[#e8e0d8] flex items-center justify-center">
          <p className="text-gray-400 uppercase tracking-widest text-sm">
            Hero Image
          </p>
        </div>
      </div>
    </section>
  );
}