import { motion } from "framer-motion";
// Using placeholder image - replace with your actual hero image
const heroImage = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-b from-indigo-50 to-white pt-24">
      <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center md:justify-between">
        
        {/* Text Content */}
        <div className="md:w-1/2 space-y-6">
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight"
          >
            Scale Your Business With <span className="text-indigo-600">Vejramax</span>
          </motion.h1>

          <motion.p
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-700"
          >
            We help startups, e-commerce brands, and local businesses grow through results-driven social media marketing and web development.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="/contact"
              className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 transition w-full sm:w-auto text-center"
            >
              Book Free Strategy Call
            </a>
            <a
              href="/case-studies"
              className="px-6 py-3 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition w-full sm:w-auto text-center"
            >
              View Case Studies
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-sm text-gray-500 mt-4"
          >
            Trusted by 100+ brands globally
          </motion.p>
        </div>

        {/* Hero Image */}
        <div className="md:w-1/2 mb-10 md:mb-0 flex justify-center">
          <motion.img
            src={heroImage}
            alt="Marketing Dashboard Illustration"
            className="w-full max-w-lg"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </div>
      </div>
    </section>
  );
}
