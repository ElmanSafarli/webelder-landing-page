import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { LogoName } from "../shared";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <StyledWrapper>
      <footer>
        <div className="footer-cta">
          <div>
            <span className="eyebrow">Have a project in mind?</span>
            <h2>Let&apos;s create something useful together.</h2>
          </div>
          <Link className="cta-link" to="/contact">
            Start a conversation <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="footer-grid">
          <div className="company">
            <LogoName link="/" width="156" height="30" fill="white" />
            <p>
              We design and build focused digital products, thoughtful
              interfaces and visual identities for modern businesses.
            </p>
            <span className="availability">
              <i aria-hidden="true" /> Available for selected projects
            </span>
          </div>

          <nav className="footer-column" aria-label="Quick links">
            <h3>Quick links</h3>
            <Link to="/">Home</Link>
            <Link to="/company">Company</Link>
            <Link to="/product-support">Product Support</Link>
            <Link to="/services">Services</Link>
            <Link to="/projects">Portfolio</Link>
            <Link to="/prices">Pricing</Link>
            <Link to="/contact">Contact</Link>
          </nav>

          <nav className="footer-column services" aria-label="Services">
            <h3>Services</h3>
            <Link to="/services/web-development">Web Development</Link>
            <Link to="/services/ui-ux-design">UI/UX Design</Link>
            <Link to="/services/branding">Branding & Logo Design</Link>
          </nav>

          <div className="footer-column contact">
            <h3>Contact</h3>
            <div>
              <span>Project inquiries</span>
              <Link to="/contact">Contact our team →</Link>
            </div>
            <div>
              <span>Location</span>
              <p>Azerbaijan</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {currentYear} Webelder. All rights reserved.</p>
          <div>
            <Link to="/services">Digital services</Link>
            <Link to="/projects">Selected work</Link>
          </div>
        </div>
      </footer>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.section`
  color: var(--white);
  background: #0b0b0c;

  footer {
    width: min(1120px, calc(100% - 40px));
    margin: 0 auto;
    padding: 88px 0 28px;
  }

  .footer-cta {
    display: flex;
    align-items: end;
    justify-content: space-between;
    gap: 48px;
    padding-bottom: 64px;
    border-bottom: 1px solid #303033;

    .eyebrow {
      display: block;
      margin-bottom: 16px;
      color: #b8b8ba;
      font-size: 13px;
      font-weight: 600;
      text-transform: uppercase;
    }

    h2 {
      max-width: 700px;
      font-size: 48px;
      font-weight: 500;
      line-height: 1.08;
    }
  }

  .cta-link {
    display: inline-flex;
    min-width: 218px;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
    padding: 14px 18px;
    flex: 0 0 auto;
    color: var(--black);
    font-size: 14px;
    font-weight: 600;
    background: var(--white);
    border-radius: 6px;
    transition: color 0.25s ease, background 0.25s ease,
      transform 0.25s ease;

    span { font-size: 17px; transition: transform 0.25s ease; }

    &:hover,
    &:focus-visible {
      color: var(--white);
      background: var(--accent);
      transform: translateY(-2px);
    }

    &:hover span,
    &:focus-visible span { transform: translateX(3px); }
  }

  .footer-grid {
    display: grid;
    grid-template-columns: 1.55fr 0.7fr 1fr 0.85fr;
    gap: 48px;
    padding: 64px 0 72px;
  }

  .company {
    padding-right: 24px;

    > a { display: inline-flex; margin-bottom: 22px; }

    p {
      max-width: 330px;
      color: #a9a9ad;
      font-size: 15px;
      line-height: 1.65;
    }
  }

  .availability {
    display: flex;
    align-items: center;
    gap: 9px;
    margin-top: 24px;
    color: #d4d4d6;
    font-size: 12px;

    i {
      width: 7px;
      height: 7px;
      background: #58c995;
      border-radius: 50%;
      box-shadow: 0 0 0 4px rgba(88, 201, 149, 0.12);
    }
  }

  .footer-column {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: 13px;

    h3 {
      margin-bottom: 10px;
      color: #77777d;
      font-size: 12px;
      font-weight: 600;
      text-transform: uppercase;
    }

    > a {
      position: relative;
      color: #d8d8da;
      font-size: 14px;
      line-height: 1.4;
      transition: color 0.2s ease, transform 0.2s ease;

      &:hover,
      &:focus-visible {
        color: var(--white);
        transform: translateX(3px);
      }
    }
  }

  .contact {
    gap: 24px;

    h3 { margin-bottom: 0; }

    div {
      display: grid;
      gap: 6px;

      span { color: #77777d; font-size: 12px; }
      p, a { color: #d8d8da; font-size: 14px; }
      a:hover, a:focus-visible { color: var(--white); }
    }
  }

  .footer-bottom {
    display: flex;
    justify-content: space-between;
    gap: 24px;
    padding-top: 26px;
    color: #77777d;
    font-size: 12px;
    border-top: 1px solid #303033;

    div { display: flex; gap: 24px; }
    a { color: #77777d; transition: color 0.2s ease; }
    a:hover, a:focus-visible { color: #d8d8da; }
  }

  @media (max-width: 900px) {
    .footer-cta { align-items: flex-start; flex-direction: column; }
    .footer-cta h2 { font-size: 40px; }
    .footer-grid { grid-template-columns: 1.4fr 0.8fr 1fr; }
    .contact { grid-column: 2 / 4; display: grid; grid-template-columns: repeat(2, 1fr); }
    .contact h3 { grid-column: 1 / -1; }
  }

  @media (max-width: 640px) {
    footer { width: calc(100% - 32px); padding-top: 64px; }
    .footer-cta { gap: 28px; padding-bottom: 48px; }
    .footer-cta h2 { font-size: 34px; }
    .cta-link { width: 100%; }
    .footer-grid { grid-template-columns: 1fr 1fr; gap: 44px 28px; padding: 48px 0 56px; }
    .company { grid-column: 1 / -1; padding-right: 0; }
    .company p { max-width: 440px; }
    .contact { grid-column: 1 / -1; }
    .footer-bottom { align-items: flex-start; flex-direction: column; }
  }

  @media (max-width: 380px) {
    .footer-grid { grid-template-columns: 1fr; }
    .company, .contact { grid-column: 1; }
    .contact { grid-template-columns: 1fr; }
    .contact h3 { grid-column: 1; }
    .footer-bottom div { flex-direction: column; gap: 10px; }
  }
`;

export default Footer;
