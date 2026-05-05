// components/home/Features.jsx
import { Truck, ShieldCheck, RefreshCw, Headphones } from "lucide-react";

const features = [
  {
    icon: <Truck size={28} />,
    title: "Free Shipping",
    desc: "Free delivery on all orders over $50 worldwide.",
  },
  {
    icon: <ShieldCheck size={28} />,
    title: "Premium Quality",
    desc: "Every product is crafted with the finest materials.",
  },
  {
    icon: <RefreshCw size={28} />,
    title: "Easy Returns",
    desc: "Hassle-free 30-day return policy for all products.",
  },
  {
    icon: <Headphones size={28} />,
    title: "24/7 Support",
    desc: "Our team is always here to help you anytime.",
  },
];

export default function Features() {
  return (
    <section className="w-full bg-white py-16 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {features.map((f) => (
          <div key={f.title} className="flex flex-col items-center text-center gap-3">
            <div className="text-black">{f.icon}</div>
            <h3 className="text-sm font-semibold uppercase tracking-widest">
              {f.title}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}