import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faCheck } from "@fortawesome/free-solid-svg-icons";

import { servicesData } from "../../constants";
import { Navbar, Footer } from "../../widgets";
import { Page } from "./Services.styles";
import servicesHero from "../../shared/assets/services/services-hero.jpg";
import webDevelopmentVisual from "../../shared/assets/services/web-development.jpg";
import uiUxVisual from "../../shared/assets/services/ui-ux-design.jpg";
import brandingVisual from "../../shared/assets/services/branding.jpg";

const serviceDetails = {
  web: {
    label: "Build",
    bestFor: "A new company website, online service, customer portal or an existing product that no longer supports the business.",
    result: "A polished, easy-to-use digital product that is ready to welcome customers, support daily work and grow with your business.",
    image: webDevelopmentVisual,
    alt: "Three-dimensional illustration of a digital product creating a clear path to business growth",
  },
  design: {
    label: "Design",
    bestFor: "A website or product that feels confusing, looks inconsistent, loses users or needs a strong concept before it is built.",
    result: "A clear, tested and visually consistent experience that helps people complete important actions without friction.",
    image: uiUxVisual,
    alt: "Three-dimensional illustration of a complex customer journey becoming a clear interface",
  },
  branding: {
    label: "Define",
    bestFor: "A new business preparing to launch or an established company whose current image no longer reflects its quality and direction.",
    result: "A recognizable identity with practical assets and clear rules, ready to be used consistently by your team and partners.",
    image: brandingVisual,
    alt: "Three-dimensional illustration of one visual identity applied across coordinated brand materials",
  },
};

const process = [
  ["01", "Discover", "We align on the audience, business problem and outcome before choosing a solution."],
  ["02", "Shape", "Strategy, content and experience are turned into a clear direction everyone can evaluate."],
  ["03", "Create", "Design and development move in focused iterations with visible progress and regular reviews."],
  ["04", "Launch", "We prepare the final system, validate quality and support a confident release."],
];

const ServicesPage = () => (
  <>
    <Navbar />
    <Page>
      <header
        className="services-hero"
        style={{ backgroundImage: `url(${servicesHero})` }}
      >
        <div className="hero-content">
          <span className="eyebrow">Webelder services</span>
          <h1>One partner for the full digital journey.</h1>
          <p>
            From the first idea to the finished experience, we help businesses
            look credible, communicate clearly and serve customers better.
          </p>
          <a href="#service-overview" className="hero-link">
            Explore our services <FontAwesomeIcon icon={faArrowRight} />
          </a>
        </div>
      </header>

      <section className="overview" id="service-overview">
        <div className="container overview-heading">
          <div>
            <span className="eyebrow">Three connected disciplines</span>
            <h2>Everything your digital presence needs to work as one.</h2>
          </div>
          <p>
            Start with the challenge you need to solve. Choose one focused
            service or combine several into a complete business solution.
          </p>
        </div>
        <nav className="container service-jump" aria-label="Services on this page">
          {servicesData.map((service, index) => (
            <a href={`#${service.id}`} key={service.id}>
              <span>0{index + 1}</span>
              {service.title}
            </a>
          ))}
        </nav>
      </section>

      <div className="service-showcase">
        {servicesData.map((service, index) => {
          const details = serviceDetails[service.id];

          return (
            <article className="service-row container" id={service.id} key={service.id}>
              <div className="service-media">
                <img
                  src={details.image}
                  alt={details.alt}
                  loading="lazy"
                  decoding="async"
                />
                <span>{details.label}</span>
              </div>
              <div className="service-copy">
                <span className="service-number">0{index + 1}</span>
                <h2>{service.title}</h2>
                <p className="service-description">{service.description}</p>
                <div className="service-answers">
                  <div>
                    <span>Best suited for</span>
                    <p>{details.bestFor}</p>
                  </div>
                  <div>
                    <span>What you receive</span>
                    <p>{details.result}</p>
                  </div>
                </div>
                <ul>
                  {service.features.map((feature) => (
                    <li key={feature}>
                      <FontAwesomeIcon icon={faCheck} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link to={service.link} className="detail-link">
                  Explore this service <FontAwesomeIcon icon={faArrowRight} />
                </Link>
              </div>
            </article>
          );
        })}
      </div>

      <section className="process-section">
        <div className="container">
          <div className="process-heading">
            <span className="eyebrow">One clear process</span>
            <h2>From an open question to a confident launch.</h2>
          </div>
          <div className="process-grid">
            {process.map(([number, title, description]) => (
              <article key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="services-cta container">
        <div>
          <span className="eyebrow">Not sure where to start?</span>
          <h2>Tell us what needs to change. We will help define the right path.</h2>
        </div>
        <Link to="/contact">
          Discuss your project <FontAwesomeIcon icon={faArrowRight} />
        </Link>
      </section>
    </Page>
    <Footer />
  </>
);

export default ServicesPage;
