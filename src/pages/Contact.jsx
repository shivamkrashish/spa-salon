import { Send, Phone, MapPin, Clock } from "lucide-react";
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

  return (
    <section className="min-h-screen bg-[#0B0F19] text-white px-4 sm:px-6 md:px-16 py-16 md:py-20">

      <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-center">

        {/* LEFT SIDE */}
        <div className="bg-[#111827] rounded-3xl p-6 md:p-8 space-y-6 shadow-xl border border-white/10">

          <h1 className="text-xl md:text-2xl font-bold tracking-wide">
            SPA & <span className="text-amber-400">SALON.</span>
          </h1>

          {/* CALL */}
          <div className="flex items-center gap-4">
            <div className="bg-gray-800 p-3 rounded-xl">
              <Phone className="text-yellow-400" size={18} />
            </div>
            <div>
              <p className="text-xs text-gray-400">CALL US</p>
              <p className="font-semibold text-sm md:text-base">+91 96209 96689</p>
            </div>
          </div>

          {/* WHATSAPP */}
          <div className="flex items-center gap-4">
            <div className="bg-gray-800 p-3 rounded-xl">
              <FaWhatsapp className="text-green-400" size={18} />
            </div>
            <div>
              <p className="text-xs text-gray-400">WHATSAPP</p>
              <p className="font-semibold text-sm md:text-base">+91 96209 96689</p>
            </div>
          </div>

          {/* LOCATION */}
          <div className="flex items-start gap-4">
            <div className="bg-gray-800 p-3 rounded-xl">
              <MapPin className="text-red-400" size={18} />
            </div>
            <div>
              <p className="text-xs text-gray-400">LOCATION</p>
              <p className="text-sm leading-relaxed">
                Shikaripalya, Phase 1, Electronic City, Bangalore
              </p>
            </div>
          </div>

          {/* WORKING HOURS */}
          <div className="flex items-center gap-4">
            <div className="bg-gray-800 p-3 rounded-xl">
              <Clock className="text-amber-400" size={18} />
            </div>
            <div>
              <p className="text-xs text-gray-400">WORKING HOURS</p>
              <p className="text-sm">09:00 AM - 09:00 PM (Daily)</p>
            </div>
          </div>

          {/* SOCIAL */}
          <div className="flex gap-4 pt-4">

            {/* Instagram */}
            <a
              href="#"
              className="p-2 border border-gray-700 rounded-full 
              hover:border-pink-500 hover:text-pink-500 
              active:scale-90 transition"
            >
              <FaInstagram />
            </a>

            {/* Facebook */}
            <a
              href="#"
              className="p-2 border border-gray-700 rounded-full 
              hover:border-blue-500 hover:text-blue-500 
              active:scale-90 transition"
            >
              <FaFacebook />
            </a>

          </div>

        </div>

        {/* RIGHT SIDE FORM */}
        <div className="bg-[#F5F5F5] text-black rounded-3xl p-6 md:p-8 shadow-xl">

          <h2 className="text-xl md:text-2xl font-bold mb-2">
            Send a <span className="text-amber-500">Message.</span>
          </h2>

          <p className="text-gray-500 text-sm mb-6">
            Have questions? Fill out the form and we’ll contact you.
          </p>

          <form onSubmit={handleWhatsApp} className="space-y-4">

            <div className="grid md:grid-cols-2 gap-4">
              <input
                name="name"
                placeholder="Your Name"
                className="p-3 rounded-xl bg-gray-200 outline-none 
                focus:ring-2 focus:ring-amber-400"
                required
              />

              <input
                name="phone"
                placeholder="+91 00000 00000"
                className="p-3 rounded-xl bg-gray-200 outline-none 
                focus:ring-2 focus:ring-amber-400"
                required
              />
            </div>

            <input
              placeholder="Service Preference"
              className="w-full p-3 rounded-xl bg-gray-200 outline-none 
              focus:ring-2 focus:ring-amber-400"
            />

            <textarea
              name="message"
              placeholder="How can we help you?"
              rows="4"
              className="w-full p-3 rounded-xl bg-gray-200 outline-none 
              focus:ring-2 focus:ring-amber-400"
            ></textarea>

            {/* BUTTON */}
            <button
              className="w-full bg-amber-500 text-white py-3 rounded-full 
              font-semibold flex items-center justify-center gap-2 
              transition-all duration-300 shadow-lg

              hover:bg-black hover:scale-105 hover:shadow-amber-500/40
              active:scale-95 active:bg-black
              focus:outline-none focus:ring-2 focus:ring-amber-400

              group"
            >
              Send Inquiry
              <Send
                size={18}
                className="transition-transform duration-300 
                group-hover:translate-x-1 group-active:translate-x-1"
              />
            </button>

          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;