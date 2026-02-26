import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "../componenet/layout/mainlayout";
import ScrollToTop from "../ui/scrolltotop";
import Home from "../pages/home";
import About from "../pages/about";
import Services from "../pages/services";
import CaseStudies from "../pages/casestudies";
import Pricing from "../pages/pricing";
import Blog from "../pages/blog";
import Contact from "../pages/contact";

export default function AppRoutes() {
  return (
    <Router>
      <ScrollToTop />
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}
