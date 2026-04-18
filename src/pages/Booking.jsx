import { useState } from "react";
import { motion } from "framer-motion";

const Booking = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    date: "",
    time: "",
  });

  const services = [
    "Full Body Spa",
    "Hair Cut",
    "Facial",
    "Hair Coloring",
    "Makeup",
  ];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `Hello, my name is ${form.name}.
I want to book ${form.service} on ${form.date} at ${form.time}.
My contact number is ${form.phone}.`;

    window.open(
      `https://wa.me/919620996689?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center text-white px-4 overflow-hidden">

      {/* Background */}
      <img
        src="https://images.unsplash.com/photo-1552693673-1bf958298935"
        className="absolute w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/80"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 glass p-8 rounded-2xl w-full max-w-lg"
      >

        {/* Heading */}
        <h1 className="text-3xl font-bold text-center mb-2">
          Book Your Appointment
        </h1>

        <p className="text-gray-400 text-center text-sm mb-6">
          Fill your details and confirm your booking instantly on WhatsApp 💬  
          Our team is available 24/7 to assist you.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            onChange={handleChange}
            className="input"
          />

          {/* Phone */}
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            required
            onChange={handleChange}
            className="input"
          />

          {/* Service */}
          <select
            name="service"
            required
            onChange={handleChange}
            className="input"
          >
            <option value="">Select Service</option>
            {services.map((s, i) => (
              <option key={i}>{s}</option>
            ))}
          </select>

          {/* Date */}
          <input
            type="date"
            name="date"
            required
            onChange={handleChange}
            className="input"
          />

          {/* Time */}
          <input
            type="time"
            name="time"
            required
            onChange={handleChange}
            className="input"
          />

          {/* Button */}
          <button
            type="submit"
            className="bg-amber-400 text-black py-3 rounded-full font-semibold hover:scale-105 transition"
          >
            Confirm Booking
          </button>

        </form>
      </motion.div>
    </section>
  );
};

export default Booking;