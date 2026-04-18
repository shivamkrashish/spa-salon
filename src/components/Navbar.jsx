import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X, MessageCircle, Sun, Moon } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(true);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Dark mode apply
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  // WhatsApp
  const handleWhatsApp = () => {
    const msg = "Hello, I want to enquire about spa services.";
    window.open(
      `https://wa.me/919620996689?text=${encodeURIComponent(msg)}`,
      "_blank"
    );
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center transition-all duration-300
      ${
        scrolled
          ? "glass shadow-lg"
          : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <h1 className="text-xl font-bold tracking-wide">
        SPA & SALON<span className="text-amber-400">.</span>
      </h1>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-6 text-sm font-medium">

        <NavLink
          to="/"
          className={({ isActive }) =>
            `nav-link ${
              isActive
                ? "text-black dark:text-white"
                : "text-gray-500 dark:text-gray-300"
            }`
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/services"
          className="nav-link text-gray-500 dark:text-gray-300"
        >
          Services
        </NavLink>

        <NavLink
          to="/contact"
          className="nav-link text-gray-500 dark:text-gray-300"
        >
          Contact
        </NavLink>

        {/* 🌙 Dark Mode Toggle */}
        <button
          onClick={() => setDark(!dark)}
          className="p-2 rounded-full glass hover:scale-110 transition"
        >
          {dark ? <Sun size={18} /> : <Moon size={18} />}
        </button>

        {/* Enquire */}
        <button
          onClick={handleWhatsApp}
          className="flex items-center gap-2 px-4 py-2 rounded-full 
          bg-green-500/10 border border-green-400/30 text-green-400 
          hover:bg-green-500/20 transition"
        >
          <MessageCircle size={18} />
          Enquire
        </button>

        {/* Book Now */}
        <button
          onClick={handleWhatsApp}
          className="bg-amber-400 text-black px-5 py-2 rounded-full hover:scale-105 transition hover:shadow-lg"
        >
          Book Now
        </button>
      </div>

      {/* Mobile Buttons */}
      <div className="md:hidden flex items-center gap-3">

        {/* Dark Toggle Mobile */}
        <button
          onClick={() => setDark(!dark)}
          className="p-2 rounded-full glass"
        >
          {dark ? <Sun size={18} /> : <Moon size={18} />}
        </button>

        {/* Menu */}
        <button onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-16 left-0 w-full glass flex flex-col items-center gap-6 py-8 md:hidden transition-all duration-300 
        ${
          open
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-5 pointer-events-none"
        }`}
      >
        <NavLink onClick={() => setOpen(false)} to="/" className="nav-link">
          Home
        </NavLink>

        <NavLink onClick={() => setOpen(false)} to="/services" className="nav-link">
          Services
        </NavLink>

        <NavLink onClick={() => setOpen(false)} to="/contact" className="nav-link">
          Contact
        </NavLink>

        <button
          onClick={handleWhatsApp}
          className="flex items-center gap-2 px-6 py-2 rounded-full bg-green-500 text-white"
        >
          <MessageCircle size={18} />
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