import { motion } from "framer-motion";
import { useSEO, SEO_DATA } from "../utils/seo";
import Container from "../ui/container";
import SectionHeading from "../ui/sectionsheading";
import ServiceCard from "../ui/serviescard";
import Button from "../ui/button";
import servicesData from "../data/serviesdata";
import { CheckCircle, TrendingUp, Users, Zap, Share2, LayoutGrid, PenTool, Globe } from "lucide-react";

// Icon mapping
const iconMap = {
  Social: <Share2 size={32} />,
  Layout: <LayoutGrid size={32} />,
  PenTool: <PenTool size={32} />,
  Globe: <Globe size={32} />,
};

export default function Services() {
  useSEO(SEO_DATA.services);

  const benefits = [
    {
      icon: <TrendingUp size={32} />,
      title: "Proven Results",
      description: "Track record of 150-300% growth for our clients",
    },
    {
      icon: <Users size={32} />,
      title: "Expert Team",
      description: "Certified marketing professionals with 10+ years experience",
    },
    {
      icon: <Zap size={32} />,
      title: "Fast Execution",
      description: "Launch campaigns within 7 days of onboarding",
    },
    {
      icon: <CheckCircle size={32} />,
      title: "Transparent Reporting",
      description: "Monthly detailed reports with actionable insights",
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
              Our <span className="text-indigo-600">Services</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              Comprehensive digital marketing solutions designed to scale your business and maximize ROI
            </p>
            <Button to="/contact" size="lg">
              Book Free Strategy Call
            </Button>
          </motion.div>
        </Container>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <Container>
          <SectionHeading
            title="What We Offer"
            subtitle="End-to-end marketing services tailored to your business goals"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ServiceCard 
                  icon={iconMap[service.iconName]}
                  title={service.title}
                  description={service.description}
                />
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <Container>
          <SectionHeading
            title="Why Choose Our Services"
            subtitle="We deliver measurable results through data-driven strategies"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 text-indigo-600 rounded-full mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-indigo-600 text-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Scale Your Business?
            </h2>
            <p className="text-lg mb-8">
              Let's discuss how our services can help you achieve your growth goals
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" to="/contact" size="lg">
                Get Started Today
              </Button>
              <Button variant="outline" to="/case-studies" size="lg" className="bg-white text-indigo-600 hover:bg-gray-100">
                View Case Studies
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
