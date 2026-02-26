import { motion } from "framer-motion";

export default function TestimonialCard({ quote, name, company, photo }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center text-center"
    >
      <p className="text-gray-700 italic mb-4">"{quote}"</p>
      <img
        src={photo}
        alt={name}
        className="w-16 h-16 rounded-full object-cover mb-2"
      />
      <h4 className="font-semibold text-gray-900">{name}</h4>
      <p className="text-gray-500 text-sm">{company}</p>
    </motion.div>
  );
}
