// components/Footer.jsx
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold tracking-widest uppercase mb-4">
            Orvexa
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Premium quality products crafted for those who appreciate elegance
            and style.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-sm uppercase tracking-widest font-semibold mb-4">
            Quick Links
          </h3>
          <ul className="flex flex-col gap-2">
            {[
              { name: "Home", href: "/" },
              { name: "About", href: "/about" },
              { name: "Benefits", href: "/benefits" },
              { name: "Contact", href: "/contact" },
            ].map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-gray-400 text-sm hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-sm uppercase tracking-widest font-semibold mb-4">
            Contact
          </h3>
          <ul className="flex flex-col gap-2 text-gray-400 text-sm">
            <li>info@Orvexa.com</li>
            <li>+1 (800) 123-4567</li>
            <li>New York, USA</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 px-6 py-4 text-center text-gray-500 text-xs">
        © {new Date().getFullYear()} Orvexa. All rights reserved.
      </div>
    </footer>
  );
}