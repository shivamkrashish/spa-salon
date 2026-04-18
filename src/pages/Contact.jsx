import { motion } from "framer-motion";
import { Phone, MapPin, User } from "lucide-react";
import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";

const Contact = () => {

  const handleWhatsApp = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const phone = e.target.phone.value;
    const message = e.target.message.value;

    const text = `Hello, my name is ${name}. My phone is ${phone}. ${message}`;

    window.open(
      `https://wa.me/919620996689?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  const handleCall = () => {
    window.location.href = "tel:9620996689";
  };

  return (
    <section className="relative min-h-screen text-white overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1552693673-1bf958298935"
          className="w-full h-full object-cover"
          alt="spa"
        />
        <div className="absolute inset-0 bg-black/80"></div>
      </div>

      <div className="relative z-10 px-6 md:px-12 py-20">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold">
            Contact Us
          </h1>

          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            Have questions or want to book a relaxing session?  
            Our expert team is available <span className="text-amber-400">24/7</span> to assist you.  
            Connect with us directly and experience premium care.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">

          {/* FORM */}
          <motion.form
            onSubmit={handleWhatsApp}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white/10 backdrop-blur-2xl p-8 rounded-2xl space-y-6 border border-white/10 shadow-2xl hover:shadow-amber-400/10 transition"
          >
            {/* Heading */}
            <h2 className="text-2xl font-semibold flex items-center gap-3">
              <User size={22} className="text-amber-400 drop-shadow-lg" />
              <span className="bg-gradient-to-r from-amber-300 via-yellow-400 to-orange-400 
              bg-clip-text text-transparent font-bold tracking-wide">
                Send a Message
              </span>
            </h2>

            {/* Inputs */}
            <input
              name="name"
              placeholder="Your Name"
              required
              className="w-full p-3 rounded-lg bg-white/5 border border-white/10 
              outline-none focus:ring-2 focus:ring-amber-400 focus:bg-white/10 transition"
            />

            <input
              name="phone"
              placeholder="Phone Number"
              required
              className="w-full p-3 rounded-lg bg-white/5 border border-white/10 
              outline-none focus:ring-2 focus:ring-amber-400 focus:bg-white/10 transition"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              className="w-full p-3 rounded-lg bg-white/5 border border-white/10 
              outline-none focus:ring-2 focus:ring-amber-400 focus:bg-white/10 transition"
            ></textarea>

            {/* Button */}
            <button
              className="w-full bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-400 
              text-black py-3 rounded-full hover:scale-105 transition 
              shadow-lg hover:shadow-amber-400/40 font-semibold"
            >
              Send via WhatsApp
            </button>
          </motion.form>

          {/* INFO */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >

            <div className="bg-white/10 backdrop-blur-2xl p-6 rounded-2xl space-y-5 border border-white/10 shadow-2xl hover:shadow-green-400/10 transition">

              <h2 className="text-lg font-semibold text-amber-400 tracking-wide">
                Talk to Our Expert
              </h2>

              <p className="text-gray-300 text-sm leading-relaxed">
                Hi 👋, I’m <span className="text-white font-semibold">MD Fajal</span>,  
                your personal spa consultant. I’ll help you choose the best service 
                and ensure a smooth booking experience.
              </p>

              <p className="text-gray-400 text-sm">
                ⏰ Available 24/7 for instant support
              </p>

              {/* Location */}
              <div className="flex items-center gap-2 text-gray-300 text-sm">
                <MapPin size={16} className="text-red-400" />
                Shikaripalya, Phase 1, Electronic City, Bangalore
              </div>

              {/* Buttons */}
              <div className="flex gap-4 mt-3">

                <button
                  onClick={handleCall}
                  className="flex items-center gap-2 bg-blue-500 px-4 py-2 rounded-full 
                  hover:scale-105 transition shadow-lg hover:shadow-blue-400/40"
                >
                  <Phone size={16} />
                  Call Now
                </button>

                <button
                  onClick={() =>
                    window.open("https://wa.me/919620996689", "_blank")
                  }
                  className="flex items-center gap-2 bg-green-500 px-4 py-2 rounded-full 
                  hover:scale-105 transition shadow-lg hover:shadow-green-400/40"
                >
                  <FaWhatsapp size={18} />
                  WhatsApp
                </button>

              </div>

              {/* Social Icons */}
              <div className="flex gap-4 mt-5">

                <a
                  href="#"
                  className="w-10 h-10 flex items-center justify-center rounded-full 
                  bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 
                  hover:scale-110 transition shadow-lg"
                >
                  <FaInstagram size={18} className="text-white" />
                </a>

                <a
                  href="#"
                  className="w-10 h-10 flex items-center justify-center rounded-full 
                  bg-blue-600 hover:bg-blue-700 
                  hover:scale-110 transition shadow-lg"
                >
                  <FaFacebook size={18} className="text-white" />
                </a>

              </div>

            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps?q=Electronic+City+Bangalore&output=embed"
                width="100%"
                height="250"
                style={{ border: 0 }}
                loading="lazy"
              ></iframe>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Contact;