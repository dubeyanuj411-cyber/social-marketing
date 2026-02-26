import CaseStudyCard from "../ui/casestudycard";
import caseStudiesData from "../data/casestudiesdata";

export default function CaseStudyPreview() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
          Case Studies
        </h2>
        <p className="text-gray-600 mb-12 text-center">
          See how we’ve helped brands achieve real results
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudiesData.map((caseStudy, index) => (
            <CaseStudyCard
              key={index}
              client={caseStudy.client}
              challenge={caseStudy.challenge}
              solution={caseStudy.solution}
              result={caseStudy.result}
              image={caseStudy.image}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="/case-studies"
            className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 transition"
          >
            View All Case Studies
          </a>
        </div>
      </div>
    </section>
  );
}
