import { motion } from "framer-motion";
// Using placeholder image - replace with your actual CTA illustration
const ctaImage = "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop";

export default function CTASection() {
  return (
    <section className="py-20 bg-indigo-600 text-white">
      <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center md:justify-between gap-12">
        
        {/* Text Content */}
        <div className="md:w-1/2 space-y-6">
          <motion.h2
            className="text-4xl md:text-5xl font-bold leading-tight"
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Ready to Grow Your Business with Us?
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-white"
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Book a free strategy call and see how we can help you scale and maximize ROI.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <a
              href="/contact"
              className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-gray-100 transition w-full sm:w-auto text-center"
            >
              Book Free Strategy Call
            </a>
            <a
              href="/services"
              className="px-6 py-3 border border-white text-white rounded-lg hover:bg-white hover:text-indigo-600 transition w-full sm:w-auto text-center"
            >
              Our Services
            </a>
          </motion.div>
        </div>

        {/* Optional Image */}
        <div className="md:w-1/2 flex justify-center">
          <motion.img
            src={ctaImage}
            alt="CTA Illustration"
            className="w-full max-w-md"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </div>
      </div>
    </section>
  );
}
