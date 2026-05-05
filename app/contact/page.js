// app/contact/page.js
"use client";

import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="w-full bg-[#f5f0eb] py-24">
        <div className="max-w-7xl mx-auto px-6 text-center flex flex-col items-center gap-4">
          <p className="text-xs uppercase tracking-[0.3em] text-gray-500">
            Get In Touch
          </p>
          <h1 className="text-5xl font-bold tracking-tight text-black">
            Contact Us
          </h1>
          <p className="text-gray-500 text-base leading-relaxed max-w-xl">
            Have a question or need help? We would love to hear from you.
            Our team will get back to you within 24 hours.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="w-full bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Info */}
          <div className="flex flex-col gap-8">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-2">
                Contact Info
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-black mb-6">
                We Are Here <br />
                <span className="italic font-light">To Help You</span>
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed">
                Reach out to us through any of the channels below and we
                will respond as quickly as possible.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              {[
                {
                  icon: <Mail size={20} />,
                  label: "Email",
                  value: "info@orvexxa.com",
                },
                {
                  icon: <Phone size={20} />,
                  label: "Phone",
                  value: "+1 (800) 123-4567",
                },
                {
                  icon: <MapPin size={20} />,
                  label: "Address",
                  value: "123 Fifth Avenue, New York, USA",
                },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="text-black mt-1">{item.icon}</div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">
                      {item.label}
                    </p>
                    <p className="text-sm text-black">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="flex flex-col gap-4">
            {sent && (
              <div className="bg-black text-white text-sm px-6 py-4 uppercase tracking-widest">
                Message sent successfully!
              </div>
            )}
            <input
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full border border-gray-200 px-6 py-3 text-sm outline-none focus:border-black transition-colors placeholder:text-gray-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full border border-gray-200 px-6 py-3 text-sm outline-none focus:border-black transition-colors placeholder:text-gray-400"
            />
            <textarea
              placeholder="Your Message"
              rows={6}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full border border-gray-200 px-6 py-3 text-sm outline-none focus:border-black transition-colors placeholder:text-gray-400 resize-none"
            />
            <button
              onClick={handleSubmit}
              className="bg-black text-white px-8 py-3 text-sm uppercase tracking-widest hover:bg-gray-800 transition-colors self-start"
            >
              Send Message
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}