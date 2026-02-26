import { motion } from "framer-motion";

export default function PricingCard({ title, price, features, popular }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className={`bg-white shadow-md rounded-xl p-6 flex flex-col items-start transition-all ${
        popular ? "border-2 border-indigo-600" : ""
      }`}
    >
      {popular && (
        <span className="bg-indigo-600 text-white text-sm px-3 py-1 rounded-full mb-4">
          Most Popular
        </span>
      )}
      <h3 className="text-2xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-3xl font-bold text-indigo-600 mb-4">${price}</p>
      <ul className="text-gray-600 mb-6 space-y-2">
        {features.map((feature, index) => (
          <li key={index}>✔ {feature}</li>
        ))}
      </ul>
      <a
        href="/contact"
        className="mt-auto px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 transition w-full text-center"
      >
        Book Free Strategy Call
      </a>
    </motion.div>
  );
}
