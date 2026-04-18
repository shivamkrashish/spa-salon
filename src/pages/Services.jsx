import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { services } from "../data/services";
import ServiceCard from "../components/ServiceCard";

const categories = ["All", "Spa", "Hair", "Skin", "Makeup", "Nails"];
const genders = ["All", "Male", "Female"];

const Services = () => {
  const [selected, setSelected] = useState("All");
  const [gender, setGender] = useState("All");

  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  const [showDropdown, setShowDropdown] = useState(false);

  // ⏱️ Debounce (smooth search)
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search.trim().toLowerCase());
    }, 300);

    return () => clearTimeout(timer);
  }, [search]);

  // 🔥 REAL FILTER (OPTIMIZED)
  const filteredServices = useMemo(() => {
    return services.filter((item) => {
      const matchCategory =
        selected === "All" || item.category === selected;

      const matchGender =
        gender === "All" || item.gender === gender;

      const matchSearch =
        item.name.toLowerCase().includes(debouncedSearch) ||
        item.category.toLowerCase().includes(debouncedSearch) ||
        item.description.toLowerCase().includes(debouncedSearch);

      return matchCategory && matchGender && matchSearch;
    });
  }, [selected, gender, debouncedSearch]);

  // 🔍 Suggestions (Netflix style)
  const suggestions = useMemo(() => {
    if (!debouncedSearch) return [];

    return services
      .filter((item) =>
        item.name.toLowerCase().includes(debouncedSearch)
      )
      .slice(0, 6);
  }, [debouncedSearch]);

  // ✨ Highlight text
  const highlight = (text) => {
    if (!debouncedSearch) return text;

    const regex = new RegExp(`(${debouncedSearch})`, "gi");
    return text.split(regex).map((part, i) =>
      part.toLowerCase() === debouncedSearch ? (
        <span key={i} className="text-pink-400 font-bold">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <section className="relative min-h-screen text-white overflow-hidden">

      {/* BG */}
      <img
        src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9"
        className="absolute inset-0 w-full h-full object-cover"
        alt="bg"
      />
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

      <div className="relative z-10 px-4 md:px-12 py-20 max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <h1 className="text-4xl md:text-6xl font-bold">
            Our Services
          </h1>
          <p className="text-gray-300 mt-3">
             Relax • Rejuvenate • Glow — Premium Spa Experience ✨
          </p>
        </motion.div>

        {/* SEARCH BAR */}
        <div className="relative flex justify-center mb-6">

          <input
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setShowDropdown(true);
            }}
            onFocus={() => setShowDropdown(true)}
            placeholder="Search services..."
            className="w-full md:w-1/2 px-5 py-3 rounded-full 
            bg-white/10 border border-white/20 backdrop-blur-lg outline-none"
          />

          {/* DROPDOWN */}
          {showDropdown && search && (
            <div className="absolute top-14 w-full md:w-1/2 bg-black/90 border border-white/10 rounded-xl z-50 max-h-60 overflow-auto">

              {suggestions.length > 0 ? (
                suggestions.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => {
                      setSearch(item.name);
                      setShowDropdown(false);
                    }}
                    className="p-3 hover:bg-white/10 cursor-pointer"
                  >
                    🔍 {highlight(item.name)}
                  </div>
                ))
              ) : (
                <p className="p-3 text-gray-400">No results found</p>
              )}

            </div>
          )}
        </div>

        {/* FILTERS */}
        <div className="flex justify-center gap-3 mb-6 flex-wrap">

          {genders.map((g) => (
            <button
              key={g}
              onClick={() => setGender(g)}
              className={`px-4 py-2 rounded-full ${
                gender === g
                  ? "bg-pink-500"
                  : "bg-white/10 border border-white/20"
              }`}
            >
              {g}
            </button>
          ))}

        </div>

        <div className="flex justify-center gap-3 mb-10 flex-wrap">

          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setSelected(c)}
              className={`px-5 py-2 rounded-full ${
                selected === c
                  ? "bg-amber-400 text-black"
                  : "bg-white/10 border border-white/20"
              }`}
            >
              {c}
            </button>
          ))}

        </div>

        {/* GRID */}
        <motion.div layout className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">

          {filteredServices.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <ServiceCard item={item} />
            </motion.div>
          ))}

        </motion.div>

        {/* EMPTY */}
        {filteredServices.length === 0 && (
          <p className="text-center text-gray-400 mt-10">
            No services found 😢
          </p>
        )}

      </div>
    </section>
  );
};

export default Services;