import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

/**
 * Service Card Component
 * @param {ReactNode} icon - Icon component
 * @param {string} title - Service title
 * @param {string} description - Service description
 * @param {string} link - Optional link to service detail
 */
export default function ServiceCard({ icon, title, description, link }) {
  const CardContent = () => (
    <>
      <div className="mb-4 text-indigo-600 flex items-center justify-center w-16 h-16 bg-indigo-50 rounded-lg">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4 flex-grow">{description}</p>
      {link && (
        <div className="flex items-center text-indigo-600 font-medium group-hover:gap-2 transition-all">
          Learn More <ArrowRight size={18} className="ml-1" />
        </div>
      )}
    </>
  );

  const cardClasses = `
    group bg-white rounded-xl p-6 shadow-md hover:shadow-xl 
    transition-all duration-300 flex flex-col
    border border-gray-100 hover:border-indigo-200
  `;

  if (link) {
    return (
      <Link to={link}>
        <motion.div
          whileHover={{ y: -8, scale: 1.02 }}
          transition={{ duration: 0.3 }}
          className={cardClasses}
        >
          <CardContent />
        </motion.div>
      </Link>
    );
  }

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className={cardClasses}
    >
      <CardContent />
    </motion.div>
  );
}
