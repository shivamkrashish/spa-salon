import { useParams } from "react-router-dom";
import { services } from "../data/services";
import { motion } from "framer-motion";

const ServiceDetail = () => {
  const { id } = useParams();

  const service = services.find((item) => item.id === parseInt(id));

  const handleBooking = () => {
    const msg = `Hello, I want to book ${service.name}.`;
    window.open(
      `https://wa.me/919620996689?text=${encodeURIComponent(msg)}`,
      "_blank"
    );
  };

  if (!service) return <h1 className="text-white">Service Not Found</h1>;

  return (
    <section className="relative min-h-screen text-white overflow-hidden">

      {/* 🔥 Background Image */}
      <img
        src={service.image}
        alt={service.name}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* 🔥 Dark Overlay */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>

      {/* Content */}
      <div className="relative z-10 px-4 md:px-12 py-24 max-w-6xl mx-auto">

        {/* 🔥 Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass rounded-2xl p-5 md:p-10"
        >

          {/* Image */}
          <img
            src={service.image}
            alt={service.name}
            className="w-full h-56 md:h-[350px] object-cover rounded-xl"
          />

          {/* Info */}
          <div className="mt-6">

            <h1 className="text-2xl md:text-5xl font-bold">
              {service.name}
            </h1>

            <p className="text-amber-400 text-lg mt-2">
              ₹{service.price}
            </p>

            <p className="text-gray-300 mt-4 text-sm md:text-base">
              {service.description}
            </p>

            {/* Button */}
            <button
              onClick={handleBooking}
              className="mt-6 px-6 py-3 bg-amber-400 text-black rounded-full 
              hover:scale-105 transition w-full md:w-auto"
            >
              Book Now
            </button>

          </div>
        </motion.div>

        {/* ⭐ Feedback Section */}
        <div className="mt-12">

          <h2 className="text-xl md:text-3xl font-bold mb-6 text-center">
            Customer Feedback
          </h2>

          <div className="grid sm:grid-cols-2 gap-5">

            {service.feedback.map((f, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="glass p-5 rounded-xl"
              >
                <h3 className="font-semibold text-lg">
                  {f.name}
                </h3>

                <p className="text-gray-300 mt-2 text-sm">
                  {f.review}
                </p>

                <p className="text-amber-400 mt-2">
                  ⭐ {f.rating}
                </p>
              </motion.div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
};

export default ServiceDetail;