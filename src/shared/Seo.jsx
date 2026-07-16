import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const pages = {
  "/": ["Web Development & Digital Design | Webelder", "Webelder creates high-performing websites, user-focused interfaces and distinctive brand identities for modern businesses."],
  "/projects": ["Web Design & Development Portfolio | Webelder", "Explore selected Webelder projects across web development, UI/UX design, business websites and digital product experiences."],
  "/prices": ["Website Development Pricing & Packages | Webelder", "Compare Webelder website development packages, features and starting prices for landing pages, business websites and custom products."],
  "/contact": ["Contact Webelder | Start Your Digital Project", "Contact Webelder to discuss your website, web application, UI/UX design or branding project and receive a tailored recommendation."],
  "/company": ["Company | Webelder Digital Partner", "Learn how Webelder combines clear thinking, thoughtful design and accountable delivery to create useful digital experiences and distinctive brands."],
  "/product-support": ["Product Support & Ongoing Care | Webelder", "Keep your digital product reliable and moving forward with clear priorities, ongoing improvements and dependable support from Webelder."],
  "/services": ["Digital Product, Design & Branding Services | Webelder", "Discover Webelder services for web application development, UI/UX design and brand identity, from initial strategy through launch."],
  "/services/web-development": ["Web Application Development Services | Webelder", "Build a clear, reliable and easy-to-use website or web application with Webelder, shaped around your customers and business goals."],
  "/services/ui-ux-design": ["UI/UX Design & Product Design Services | Webelder", "Webelder creates intuitive digital experiences that help customers find what they need and complete important actions with confidence."],
  "/services/branding": ["Branding, Logo & Visual Identity Design | Webelder", "Create a recognizable brand with Webelder through logo design, visual identity, typography, brand guidelines and marketing assets."],
};

const setMeta = (selector, attributes) => {
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement("meta");
    document.head.appendChild(element);
  }
  Object.entries(attributes).forEach(([key, value]) => element.setAttribute(key, value));
};

const Seo = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const page = pages[pathname];
    const [title, description] = page || ["Page Not Found | Webelder", "The requested page could not be found on Webelder."];
    const canonicalUrl = `${window.location.origin}${pathname}`;
    const imageUrl = `${window.location.origin}/webelder-icon.png`;

    document.title = title;
    setMeta('meta[name="description"]', { name: "description", content: description });
    setMeta('meta[name="robots"]', { name: "robots", content: page ? "index, follow" : "noindex, nofollow" });
    setMeta('meta[property="og:title"]', { property: "og:title", content: title });
    setMeta('meta[property="og:description"]', { property: "og:description", content: description });
    setMeta('meta[property="og:type"]', { property: "og:type", content: "website" });
    setMeta('meta[property="og:site_name"]', { property: "og:site_name", content: "Webelder" });
    setMeta('meta[property="og:url"]', { property: "og:url", content: canonicalUrl });
    setMeta('meta[property="og:image"]', { property: "og:image", content: imageUrl });
    setMeta('meta[property="og:image:alt"]', { property: "og:image:alt", content: "Webelder brand mark" });
    setMeta('meta[name="twitter:card"]', { name: "twitter:card", content: "summary" });
    setMeta('meta[name="twitter:title"]', { name: "twitter:title", content: title });
    setMeta('meta[name="twitter:description"]', { name: "twitter:description", content: description });
    setMeta('meta[name="twitter:image"]', { name: "twitter:image", content: imageUrl });

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;
  }, [pathname]);

  return null;
};

export default Seo;
