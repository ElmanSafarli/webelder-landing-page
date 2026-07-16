import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
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
      <PriceMain>
        <header className="pricing-hero">
          <span>Simple, transparent pricing</span>
          <h1>Choose the right foundation for your next website.</h1>
          <p>
            Clear packages for projects of different scope. Every plan can be
            adjusted after we learn more about your goals and requirements.
          </p>
        </header>
        {isMobile ? <MobilePlans /> : <Plans />}
        <div className="pricing-note">
          <div>
            <strong>Need something different?</strong>
            <p>We also estimate custom products, integrations and redesigns.</p>
          </div>
          <Link to="/contact">Request a custom estimate →</Link>
        </div>
      </PriceMain>
      <Footer />
    </>
  );
};

const PriceMain = styled.main`
  width: min(1120px, calc(100% - 40px));
  margin: 0 auto;
  padding: 88px 0 112px;

  .pricing-hero {
    max-width: 780px;
    margin-bottom: 64px;

    > span {
      display: block;
      margin-bottom: 16px;
      color: var(--accent);
      font-size: 13px;
      font-weight: 700;
      text-transform: uppercase;
    }

    h1 {
      margin-bottom: 20px;
      font-size: 52px;
      font-weight: 600;
      line-height: 1.08;
    }

    p {
      max-width: 680px;
      color: #606060;
      font-size: 18px;
      line-height: 1.6;
    }
  }

  .pricing-note {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 32px;
    margin-top: 36px;
    padding: 28px 30px;
    background: #f5f5f5;
    border-radius: 8px;

    strong { display: block; margin-bottom: 5px; font-size: 17px; }
    p { color: #666; font-size: 14px; }
    a { flex: 0 0 auto; color: var(--black); font-size: 14px; font-weight: 600; }
  }

  @media (max-width: 768px) {
    width: min(100% - 32px, 1120px);
    padding: 64px 0 80px;
    .pricing-hero { margin-bottom: 40px; }
    .pricing-hero h1 { font-size: 40px; }
    .pricing-note { align-items: flex-start; flex-direction: column; }
  }

  @media (max-width: 480px) {
    .pricing-hero h1 { font-size: 34px; }
    .pricing-hero p { font-size: 16px; }
    .pricing-note { padding: 24px 20px; }
  }
`;

export default Prices;
