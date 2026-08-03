// app/about/page.js
export default function About() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="w-full bg-[#f5f0eb] py-24">
        <div className="max-w-7xl mx-auto px-6 text-center flex flex-col items-center gap-4">
          <p className="text-xs uppercase tracking-[0.3em] text-gray-500">
            Who We Are
          </p>
          <h1 className="text-5xl font-bold tracking-tight text-black">
            About Orvexa
          </h1>
          <p className="text-gray-500 text-base leading-relaxed max-w-xl">
            We are a premium lifestyle brand dedicated to bringing you the
            finest products crafted with passion, precision, and purpose.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="w-full bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="w-full h-[400px] bg-[#f5f0eb] flex items-center justify-center">
            <p className="text-gray-400 uppercase tracking-widest text-sm">
              About Image
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <p className="text-xs uppercase tracking-[0.3em] text-gray-400">
              Our Story
            </p>
            <h2 className="text-4xl font-bold tracking-tight text-black">
              Born From a Passion <br />
              <span className="italic font-light">For Excellence</span>
            </h2>
            <p className="text-gray-500 text-base leading-relaxed">
              Orvexa was founded with a simple mission — to create products
              that stand the test of time. We believe that true luxury lies in
              the details, and every piece we craft reflects our commitment to
              quality and elegance.
            </p>
            <p className="text-gray-500 text-base leading-relaxed">
              From sourcing the finest materials to perfecting every stitch,
              we pour our heart into everything we make. Our team of skilled
              artisans brings decades of experience to every product.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="w-full bg-[#f5f0eb] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-2">
              What We Stand For
            </p>
            <h2 className="text-4xl font-bold tracking-tight text-black">
              Our Values
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Quality",
                desc: "We never compromise on the quality of our products. Every item is carefully inspected before it reaches you.",
              },
              {
                title: "Sustainability",
                desc: "We are committed to ethical sourcing and sustainable practices that protect our planet for future generations.",
              },
              {
                title: "Innovation",
                desc: "We constantly push the boundaries of design and craftsmanship to bring you products that are ahead of their time.",
              },
            ].map((v) => (
              <div key={v.title} className="bg-white p-8 flex flex-col gap-4">
                <h3 className="text-sm font-semibold uppercase tracking-widest text-black">
                  {v.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}