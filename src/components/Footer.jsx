import { MessageCircle, Phone } from "lucide-react";
import { NavLink } from "react-router-dom";

const Footer = () => {

  const handleWhatsApp = () => {
    window.open("https://wa.me/919620996689", "_blank");
  };

  const handleCall = () => {
    window.location.href = "tel:9620996689";
  };

  return (
    <footer className="relative mt-20 text-white overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/80 backdrop-blur-md"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 p-10">

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10">

          {/* Logo */}
          <div>
            <h1 className="text-xl font-bold tracking-wide">
              SPA & SALON<span className="text-amber-400">.</span>
            </h1>
            <p className="text-gray-400 mt-3 text-sm">
              Premium spa & salon experience with luxury and comfort.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h2 className="font-bold mb-3">Navigation</h2>

            <NavLink
              to="/"
              className="block text-gray-400 hover:text-white transition relative group"
            >
              Home
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-amber-400 transition-all group-hover:w-full"></span>
            </NavLink>

            <NavLink
              to="/services"
              className="block text-gray-400 hover:text-white transition relative group mt-2"
            >
              Services
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-amber-400 transition-all group-hover:w-full"></span>
            </NavLink>

            <NavLink
              to="/contact"
              className="block text-gray-400 hover:text-white transition relative group mt-2"
            >
              Contact
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-amber-400 transition-all group-hover:w-full"></span>
            </NavLink>

          </div>

          {/* Contact */}
          <div>
            <h2 className="font-bold mb-3">Contact</h2>
            <p className="text-gray-400">Bhopal, India</p>
            <p className="text-gray-400 mt-1">+91 9620996689</p>

            <div className="flex gap-4 mt-4">
              <button
                onClick={handleWhatsApp}
                className="glass p-2 rounded-full text-green-400 hover:scale-110 transition"
              >
                <MessageCircle size={18} />
              </button>

              <button
                onClick={handleCall}
                className="glass p-2 rounded-full text-blue-400 hover:scale-110 transition"
              >
                <Phone size={18} />
              </button>
            </div>
          </div>

          {/* Subscribe */}
          <div>
            <h2 className="font-bold mb-3">Subscribe</h2>

            <div className="glass flex items-center rounded-full overflow-hidden">
              <input
                placeholder="Enter email"
                className="bg-transparent px-4 py-2 w-full outline-none text-sm"
              />
              <button className="bg-amber-400 text-black px-4 py-2 text-sm hover:scale-105 transition">
                Join
              </button>
            </div>

            <p className="text-gray-500 text-xs mt-2">
              Get offers & updates
            </p>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-10 pt-5 text-center text-gray-500 text-sm">
          © 2026 SPA & SALON. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;