// Brand Constants
export const BRAND = {
  name: "Vejramax",
  tagline: "Scale Your Business with Data-Driven Marketing",
  email: "info@vejramax.com",
  phone: "+1 (234) 567-8900",
  address: "123 Marketing Street, Digital City, DC 12345",
};

// Social Media Links
export const SOCIAL_LINKS = {
  facebook: "https://facebook.com/vejramax",
  instagram: "https://instagram.com/vejramax",
  linkedin: "https://linkedin.com/company/vejramax",
  twitter: "https://twitter.com/vejramax",
};

// Color Palette
export const COLORS = {
  primary: "#4F46E5", // Indigo-600
  primaryHover: "#4338CA", // Indigo-700
  secondary: "#06B6D4", // Cyan-500
  accent: "#F59E0B", // Amber-500
  dark: "#111827", // Gray-900
  light: "#F9FAFB", // Gray-50
};

// Animation Variants
export const FADE_IN_UP = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export const FADE_IN = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const SCALE_IN = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

// Navigation Links
export const NAV_LINKS = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Case Studies", path: "/case-studies" },
  { name: "Pricing", path: "/pricing" },
  { name: "Blog", path: "/blog" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

// API Endpoints (for future use)
export const API_ENDPOINTS = {
  contact: "/api/contact",
  newsletter: "/api/newsletter",
  blog: "/api/blog",
};
