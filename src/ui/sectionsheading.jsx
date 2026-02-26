import { motion } from "framer-motion";
import { FADE_IN_UP } from "../utils/constants";

/**
 * Reusable Section Heading Component
 * @param {string} title - Main heading
 * @param {string} subtitle - Subheading/description
 * @param {string} align - left, center, right
 * @param {string} className - Additional classes
 */
export default function SectionHeading({ 
  title, 
  subtitle, 
  align = "center",
  className = "" 
}) {
  const alignments = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      variants={FADE_IN_UP}
      className={`mb-12 ${alignments[align]} ${className}`}
    >
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
