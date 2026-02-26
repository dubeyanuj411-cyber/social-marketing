import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Case Studies", path: "/case-studies" },
    { name: "Pricing", path: "/pricing" },
    { name: "Blog", path: "/blog" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-md" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-indigo-600">Vejramax</Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 items-center">
          {menuLinks.map((link) => (
            <li key={link.name}>
              <Link to={link.path} className="text-gray-700 hover:text-indigo-600 transition-colors">{link.name}</Link>
            </li>
          ))}
          <li>
            <Link to="/contact" className="ml-4 px-5 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 transition">
              Book Free Strategy Call
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col p-4 space-y-4">
            {menuLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className="text-gray-700 hover:text-indigo-600 block"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/contact"
                className="mt-2 px-4 py-2 bg-indigo-600 text-white rounded-lg block text-center hover:bg-indigo-500"
                onClick={() => setIsOpen(false)}
              >
                Book Free Strategy Call
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
