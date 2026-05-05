// components/home/Newsletter.jsx
"use client";

// rest of the code stays same
export default function Newsletter() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center gap-6">
        {/* Heading */}
        <p className="text-xs uppercase tracking-[0.3em] text-gray-400">
          Stay Updated
        </p>
        <h2 className="text-4xl font-bold tracking-tight text-black">
          Join Our Newsletter
        </h2>
        <p className="text-gray-400 text-base leading-relaxed max-w-md">
          Subscribe to get exclusive offers, new arrivals, and style
          inspiration delivered straight to your inbox.
        </p>

        {/* Form */}
        <div className="flex flex-col sm:flex-row gap-0 w-full max-w-lg mt-2">
          <input
            type="email"
            placeholder="Enter your email address"
            className="flex-1 px-6 py-3 border border-black text-sm outline-none placeholder:text-gray-400 focus:bg-gray-50"
          />
          <button className="bg-black text-white px-8 py-3 text-sm uppercase tracking-widest hover:bg-gray-800 transition-colors">
            Subscribe
          </button>
        </div>

        <p className="text-xs text-gray-400">
          No spam, unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}