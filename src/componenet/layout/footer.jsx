import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Logo + About */}
        <div>
          <h2 className="text-2xl font-bold text-indigo-600 mb-2">Vejramax</h2>
          <p className="text-gray-400">
            Helping startups and brands grow with smart social media marketing and digital strategies.
          </p>

          <div className="flex mt-4 space-x-4">
            <a href="#" className="hover:text-indigo-500"><Facebook size={20} /></a>
            <a href="#" className="hover:text-indigo-500"><Instagram size={20} /></a>
            <a href="#" className="hover:text-indigo-500"><Linkedin size={20} /></a>
            <a href="#" className="hover:text-indigo-500"><Twitter size={20} /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-4 text-white">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-indigo-500">Home</Link></li>
            <li><Link to="/services" className="hover:text-indigo-500">Services</Link></li>
            <li><Link to="/case-studies" className="hover:text-indigo-500">Case Studies</Link></li>
            <li><Link to="/pricing" className="hover:text-indigo-500">Pricing</Link></li>
            <li><Link to="/about" className="hover:text-indigo-500">About</Link></li>
            <li><Link to="/contact" className="hover:text-indigo-500">Contact</Link></li>
          </ul>
        </div>

        {/* Contact / Newsletter */}
        <div>
          <h3 className="font-semibold mb-4 text-white">Contact Us</h3>
          <p>Email: <a href="mailto:info@vejramax.com" className="hover:text-indigo-500">info@vejramax.com</a></p>
          <p>Phone: <a href="tel:+1234567890" className="hover:text-indigo-500">+1 234 567 890</a></p>

          {/* Optional Newsletter */}
          <div className="mt-4">
            <h4 className="text-white mb-2">Subscribe</h4>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-3 py-2 rounded-l-lg w-full focus:outline-none text-gray-900"
              />
              <button className="bg-indigo-600 px-4 py-2 rounded-r-lg text-white hover:bg-indigo-500 transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Vejramax. All rights reserved.
      </div>
    </footer>
  );
}
