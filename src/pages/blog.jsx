import { motion } from "framer-motion";
import { useSEO, SEO_DATA } from "../utils/seo";
import Container from "../ui/container";
import SectionHeading from "../ui/sectionsheading";
import { Calendar, User, ArrowRight, Search } from "lucide-react";
import { useState } from "react";

// Sample blog data
const blogPosts = [
  {
    id: 1,
    title: "10 Social Media Marketing Trends for 2024",
    excerpt: "Stay ahead of the curve with these emerging social media marketing trends that will dominate in 2024.",
    author: "Sarah Johnson",
    date: "Jan 15, 2024",
    category: "Social Media",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "How to Optimize Your Google Ads for Maximum ROI",
    excerpt: "Learn proven strategies to reduce ad spend while increasing conversions with Google Ads optimization.",
    author: "Michael Chen",
    date: "Jan 12, 2024",
    category: "Paid Ads",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    readTime: "7 min read",
  },
  {
    id: 3,
    title: "Content Creation Best Practices for 2024",
    excerpt: "Discover the latest content creation techniques that drive engagement and conversions.",
    author: "Emily Rodriguez",
    date: "Jan 10, 2024",
    category: "Content",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
    readTime: "6 min read",
  },
  {
    id: 4,
    title: "Building a Strong Brand Identity in the Digital Age",
    excerpt: "Essential steps to create a memorable brand that resonates with your target audience.",
    author: "David Park",
    date: "Jan 8, 2024",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop",
    readTime: "8 min read",
  },
  {
    id: 5,
    title: "Meta Ads vs Google Ads: Which is Right for Your Business?",
    excerpt: "A comprehensive comparison to help you decide where to invest your advertising budget.",
    author: "Sarah Johnson",
    date: "Jan 5, 2024",
    category: "Paid Ads",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    readTime: "10 min read",
  },
  {
    id: 6,
    title: "The Ultimate Guide to Instagram Reels for Business",
    excerpt: "Master Instagram Reels and boost your brand's visibility with these expert tips.",
    author: "Emily Rodriguez",
    date: "Jan 3, 2024",
    category: "Social Media",
    image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&h=600&fit=crop",
    readTime: "6 min read",
  },
];

const categories = ["All", "Social Media", "Paid Ads", "Content", "Branding"];

export default function Blog() {
  useSEO(SEO_DATA.blog);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
              Marketing <span className="text-indigo-600">Insights</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              Expert tips, strategies, and insights to help you grow your business
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b">
        <Container>
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category
                    ? "bg-indigo-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </Container>
      </section>

      {/* Blog Grid */}
      <section className="py-20 bg-gray-50">
        <Container>
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No articles found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow group cursor-pointer"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-indigo-600 text-white text-xs px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        {post.date}
                      </span>
                      <span>{post.readTime}</span>
                    </div>

                    <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                      {post.title}
                    </h3>

                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <User size={16} />
                        <span>{post.author}</span>
                      </div>
                      <button className="text-indigo-600 font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                        Read More <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          )}

          {/* Pagination (placeholder) */}
          {filteredPosts.length > 0 && (
            <div className="mt-12 flex justify-center gap-2">
              {[1, 2, 3].map((page) => (
                <button
                  key={page}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    page === 1
                      ? "bg-indigo-600 text-white"
                      : "bg-white text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>
          )}
        </Container>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-indigo-600 text-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-lg mb-8">
              Get the latest marketing tips and insights delivered to your inbox weekly
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="px-8 py-4 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-gray-100 transition">
                Subscribe
              </button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
