import { motion } from "framer-motion";

export default function CaseStudyCard({ client, challenge, solution, result, image }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="bg-white shadow-md rounded-xl overflow-hidden flex flex-col"
    >
      {image && (
        <img src={image} alt={client} className="w-full h-48 object-cover" />
      )}
      <div className="p-6 flex flex-col gap-2">
        <h3 className="text-xl font-semibold text-gray-900">{client}</h3>
        <p className="text-gray-600"><strong>Challenge:</strong> {challenge}</p>
        <p className="text-gray-600"><strong>Solution:</strong> {solution}</p>
        <p className="text-indigo-600 font-bold"><strong>Result:</strong> {result}</p>
      </div>
    </motion.div>
  );
}
