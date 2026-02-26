import ServiceCard from "../ui/serviescard";
import { Share2, LayoutGrid, PenTool, Globe } from "lucide-react";
import servicesData from "../data/serviesdata";

// Icon mapping
const iconMap = {
  Social: <Share2 size={32} />,
  Layout: <LayoutGrid size={32} />,
  PenTool: <PenTool size={32} />,
  Globe: <Globe size={32} />,
};

export default function ServicesPreview() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
          Our Services
        </h2>
        <p className="text-gray-600 mb-12 text-center">
          We help brands grow with these services
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <ServiceCard
              key={service.title}
              icon={iconMap[service.iconName]}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
