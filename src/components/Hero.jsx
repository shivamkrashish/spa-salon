import { motion } from "framer-motion";
import { Phone, MessageCircle, ChevronDown } from "lucide-react";

const Hero = () => {

  // WhatsApp
  const handleWhatsApp = () => {
    const msg = "Hello, I want to book a spa service.";
    window.open(
      `https://wa.me/919620996689?text=${encodeURIComponent(msg)}`,
      "_blank"
    );
  };

  // Call
  const handleCall = () => {
    window.location.href = "tel:9620996689";
  };

  return (
    <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">

      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874"
        alt="spa"
        className="absolute w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Blur Lights */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/30 blur-3xl rounded-full"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-pink-500/30 blur-3xl rounded-full"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block px-5 py-2 mb-6 glass rounded-full text-sm"
        >
          ⭐ Trusted by 100+ Residents
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-7xl font-bold leading-tight"
        >
          LUXURY SPA <br />
          <span className="text-amber-400">EXPERIENCE</span>
        </motion.h1>

        {/* Description */}
        <p className="text-gray-300 mt-4 max-w-xl mx-auto">
          Experience ultimate relaxation with our premium spa & salon services.
          Rejuvenate your body, mind, and soul with expert care.
        </p>

        {/* Stats */}
        <div className="flex justify-center gap-4 mt-6 flex-wrap">

          <div className="glass px-6 py-3 rounded-xl text-center">
            <h2 className="font-bold text-lg">100+</h2>
            <p className="text-sm text-gray-300">Happy Clients</p>
          </div>

          <div className="glass px-6 py-3 rounded-xl text-center">
            <h2 className="font-bold text-lg">4.8★</h2>
            <p className="text-sm text-gray-300">Rating</p>
          </div>

          <div className="glass px-6 py-3 rounded-xl text-center">
            <h2 className="font-bold text-lg">24/7</h2>
            <p className="text-sm text-gray-300">Support</p>
          </div>

        </div>

        {/* Buttons */}
        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <button onClick={handleWhatsApp} className="btn">
            Book Now
          </button>

          <button className="glass px-6 py-2 rounded-full">
            Explore
          </button>
        </div>

      </div>

      {/* ✅ FIXED FLOATING ICONS */}
   <div className="
  fixed bottom-5 z-50
  flex gap-4
  left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-5
  md:flex-col items-center
">

  {/* WhatsApp */}
  <motion.button
    onClick={handleWhatsApp}
    initial={{ scale: 0 }}
    animate={{ scale: 1, y: [0, -6, 0] }}
    transition={{ delay: 0.3, duration: 2, repeat: Infinity }}
    whileHover={{ scale: 1.15 }}
    className="w-12 h-12 flex items-center justify-center rounded-full 
    bg-green-500/20 backdrop-blur-lg border border-green-400/30 
    shadow-lg hover:shadow-green-500/50 text-green-400"
  >
    <MessageCircle size={22} />
  </motion.button>

  {/* Call */}
  <motion.button
    onClick={handleCall}
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{ delay: 0.5 }}
    whileHover={{ scale: 1.15 }}
    className="w-12 h-12 flex items-center justify-center rounded-full 
    bg-blue-500/20 backdrop-blur-lg border border-blue-400/30 
    shadow-lg hover:shadow-blue-500/50 text-blue-400"
  >
    <Phone size={22} />
  </motion.button>

</div>

      {/* Scroll Down */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute bottom-5"
      >
        <ChevronDown size={30} />
      </motion.div>

    </section>
  );
};

export default Hero;