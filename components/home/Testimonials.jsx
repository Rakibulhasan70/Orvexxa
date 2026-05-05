// components/home/Testimonials.jsx
const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Fashion Blogger",
    text: "Orvexxa products are absolutely stunning. The quality is unmatched and the designs are timeless. I get compliments every time I wear them.",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Interior Designer",
    text: "I have been shopping with Orvexxa for over a year now. Every single product exceeds my expectations. Truly a premium experience.",
  },
  {
    id: 3,
    name: "Emma Williams",
    role: "Lifestyle Influencer",
    text: "The attention to detail in every Orvexxa product is remarkable. From packaging to the product itself, everything feels luxurious.",
  },
];

export default function Testimonials() {
  return (
    <section className="w-full bg-[#f5f0eb] py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-2">
            What People Say
          </p>
          <h2 className="text-4xl font-bold tracking-tight text-black">
            Customer Reviews
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white p-8 flex flex-col gap-4"
            >
              {/* Stars */}
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-black text-sm">★</span>
                ))}
              </div>
              {/* Text */}
              <p className="text-gray-500 text-sm leading-relaxed">
                "{t.text}"
              </p>
              {/* Author */}
              <div className="mt-auto pt-4 border-t border-gray-100">
                <p className="text-sm font-semibold text-black">{t.name}</p>
                <p className="text-xs uppercase tracking-widest text-gray-400">
                  {t.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}