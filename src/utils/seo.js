import { useEffect } from "react";

// SEO Helper Function
export const updateMetaTags = ({ title, description, keywords, ogImage }) => {
  // Update title
  if (title) {
    document.title = `${title} | Vejramax`;
  }

  // Update or create meta tags
  const updateOrCreateMeta = (name, content, isProperty = false) => {
    if (!content) return;
    
    const attribute = isProperty ? "property" : "name";
    let meta = document.querySelector(`meta[${attribute}="${name}"]`);
    
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute(attribute, name);
      document.head.appendChild(meta);
    }
    
    meta.setAttribute("content", content);
  };

  // Standard meta tags
  updateOrCreateMeta("description", description);
  updateOrCreateMeta("keywords", keywords);

  // Open Graph tags
  updateOrCreateMeta("og:title", title, true);
  updateOrCreateMeta("og:description", description, true);
  updateOrCreateMeta("og:image", ogImage, true);
  updateOrCreateMeta("og:type", "website", true);

  // Twitter Card tags
  updateOrCreateMeta("twitter:card", "summary_large_image");
  updateOrCreateMeta("twitter:title", title);
  updateOrCreateMeta("twitter:description", description);
  updateOrCreateMeta("twitter:image", ogImage);
};

// React Hook for SEO
export const useSEO = ({ title, description, keywords, ogImage }) => {
  useEffect(() => {
    updateMetaTags({ title, description, keywords, ogImage });
  }, [title, description, keywords, ogImage]);
};

// Page-specific SEO data
export const SEO_DATA = {
  home: {
    title: "Home - Social Media Marketing Agency",
    description: "Vejramax helps startups and brands grow with data-driven social media marketing, paid ads, and web development.",
    keywords: "social media marketing, digital marketing agency, paid ads, content creation, branding",
  },
  about: {
    title: "About Us",
    description: "Learn about Vejramax - a team of marketing experts dedicated to helping businesses scale through innovative digital strategies.",
    keywords: "about us, marketing team, digital agency",
  },
  services: {
    title: "Our Services",
    description: "Explore our comprehensive digital marketing services including social media marketing, paid ads, content creation, branding, and web development.",
    keywords: "marketing services, social media management, paid advertising, content creation",
  },
  caseStudies: {
    title: "Case Studies",
    description: "See how we've helped brands achieve 150-300% growth through strategic marketing campaigns and data-driven strategies.",
    keywords: "case studies, success stories, marketing results, ROI",
  },
  pricing: {
    title: "Pricing Plans",
    description: "Flexible pricing plans for businesses of all sizes. Choose from Starter, Pro, or Premium packages tailored to your growth goals.",
    keywords: "pricing, marketing packages, affordable marketing, pricing plans",
  },
  blog: {
    title: "Marketing Blog",
    description: "Expert insights, tips, and strategies for social media marketing, paid advertising, and business growth.",
    keywords: "marketing blog, digital marketing tips, social media strategies",
  },
  contact: {
    title: "Contact Us",
    description: "Get in touch with Vejramax. Book a free strategy call and discover how we can help scale your business.",
    keywords: "contact, free consultation, strategy call, get in touch",
  },
};
