import PricingCard from "../ui/pricingcard";
import pricingData from "../data/pricingdata";

export default function PricingPreview() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Pricing Plans</h2>
        <p className="text-gray-600 mb-12">
          Choose the plan that fits your business growth goals
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingData.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
}
