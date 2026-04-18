import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  { name: "Priya Sharma", img: "https://i.pravatar.cc/150?img=32", review: "The facial treatment was absolutely luxurious. My skin feels fresh and glowing!", rating: 4.7 },
  { name: "Rohit Verma", img: "https://i.pravatar.cc/150?img=12", review: "Best haircut & grooming experience. The staff is highly professional!", rating: 4.5 },
  { name: "Simran Kaur", img: "https://i.pravatar.cc/150?img=47", review: "Spa massage was heavenly. Perfect relaxation after a stressful week.", rating: 4.8 },
  { name: "Aarav Mehta", img: "https://i.pravatar.cc/150?img=15", review: "Amazing salon ambiance and top-notch service. Truly a premium experience.", rating: 4.6 },
  { name: "Neha Singh", img: "https://i.pravatar.cc/150?img=25", review: "Loved the hair spa treatment. My hair feels so soft and healthy now!", rating: 4.4 },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  const getVisible = () => [
    testimonials[index % testimonials.length],
    testimonials[(index + 1) % testimonials.length],
    testimonials[(index + 2) % testimonials.length],
  ];

  const renderStars = (rating) =>
    [...Array(5)].map((_, i) => (
      <Star
        key={i}
        size={18}
        className={
          rating >= i + 1
            ? "text-yellow-400 fill-yellow-400"
            : rating >= i + 0.5
            ? "text-yellow-300 fill-yellow-300 opacity-80"
            : "text-gray-500"
        }
      />
    ));

  return (
    <section className="relative py-24 px-6 overflow-hidden text-white">

      {/* BACKGROUND FIX */}
      <div className="absolute inset-0 -z-10">
        <img
          src="https://images.unsplash.com/photo-1540555700478-4be289fbecef"
          className="w-full h-full object-cover scale-110"
          alt="spa bg"
        />
        <div className="absolute inset-0 bg-black/60 dark:bg-black/80" />
      </div>

      {/* HEADING */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-center mb-14"
      >
        <h2 className="text-4xl md:text-6xl font-bold">
          Luxury <span className="text-pink-500">Spa Experiences</span>
        </h2>
        <p className="mt-3 text-gray-200">
          Real wellness stories from our premium clients ✨
        </p>
      </motion.div>

      {/* CARDS */}
      <div className="flex justify-center gap-6">
        {getVisible().map((t, i) => (
          <div
            key={i}
            className="w-full md:w-1/3 bg-black/30 dark:bg-white/10 backdrop-blur-xl rounded-3xl p-6 text-center shadow-2xl"
          >
            <img
              src={t.img}
              className="w-20 h-20 rounded-full border-4 border-pink-400 mx-auto mb-4"
              alt={t.name}
            />

            <p className="italic mb-4 text-gray-200">“{t.review}”</p>

            <div className="flex justify-center gap-1 mb-3">
              {renderStars(t.rating)}
            </div>

            <h3 className="text-lg font-semibold text-pink-400">
              {t.name}
            </h3>
          </div>
        ))}
      </div>

      {/* DOTS */}
      <div className="flex justify-center gap-2 mt-10">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition ${
              i === index ? "bg-pink-500 scale-125" : "bg-white/30"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;