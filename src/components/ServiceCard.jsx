import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const ServiceCard = ({ item }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      onClick={() => navigate(`/service/${item.id}`)}
      whileHover={{ scale: 1.05 }}
      className="cursor-pointer rounded-2xl overflow-hidden glass"
    >
      <img src={item.image} className="h-56 w-full object-cover" />

      <div className="p-4">
        <h2 className="text-lg font-bold">{item.name}</h2>
        <p className="text-amber-400">₹{item.price}</p>
      </div>
    </motion.div>
  );
};

export default ServiceCard;