import { motion } from "framer-motion";
import { useSEO, SEO_DATA } from "../utils/seo";
import Container from "../ui/container";
import SectionHeading from "../ui/sectionsheading";
import CaseStudyCard from "../ui/casestudycard";
import Button from "../ui/button";
import caseStudiesData from "../data/casestudiesdata";
import { TrendingUp, Users, DollarSign } from "lucide-react";

export default function CaseStudies() {
  useSEO(SEO_DATA.caseStudies);

  const stats = [
    {
      icon: <TrendingUp size={32} />,
      value: "250%",
      label: "Average ROI Increase",
    },
    {
      icon: <Users size={32} />,
      value: "150+",
      label: "Successful Campaigns",
    },
    {
      icon: <DollarSign size={32} />,
      value: "$5M+",
      label: "Ad Spend Managed",
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-indigo-50 to-white py-20">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Success <span className="text-indigo-600">Stories</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              Real results from brands we've helped scale through data-driven marketing strategies
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 bg-indigo-50 rounded-xl"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-600 text-white rounded-full mb-4">
                  {stat.icon}
                </div>
                <h3 className="text-4xl font-bold text-indigo-600 mb-2">{stat.value}</h3>
                <p className="text-gray-700">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 bg-gray-50">
        <Container>
          <SectionHeading
            title="Featured Case Studies"
            subtitle="See how we've helped businesses achieve remarkable growth"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudiesData.map((caseStudy, index) => (
              <motion.div
                key={caseStudy.client}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <CaseStudyCard {...caseStudy} />
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-indigo-50 p-8 md:p-12 rounded-2xl"
            >
              <p className="text-xl md:text-2xl text-gray-800 italic mb-6">
                "Working with Vejramax was a game-changer for our business. They didn't just run campaigns—they became true partners in our growth journey."
              </p>
              <div className="flex items-center justify-center gap-4">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
                  alt="CEO"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="text-left">
                  <p className="font-semibold text-gray-900">David Chen</p>
                  <p className="text-gray-600">CEO, TechStartup Inc.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-indigo-600 text-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Be Our Next Success Story?
            </h2>
            <p className="text-lg mb-8">
              Let's create a custom strategy to help your business achieve similar results
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" to="/contact" size="lg">
                Book Free Strategy Call
              </Button>
              <Button variant="outline" to="/services" size="lg" className="bg-white text-indigo-600 hover:bg-gray-100">
                View Our Services
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
