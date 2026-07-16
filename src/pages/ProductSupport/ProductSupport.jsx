import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faCheck } from "@fortawesome/free-solid-svg-icons";

import { Navbar, Footer } from "../../widgets";
import supportHero from "../../shared/assets/support/product-support-hero.jpg";
import { SupportPage } from "./ProductSupport.styles";

const supportAreas = [
  ["Issue resolution", "When something is not working as expected, we investigate the impact, agree on priority and move the product back to a dependable state."],
  ["Regular care", "Planned checks help identify concerns early and keep the experience reliable for customers and your team."],
  ["Product improvements", "Customer feedback and new business needs become a clear list of useful improvements instead of scattered requests."],
  ["Performance care", "We look for slow or frustrating moments and improve the experience where it matters most to users."],
  ["Content and updates", "We help keep important information, customer journeys and product behavior current as the business changes."],
  ["Practical guidance", "You have a familiar partner to discuss priorities, evaluate ideas and decide what should happen next."],
];

const supportModes = [
  ["Launch care", "A focused period after release for quick questions, early feedback and confidence while the product settles into everyday use.", ["Newly launched products", "Team guidance", "Early improvements"]],
  ["Continuous care", "Ongoing attention for products that need regular checks, issue resolution and a predictable rhythm of small improvements.", ["Established websites", "Regular requests", "Stable monthly rhythm"]],
  ["Growth partnership", "A closer relationship for products that evolve continuously and need help shaping priorities as the business grows.", ["Active digital products", "Changing priorities", "Planned development"]],
];

const faq = [
  ["Can you support a product you did not originally create?", "Often, yes. We begin with a review to understand the current product, available information and immediate priorities. After that, we can recommend whether ongoing support is practical and what the first steps should be."],
  ["What counts as a support request?", "A request can be an unexpected issue, a content change, a usability concern, a small improvement or a question about the best next step. We help organize requests by urgency and business value."],
  ["How are urgent and planned requests handled?", "We agree on a simple way to identify urgency. Immediate business-impacting concerns are separated from improvements that can be planned, so important work receives the right attention."],
  ["Do we need to choose a fixed package?", "Not necessarily. The support relationship should match how often your product changes and how much help your team needs. We discuss the expected rhythm before recommending an arrangement."],
  ["Will we know what is being worked on?", "Yes. Priorities, current work and completed improvements stay visible. Reviews provide a clear moment to discuss what changed and what should happen next."],
  ["Can support include larger new features?", "Yes, when they fit the relationship. Larger initiatives are first clarified and planned so they do not disrupt urgent care or ongoing product stability."],
];

const ProductSupport = () => (
  <>
    <Navbar />
    <SupportPage>
      <header className="support-hero" style={{ backgroundImage: `url(${supportHero})` }}>
        <div className="hero-inner">
          <span className="eyebrow">Product support</span>
          <h1>Your product keeps moving after launch.</h1>
          <p>
            Reliable care, clear priorities and steady improvements give your
            team confidence that customers are supported and the product can
            continue growing with the business.
          </p>
          <Link to="/contact" className="hero-cta">
            Discuss product support <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>
      </header>

      <section className="support-intro container">
        <div>
          <span className="eyebrow">After the launch</span>
          <h2>A finished project should not become your team&apos;s next worry.</h2>
        </div>
        <div className="intro-copy">
          <p>
            Real customers bring new questions, business priorities change and
            even a successful product needs attention. Product Support gives
            you a familiar partner who already understands the bigger picture.
          </p>
          <p>
            Instead of reacting only when something goes wrong, we create a
            steady rhythm of care: important issues are handled, improvements
            are organized and your product remains aligned with the business.
          </p>
        </div>
      </section>

      <section className="care-section">
        <div className="container">
          <div className="section-heading split">
            <div><span className="eyebrow">What support includes</span><h2>Practical care across the full life of your product.</h2></div>
            <p>Support is shaped around what keeps your product dependable today and useful tomorrow.</p>
          </div>
          <div className="care-grid">
            {supportAreas.map(([title, description], index) => (
              <article key={title}>
                <span>0{index + 1}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="confidence container">
        <div className="confidence-copy">
          <span className="eyebrow">Why ongoing support matters</span>
          <h2>More confidence for your team. A better experience for customers.</h2>
          <p>
            A product is easier to manage when requests are not spread across
            messages, people and urgent decisions. We keep context in one
            place and help your team act with a clear sense of priority.
          </p>
          <ul>
            {["Fewer surprises through regular attention", "Faster decisions because context is already understood", "Improvements chosen for customer and business value", "A consistent partner as people and priorities change"].map((item) => (
              <li key={item}><FontAwesomeIcon icon={faCheck} /><span>{item}</span></li>
            ))}
          </ul>
        </div>
        <div className="quality-panel">
          <div><span>01</span><strong>One clear channel</strong><p>Requests stay visible and easier to manage.</p></div>
          <div><span>02</span><strong>Shared priorities</strong><p>Urgent needs and planned improvements are clearly separated.</p></div>
          <div><span>03</span><strong>Regular reviews</strong><p>Your team understands what changed and what comes next.</p></div>
        </div>
      </section>

      <section className="support-rhythm">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">How we work together</span>
            <h2>A simple rhythm that keeps attention in the right place.</h2>
          </div>
          <ol>
            {[
              ["Listen", "Your questions, concerns and ideas enter one clear conversation."],
              ["Prioritize", "We agree on what is urgent, what creates value and what can be planned."],
              ["Resolve & improve", "Work moves forward in focused steps, with progress kept visible."],
              ["Review", "We confirm outcomes, discuss learning and shape the next priorities."],
            ].map(([title, description], index) => (
              <li key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{description}</p></li>
            ))}
          </ol>
        </div>
      </section>

      <section className="support-options container">
        <div className="section-heading split">
          <div><span className="eyebrow">Flexible relationships</span><h2>Support that matches the way your product changes.</h2></div>
          <p>These are common starting points, not rigid packages. We recommend a suitable arrangement after understanding your situation.</p>
        </div>
        <div className="options-list">
          {supportModes.map(([title, description, suitableFor], index) => (
            <article key={title}>
              <div className="option-title"><span>0{index + 1}</span><h3>{title}</h3></div>
              <p>{description}</p>
              <ul>{suitableFor.map((item) => <li key={item}>{item}</li>)}</ul>
            </article>
          ))}
        </div>
      </section>

      <section className="support-faq">
        <div className="container faq-layout">
          <div className="faq-heading">
            <span className="eyebrow">Support questions</span>
            <h2>What clients want to know before we begin.</h2>
            <p>A support relationship should be clear before the first request arrives.</p>
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

      <section className="support-cta container">
        <div><span className="eyebrow">Keep moving forward</span><h2>Give your product the care it needs after launch.</h2></div>
        <Link to="/contact">Discuss your support needs <FontAwesomeIcon icon={faArrowRight} /></Link>
      </section>
    </SupportPage>
    <Footer />
  </>
);

export default ProductSupport;
