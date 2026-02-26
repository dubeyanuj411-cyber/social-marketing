import { motion } from "framer-motion";
import { useSEO, SEO_DATA } from "../utils/seo";
import Container from "../ui/container";
import SectionHeading from "../ui/sectionsheading";
import Button from "../ui/button";
import { Target, Users, Award, TrendingUp } from "lucide-react";

export default function About() {
  useSEO(SEO_DATA.about);

  const values = [
    {
      icon: <Target size={32} />,
      title: "Results-Driven",
      description: "We focus on measurable outcomes that directly impact your bottom line.",
    },
    {
      icon: <Users size={32} />,
      title: "Client-Centric",
      description: "Your success is our success. We treat your business like our own.",
    },
    {
      icon: <Award size={32} />,
      title: "Excellence",
      description: "We maintain the highest standards in everything we do.",
    },
    {
      icon: <TrendingUp size={32} />,
      title: "Innovation",
      description: "We stay ahead of trends to keep your brand competitive.",
    },
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      bio: "10+ years in digital marketing with a passion for helping businesses grow.",
    },
    {
      name: "Michael Chen",
      role: "Head of Paid Ads",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      bio: "Google & Meta certified with $10M+ in ad spend managed.",
    },
    {
      name: "Emily Rodriguez",
      role: "Content Director",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      bio: "Award-winning content creator specializing in brand storytelling.",
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
              About <span className="text-indigo-600">Vejramax</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              We're a team of passionate marketers dedicated to helping businesses scale through data-driven strategies and creative excellence.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Founded in 2018, Vejramax started with a simple mission: help businesses achieve sustainable growth through innovative digital marketing strategies.
                </p>
                <p>
                  What began as a small team of three has grown into a full-service agency serving 150+ clients worldwide. We've managed over $5M in ad spend and helped our clients achieve an average ROI increase of 250%.
                </p>
                <p>
                  Today, we're proud to be a trusted partner for startups, e-commerce brands, and local businesses looking to scale their online presence and drive real results.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                alt="Team collaboration"
                className="rounded-xl shadow-lg"
              />
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <Container>
          <SectionHeading
            title="Our Core Values"
            subtitle="The principles that guide everything we do"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 text-indigo-600 rounded-full mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <Container>
          <SectionHeading
            title="Meet Our Team"
            subtitle="The experts behind your success"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-48 h-48 rounded-full object-cover mx-auto mb-4 shadow-lg"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-indigo-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-indigo-600 text-white">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "150+", label: "Happy Clients" },
              { value: "250%", label: "Avg ROI Increase" },
              { value: "$5M+", label: "Ad Spend Managed" },
              { value: "10+", label: "Years Experience" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</h3>
                <p className="text-lg">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Work Together?
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Let's discuss how we can help your business achieve its growth goals
            </p>
            <Button to="/contact" size="lg">
              Book Free Strategy Call
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}
