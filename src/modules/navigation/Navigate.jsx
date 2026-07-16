// Navigate.jsx
import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Seo } from "../../shared";

// Components
import {
  Home,
  Contact,
  Prices,
  Projects,
  NotFound,
  ServicesPage,
  WebDevelopment,
  UiUxDesign,
  Branding,
  Company,
  ProductSupport,
} from "../../pages";

const Navigate = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Seo />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/prices" element={<Prices />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/services/web-development" element={<WebDevelopment />} />
      <Route path="/services/ui-ux-design" element={<UiUxDesign />} />
      <Route path="/services/branding" element={<Branding />} />
      <Route path="/company" element={<Company />} />
      <Route path="/product-support" element={<ProductSupport />} />

      <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default Navigate;
