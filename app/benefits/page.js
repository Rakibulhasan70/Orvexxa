// app/benefits/page.js
import { ShieldCheck, Truck, RefreshCw, Headphones, Star, Gift } from "lucide-react";

const benefits = [
  {
    icon: <ShieldCheck size={32} />,
    title: "Premium Quality",
    desc: "Every product is made from the finest materials, ensuring durability and elegance that lasts a lifetime.",
  },
  {
    icon: <Truck size={32} />,
    title: "Free Shipping",
    desc: "Enjoy free worldwide shipping on all orders over $50. Fast, reliable, and trackable delivery every time.",
  },
  {
    icon: <RefreshCw size={32} />,
    title: "Easy Returns",
    desc: "Not satisfied? Return any product within 30 days for a full refund. No questions asked.",
  },
  {
    icon: <Headphones size={32} />,
    title: "24/7 Support",
    desc: "Our dedicated support team is always available to assist you with any questions or concerns.",
  },
  {
    icon: <Star size={32} />,
    title: "Exclusive Members",
    desc: "Join our loyalty program and enjoy exclusive discounts, early access to new collections, and special offers.",
  },
  {
    icon: <Gift size={32} />,
    title: "Gift Wrapping",
    desc: "Make every occasion special with our premium gift wrapping service available on all orders.",
  },
];

export default function Benefits() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="w-full bg-[#f5f0eb] py-24">
        <div className="max-w-7xl mx-auto px-6 text-center flex flex-col items-center gap-4">
          <p className="text-xs uppercase tracking-[0.3em] text-gray-500">
            Why Choose Us
          </p>
          <h1 className="text-5xl font-bold tracking-tight text-black">
            Our Benefits
          </h1>
          <p className="text-gray-500 text-base leading-relaxed max-w-xl">
            We go above and beyond to ensure every experience with Orvexa
            is nothing short of exceptional.
          </p>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="w-full bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="border border-gray-100 p-8 flex flex-col gap-4 hover:shadow-md transition-shadow"
            >
              <div className="text-black">{b.icon}</div>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-black">
                {b.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom Banner */}
      <section className="w-full bg-black py-20">
        <div className="max-w-7xl mx-auto px-6 text-center flex flex-col items-center gap-6">
          <p className="text-xs uppercase tracking-[0.3em] text-gray-400">
            Ready To Experience
          </p>
          <h2 className="text-4xl font-bold text-white tracking-tight">
            The Orvexa Difference
          </h2>
          <p className="text-gray-400 text-base leading-relaxed max-w-xl">
            Join thousands of satisfied customers who have made Orvexa
            their go-to destination for premium lifestyle products.
          </p>
        </div>
      </section>
    </div>
  );
}