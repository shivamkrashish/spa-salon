import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "https://images.unsplash.com/photo-1540555700478-4be289fbecef",
  "https://images.unsplash.com/photo-1515377905703-c4788e51af15",
  "https://images.unsplash.com/photo-1522336572468-97b06e8ef143",
  "https://images.unsplash.com/photo-1507652313519-d4e9174996dd",
  "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388",
  "https://images.unsplash.com/photo-1559599101-f09722fb4948",
];

const Gallery = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const total = images.length;

  // 🎬 AUTO PLAY SLIDER (REAL NETFLIX STYLE)
  useEffect(() => {
    const interval = setInterval(() => {
      if (isPaused) return;
      setIndex((prev) => (prev + 1) % total);
    }, 2500); // ⏱️ speed control (2.5 sec)

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section className="relative py-20 px-6 overflow-hidden text-white">

      {/* 🌄 BACKGROUND */}
      <div className="absolute inset-0 -z-10">
        <img
          src="https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388"
          className="w-full h-full object-cover scale-110"
        />
        <div className="absolute inset-0 bg-black/85 backdrop-blur-sm" />
      </div>

      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-4xl md:text-6xl font-bold">
          Netflix <span className="text-pink-500">Gallery</span>
        </h2>
        <p className="text-gray-400 mt-3">
          Auto sliding cinematic preview
        </p>
      </div>

      {/* 🎬 SLIDER */}
      <div
        className="overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <motion.div
          className="flex gap-6"
          animate={{
            x: `-${index * 370}px`,
          }}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
          }}
        >
          {[...images, ...images].map((img, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.08 }}
              onClick={() => setSelectedImg(img)}
              className="min-w-[300px] md:min-w-[350px] h-[220px] md:h-[260px] rounded-2xl overflow-hidden cursor-pointer border border-white/10 bg-white/5 shadow-lg flex-shrink-0"
            >
              <img
                src={img}
                className="w-full h-full object-cover hover:scale-110 transition duration-700"
                alt="gallery"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* 🔥 LIGHTBOX */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 backdrop-blur-md"
            onClick={() => setSelectedImg(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.img
              src={selectedImg}
              initial={{ scale: 0.6 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.6 }}
              transition={{ duration: 0.4 }}
              className="max-w-5xl w-[90%] max-h-[80vh] rounded-2xl border border-white/20 shadow-2xl"
              alt="preview"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;