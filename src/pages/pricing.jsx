import { motion } from "framer-motion";
import { useSEO, SEO_DATA } from "../utils/seo";
import Container from "../ui/container";
import SectionHeading from "../ui/sectionsheading";
import PricingCard from "../ui/pricingcard";
import Button from "../ui/button";
import pricingData from "../data/pricingdata";
import { Check, X } from "lucide-react";

export default function Pricing() {
  useSEO(SEO_DATA.pricing);

  const comparisonFeatures = [
    { feature: "Social Media Management", starter: true, pro: true, premium: true },
    { feature: "Monthly Campaigns", starter: "1", pro: "3", premium: "Unlimited" },
    { feature: "Content Creation", starter: false, pro: true, premium: true },
    { feature: "Paid Ads Management", starter: false, pro: true, premium: true },
    { feature: "Website Development", starter: false, pro: false, premium: true },
    { feature: "Dedicated Account Manager", starter: false, pro: false, premium: true },
    { feature: "Custom Reporting", starter: false, pro: false, premium: true },
    { feature: "24/7 Support", starter: false, pro: true, premium: true },
    { feature: "Strategy Consultation", starter: "Monthly", pro: "Bi-weekly", premium: "Weekly" },
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
              Simple, Transparent <span className="text-indigo-600">Pricing</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              Choose the plan that fits your business goals. All plans include our core services with flexible options.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {pricingData.map((plan, index) => (
              <motion.div
                key={plan.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <PricingCard {...plan} />
              </motion.div>
            ))}
          </div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <p className="text-gray-600 mb-4">
              All plans are flexible and can be customized based on your specific needs.
            </p>
            <Button to="/contact" variant="outline">
              Request Custom Quote
            </Button>
          </motion.div>
        </Container>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-gray-50">
        <Container>
          <SectionHeading
            title="Compare Plans"
            subtitle="Detailed feature comparison to help you choose the right plan"
          />

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-md overflow-hidden">
              <thead className="bg-indigo-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Features</th>
                  <th className="px-6 py-4 text-center font-semibold">Starter</th>
                  <th className="px-6 py-4 text-center font-semibold">Pro</th>
                  <th className="px-6 py-4 text-center font-semibold">Premium</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((item, index) => (
                  <tr
                    key={item.feature}
                    className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                  >
                    <td className="px-6 py-4 font-medium text-gray-900">
                      {item.feature}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {typeof item.starter === "boolean" ? (
                        item.starter ? (
                          <Check className="inline text-green-600" size={20} />
                        ) : (
                          <X className="inline text-red-400" size={20} />
                        )
                      ) : (
                        <span className="text-gray-700">{item.starter}</span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {typeof item.pro === "boolean" ? (
                        item.pro ? (
                          <Check className="inline text-green-600" size={20} />
                        ) : (
                          <X className="inline text-red-400" size={20} />
                        )
                      ) : (
                        <span className="text-gray-700">{item.pro}</span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {typeof item.premium === "boolean" ? (
                        item.premium ? (
                          <Check className="inline text-green-600" size={20} />
                        ) : (
                          <X className="inline text-red-400" size={20} />
                        )
                      ) : (
                        <span className="text-gray-700">{item.premium}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <Container size="md">
          <SectionHeading title="Pricing FAQs" />
          <div className="space-y-6">
            {[
              {
                q: "Can I switch plans later?",
                a: "Yes! You can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.",
              },
              {
                q: "Do you offer refunds?",
                a: "We offer a 30-day money-back guarantee if you're not satisfied with our services.",
              },
              {
                q: "Are there any setup fees?",
                a: "No setup fees! The price you see is what you pay monthly.",
              },
              {
                q: "Can I cancel anytime?",
                a: "Yes, you can cancel your subscription at any time with no penalties.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 p-6 rounded-lg"
              >
                <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
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
              Still Have Questions?
            </h2>
            <p className="text-lg mb-8">
              Book a free consultation and we'll help you choose the perfect plan for your business
            </p>
            <Button variant="secondary" to="/contact" size="lg">
              Schedule Free Consultation
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}
