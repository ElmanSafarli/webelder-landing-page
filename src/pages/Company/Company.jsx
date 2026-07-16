import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faCheck } from "@fortawesome/free-solid-svg-icons";

import { Navbar, Footer } from "../../widgets";
import companyHero from "../../shared/assets/company/company-hero.jpg";
import { CompanyPage } from "./Company.styles";

const values = [
  ["Clarity", "We explain decisions in plain language, keep priorities visible and make the next step easy to understand."],
  ["Ownership", "We treat the result as a shared responsibility and stay involved from the first question through launch."],
  ["Usefulness", "Every choice must help the customer, support the business or make the final product easier to maintain."],
];

const advantages = [
  "One accountable partner across strategy, design and delivery",
  "Recommendations shaped around business goals, not trends",
  "Visible progress and regular opportunities to give feedback",
  "A finished result your team can use with confidence",
];

const directions = [
  ["01", "Web Development", "Websites and online services that make your offer clear, support daily work and help the business grow.", "/services/web-development"],
  ["02", "UI/UX Design", "Customer experiences that are easy to understand, comfortable to use and focused on meaningful actions.", "/services/ui-ux-design"],
  ["03", "Branding & Identity", "A distinctive visual language that helps customers recognize, remember and trust your business.", "/services/branding"],
];

const faq = [
  ["What kind of projects do you take on?", "We work on company websites, online services, customer portals, product experiences, redesigns and visual identities. The best fit is a project with a clear business challenge and room for thoughtful collaboration."],
  ["Can we start with only one service?", "Yes. You can engage us for one focused need, such as a website or visual identity, or combine several services into one connected project."],
  ["What happens before a project begins?", "We start with a conversation about your goals, audience, current situation and priorities. After that, we recommend a suitable scope, working approach and realistic sequence of steps."],
  ["How involved will our team need to be?", "Your knowledge is important, but the process should not become a second full-time job. We agree on decision-makers, collect the right information early and schedule focused reviews at meaningful stages."],
  ["How long does a project take?", "Timing depends on scope, content and the speed of feedback. Before work begins, we define the stages and expected schedule so your team can plan with confidence."],
  ["Do you stay involved after launch?", "Yes. We can support improvements, new priorities and ongoing care after launch. The exact level of support is agreed around what your business actually needs."],
];

const Company = () => (
  <>
    <Navbar />
    <CompanyPage>
      <header className="company-hero" style={{ backgroundImage: `url(${companyHero})` }}>
        <div className="hero-inner">
          <span className="eyebrow">Webelder company</span>
          <h1>Built around your business, not our process.</h1>
          <p>
            We help businesses turn important ideas into clear digital
            experiences and distinctive brands, with one team responsible for
            the journey from first conversation to finished result.
          </p>
          <Link to="/contact" className="hero-cta">
            Start a conversation <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>
      </header>

      <section className="intro container">
        <div className="intro-title">
          <span className="eyebrow">Who we are</span>
          <h2>A focused digital partner for work that matters.</h2>
        </div>
        <div className="intro-copy">
          <p>
            Webelder brings together business thinking, customer experience
            and visual craft. We work with companies that want more than a
            polished surface: they need a result that feels credible, works
            clearly and supports what comes next.
          </p>
          <p>
            Our role is to reduce uncertainty. We ask the right questions,
            turn complexity into a practical direction and keep every decision
            connected to the people your business serves.
          </p>
        </div>
      </section>

      <section className="principles">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">What guides us</span>
            <h2>Simple principles that shape every partnership.</h2>
          </div>
          <div className="values-grid">
            {values.map(([title, description], index) => (
              <article key={title}>
                <span>0{index + 1}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="partnership container">
        <div className="partnership-copy">
          <span className="eyebrow">Why Webelder</span>
          <h2>Less handover. More shared understanding.</h2>
          <p>
            When strategy, experience and delivery are separated, important
            context gets lost. Our connected approach keeps the business goal
            visible and gives you one clear point of responsibility.
          </p>
          <ul>
            {advantages.map((item) => (
              <li key={item}>
                <FontAwesomeIcon icon={faCheck} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="commitment" aria-label="Our partnership commitments">
          <div><strong>3</strong><span>connected disciplines</span></div>
          <div><strong>1</strong><span>accountable partner</span></div>
          <div><strong>Every stage</strong><span>visible and explained</span></div>
        </div>
      </section>

      <section className="directions">
        <div className="container">
          <div className="section-heading split">
            <div><span className="eyebrow">What we do</span><h2>Three disciplines. One coherent outcome.</h2></div>
            <p>Engage one service or bring them together around a larger business goal.</p>
          </div>
          <div className="directions-list">
            {directions.map(([number, title, description, link]) => (
              <Link to={link} key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{description}</p>
                <FontAwesomeIcon icon={faArrowRight} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="company-process container">
        <div className="section-heading">
          <span className="eyebrow">Working together</span>
          <h2>A calm, visible path from question to outcome.</h2>
        </div>
        <ol>
          {[
            ["Understand", "We learn what the business needs, who it serves and what success should look like."],
            ["Define", "We turn the challenge into a focused scope, clear priorities and an agreed direction."],
            ["Create", "Work progresses in meaningful stages, with focused reviews and decisions along the way."],
            ["Launch & support", "We prepare the final result, help your team move forward and remain available afterward."],
          ].map(([title, description], index) => (
            <li key={title}>
              <span>0{index + 1}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="faq-section">
        <div className="container faq-layout">
          <div className="faq-heading">
            <span className="eyebrow">Before we begin</span>
            <h2>Questions clients often ask.</h2>
            <p>Clear answers help you decide whether we are the right partner before committing to a conversation.</p>
          </div>
          <div className="faq-list">
            {faq.map(([question, answer], index) => (
              <details key={question} open={index === 0}>
                <summary>{question}<span aria-hidden="true">+</span></summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="company-cta container">
        <div>
          <span className="eyebrow">A useful first step</span>
          <h2>Tell us where your business needs to go next.</h2>
        </div>
        <Link to="/contact">Discuss your project <FontAwesomeIcon icon={faArrowRight} /></Link>
      </section>
    </CompanyPage>
    <Footer />
  </>
);

export default Company;
