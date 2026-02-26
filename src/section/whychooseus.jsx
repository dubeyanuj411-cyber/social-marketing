import { motion } from "framer-motion";
// Using placeholder image - replace with your actual image
const whyImage = "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop";

export default function WhyChooseUs() {
  const stats = [
    { label: "Clients Served", value: 150 },
    { label: "Avg ROI Increase", value: 300 },
    { label: "Ads Managed ($M)", value: 5 },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        
        {/* Image */}
        <div className="md:w-1/2 flex justify-center">
          <motion.img
            src={whyImage}
            alt="Why Choose Us Illustration"
            className="w-full max-w-md"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          />
        </div>

        {/* Text Content */}
        <div className="md:w-1/2 space-y-6">
          <motion.h2
            className="text-4xl font-bold text-gray-900"
            initial={{ y: -30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Why Choose Vejramax
          </motion.h2>

          <motion.p
            className="text-gray-700 text-lg"
            initial={{ y: -10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We help startups, e-commerce brands, and local businesses achieve growth through data-driven strategies, creative content, and targeted campaigns.
          </motion.p>

          {/* Key Benefits */}
          <motion.ul
            className="space-y-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <li className="flex items-center gap-2">
              <span className="text-indigo-600 font-bold">✔</span> Results-driven campaigns
            </li>
            <li className="flex items-center gap-2">
              <span className="text-indigo-600 font-bold">✔</span> ROI-focused strategies
            </li>
            <li className="flex items-center gap-2">
              <span className="text-indigo-600 font-bold">✔</span> Transparent reporting
            </li>
            <li className="flex items-center gap-2">
              <span className="text-indigo-600 font-bold">✔</span> Dedicated account managers
            </li>
          </motion.ul>

          {/* Stats Counters */}
          <div className="flex gap-8 mt-6">
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <p className="text-3xl font-bold text-indigo-600">{stat.value}+</p>
                <p className="text-gray-700">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Optional CTA */}
          <motion.a
            href="/contact"
            className="mt-6 inline-block px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 transition"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Book Free Strategy Call
          </motion.a>
        </div>
      </div>
    </section>
  );
}
