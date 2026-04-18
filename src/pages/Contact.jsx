import { motion } from "framer-motion";
import { MessageCircle, Phone, MapPin, User } from "lucide-react";

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

          {/* 🔥 NEW DESCRIPTION */}
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
            className="glass p-8 rounded-2xl space-y-5"
          >
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <User size={18} /> Send Message
            </h2>

            <input
              name="name"
              placeholder="Your Name"
              required
              className="w-full p-3 rounded bg-white/10 outline-none"
            />

            <input
              name="phone"
              placeholder="Phone Number"
              required
              className="w-full p-3 rounded bg-white/10 outline-none"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              className="w-full p-3 rounded bg-white/10 outline-none"
            ></textarea>

            <button className="w-full bg-amber-400 text-black py-3 rounded-full hover:scale-105 transition">
              Send via WhatsApp
            </button>
          </motion.form>

          {/* INFO + MAP */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >

            {/* 🔥 PERSONAL TOUCH BOX */}
            <div className="glass p-6 rounded-2xl space-y-4">

              <h2 className="text-lg font-semibold text-amber-400">
                Talk to Our Expert
              </h2>

              <p className="text-gray-300 text-sm">
                Hi 👋, I’m <span className="text-white font-semibold">MD Fajal</span>,  
                your personal spa consultant. I’ll help you choose the best service 
                for your needs and ensure a smooth booking experience.
              </p>

              <p className="text-gray-400 text-sm">
                ⏰ Available 24/7 for instant support & booking
              </p>

              {/* Buttons */}
              <div className="flex gap-4 mt-3">

                <button
                  onClick={handleCall}
                  className="bg-blue-500 px-4 py-2 rounded-full hover:scale-105 transition"
                >
                  Call Now
                </button>

                <button
                  onClick={() =>
                    window.open("https://wa.me/919620996689", "_blank")
                  }
                  className="flex items-center gap-2 bg-green-500 px-4 py-2 rounded-full hover:scale-105 transition"
                >
                  <MessageCircle size={18} />
                  WhatsApp
                </button>

              </div>
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps?q=Bhopal&output=embed"
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