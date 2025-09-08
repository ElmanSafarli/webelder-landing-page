import React, { useState, useEffect } from "react";
import { Navbar, Footer, Plans, MobilePlans } from "../../widgets";

const Prices = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Navbar />
      {isMobile ? <MobilePlans /> : <Plans />}
      <Footer />
    </>
  );
};

export default Prices;
