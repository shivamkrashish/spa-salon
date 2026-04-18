import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // WhatsApp
  const handleWhatsApp = () => {
    const msg = "Hello, I want to enquire about spa services.";
    window.open(
      `https://wa.me/919620996689?text=${encodeURIComponent(msg)}`,
      "_blank"
    );
  };

  // NavLink style
  const linkStyle = ({ isActive }) =>
    `nav-link transition ${
      isActive ? "text-white" : "text-gray-300"
    } hover:text-white`;

  return (
    <nav
      className={`fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center transition-all duration-300
      ${
        scrolled
          ? "bg-black md:backdrop-blur-md md:bg-white/10 md:shadow-lg"
          : "bg-black md:bg-transparent"
      }`}
    >
      {/* ✅ Logo Clickable */}
      <NavLink
        to="/"
        onClick={() => setOpen(false)}
        className="text-xl font-bold tracking-wide text-white"
      >
        SPA & SALON<span className="text-amber-400">.</span>
      </NavLink>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-6 text-sm font-medium">
        <NavLink to="/" className={linkStyle}>
          Home
        </NavLink>

        <NavLink to="/services" className={linkStyle}>
          Services
        </NavLink>

        <NavLink to="/contact" className={linkStyle}>
          Contact
        </NavLink>

        {/* Enquire */}
        <button
          onClick={handleWhatsApp}
          className="flex items-center gap-2 px-4 py-2 rounded-full 
          bg-green-500/10 border border-green-400/30 text-green-400 
          hover:bg-green-500/20 transition"
        >
          <FaWhatsapp size={18} className="animate-pulse" />
          Enquire
        </button>

        {/* Book Now */}
        <button
          onClick={handleWhatsApp}
          className="bg-amber-400 text-black px-5 py-2 rounded-full 
          hover:scale-105 transition hover:shadow-lg"
        >
          Book Now
        </button>
      </div>

      {/* Mobile Buttons */}
      <div className="md:hidden flex items-center gap-3 text-white">
        <button onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-16 left-0 w-full bg-black flex flex-col items-center gap-6 py-8 md:hidden transition-all duration-300 
        ${
          open
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-5 pointer-events-none"
        }`}
      >
        <NavLink
          onClick={() => setOpen(false)}
          to="/"
          className="text-white text-lg"
        >
          Home
        </NavLink>

        <NavLink
          onClick={() => setOpen(false)}
          to="/services"
          className="text-white text-lg"
        >
          Services
        </NavLink>

        <NavLink
          onClick={() => setOpen(false)}
          to="/contact"
          className="text-white text-lg"
        >
          Contact
        </NavLink>

        <button
          onClick={handleWhatsApp}
          className="flex items-center gap-2 px-6 py-2 rounded-full bg-green-500 text-white"
        >
          <FaWhatsapp size={18} />
          Enquire
        </button>

        <button
          onClick={handleWhatsApp}
          className="bg-amber-400 text-black px-6 py-2 rounded-full"
        >
          Book Now
        </button>
      </div>
    </nav>
  );
};

export default Navbar;