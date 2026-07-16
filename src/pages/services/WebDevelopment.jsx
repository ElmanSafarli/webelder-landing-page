import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Footer } from "../../widgets";
import { ServiceLanding } from "./ServiceLanding.styles";

const features = [
  ["Built around your goal", "Every page and feature supports a clear business purpose, from attracting leads to serving customers."],
  ["Easy for customers", "Visitors can understand your offer, find what they need and complete important actions without friction."],
  ["Ready for every screen", "The experience remains clear, fast and professional on phones, tablets and desktop devices."],
  ["Connected business tools", "Payments, customer management, bookings and other essential services can work together smoothly."],
  ["Carefully checked", "The complete experience is reviewed before launch so your team can publish with confidence."],
  ["Support after launch", "We remain available for improvements as customer feedback and new business priorities emerge."],
];

const WebDevelopment = () => (
  <>
    <Navbar />
    <ServiceLanding $accent="#3d63dd" $soft="#f1f5ff">
      <div className="container hero">
        <div className="hero-copy">
          <span className="eyebrow">Web development</span>
          <h1>Digital products built to move business forward.</h1>
          <p>We design and build fast, secure web applications that turn complex operations into clear customer experiences.</p>
          <div className="hero-actions"><Link className="primary-link" to="/contact">Start a project <span>→</span></Link><Link className="text-link" to="/projects">Explore our work</Link></div>
        </div>
        <div className="hero-visual web-console" aria-hidden="true">
          <div className="console-top"><i /><i /><i /><span>production / overview</span></div>
          <div className="console-grid"><div className="metric"><small>Customer satisfaction</small><strong>98%</strong><span>Growing</span></div><div className="metric"><small>Ready for business</small><strong>24/7</strong><span>Available</span></div><div className="chart"><span /><span /><span /><span /><span /><span /></div><div className="deploy"><small>Your finished product</small><b>Ready to welcome customers</b><em>Clear, reliable and easy to use</em></div></div>
        </div>
      </div>
      <section className="section soft"><div className="container"><div className="section-heading"><div><span className="eyebrow">What you receive</span><h2>A complete digital product, ready to support your business.</h2></div><p>One clear process keeps the business goal, customer experience and final result aligned from the first conversation to launch.</p></div><div className="feature-grid">{features.map(([title, text], i)=><article className="feature" key={title}><span className="feature-index">0{i+1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
      <section className="section"><div className="container"><div className="section-heading"><div><span className="eyebrow">A solution that fits</span><h2>Designed around how your business actually works.</h2></div><div className="pill-list">{["Company websites","Online services","Customer portals","Booking experiences","Online stores","Internal tools","Website redesigns","Ongoing improvements"].map(x=><span key={x}>{x}</span>)}</div></div><div className="process-list">{[["01","Understand","We clarify your audience, current challenges and the result the business needs."],["02","Plan","We define the content, customer journey and priorities before production begins."],["03","Create & review","You see meaningful progress in stages and can give feedback throughout the project."],["04","Launch & support","We prepare your team, publish the finished product and remain available afterward."]].map(x=><div className="process-row" key={x[0]}><span>{x[0]}</span><h3>{x[1]}</h3><p>{x[2]}</p></div>)}</div></div></section>
      <section className="section"><div className="container cta-band"><h2>Have a product idea or a system that needs a better foundation?</h2><Link className="primary-link" to="/contact">Discuss your project <span>→</span></Link></div></section>
    </ServiceLanding>
    <Footer />
  </>
);

export default WebDevelopment;
