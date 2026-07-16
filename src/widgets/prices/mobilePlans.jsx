import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight, faCheck } from "@fortawesome/free-solid-svg-icons";

import { plansData } from "../../constants";
import { AccentBtn } from "../../shared";

const MobilePlans = () => {
  const [slidesToShow, setSlidesToShow] = useState(
    window.innerWidth <= 600 ? 1 : 2
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = Math.ceil(plansData.length / slidesToShow);

  useEffect(() => {
    const handleResize = () => setSlidesToShow(window.innerWidth <= 600 ? 1 : 2);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setCurrentIndex((previous) => Math.min(previous, totalSlides - 1));
  }, [totalSlides]);

  const nextSlide = () => {
    setCurrentIndex((previous) => (previous + 1 >= totalSlides ? 0 : previous + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((previous) => (previous === 0 ? totalSlides - 1 : previous - 1));
  };

  return (
    <StyledWrapper $slidesToShow={slidesToShow}>
      <div className="slider-container">
        <div
          className="slider-track"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {plansData.map((plan) => (
            <div className="slide" key={plan.id}>
              <article className={`plan-card ${plan.recommended ? "recommended" : ""}`}>
                <div className="plan-title">
                  <h2>{plan.title}</h2>
                  {plan.recommended && <span>Most popular</span>}
                </div>
                <p className="description">{plan.description}</p>
                <div className="price">
                  <strong>{plan.price}</strong>
                  <span>starting from</span>
                </div>
                <AccentBtn content={plan.buttonText} link="/contact" />
                <h3>Key features</h3>
                <ul>
                  {plan.features.map((feature) => (
                    <li key={feature}>
                      <FontAwesomeIcon icon={faCheck} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          ))}
        </div>
      </div>

      <div className="slider-navigation">
        <button type="button" onClick={prevSlide} aria-label="Previous plans">
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <div className="dots">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              type="button"
              key={index}
              className={index === currentIndex ? "active" : ""}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Show plan group ${index + 1}`}
              aria-current={index === currentIndex ? "true" : undefined}
            />
          ))}
        </div>
        <button type="button" onClick={nextSlide} aria-label="Next plans">
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.section`
  width: 100%;

  .slider-container { width: 100%; overflow: hidden; }
  .slider-track { display: flex; width: 100%; transition: transform 0.42s cubic-bezier(0.7, 0, 0.3, 1); }
  .slide { min-width: ${({ $slidesToShow }) => 100 / $slidesToShow}%; padding: 5px 7px 12px; }

  .plan-card {
    height: 100%;
    padding: 25px 22px;
    background: var(--white);
    border: 1px solid #e2e2e2;
    border-radius: 8px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.05);
  }

  .plan-card.recommended {
    border: 2px solid var(--accent);
    box-shadow: 0 12px 30px rgba(154, 68, 151, 0.12);
  }

  .plan-title {
    display: flex;
    min-height: 48px;
    align-items: flex-start;
    justify-content: space-between;
    gap: 10px;

    h2 { font-size: 23px; font-weight: 600; }
    span {
      padding: 5px 7px;
      color: #fff;
      font-size: 9px;
      font-weight: 700;
      white-space: nowrap;
      text-transform: uppercase;
      background: var(--accent);
      border-radius: 4px;
    }
  }

  .description { min-height: 48px; margin-bottom: 22px; color: #666; font-size: 14px; line-height: 1.5; }
  .price { display: flex; flex-direction: column; margin-bottom: 18px; }
  .price strong { font-size: 34px; font-weight: 600; line-height: 1; }
  .price span { margin-top: 6px; color: #858585; font-size: 11px; }
  .plan-card > div:nth-of-type(3), .plan-card > div:nth-of-type(3) a { width: 100%; }

  h3 { margin: 28px 0 17px; padding-top: 22px; font-size: 15px; font-weight: 600; border-top: 1px solid #e8e8e8; }
  ul { display: grid; gap: 13px; list-style: none; }
  li { display: flex; gap: 11px; align-items: flex-start; color: #333; font-size: 14px; line-height: 1.4; }
  li svg { margin-top: 4px; color: var(--accent); font-size: 11px; }

  .slider-navigation {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 22px;
    margin-top: 18px;

    > button {
      display: grid;
      width: 40px;
      height: 40px;
      place-items: center;
      color: var(--black);
      background: var(--white);
      border: 1px solid #d8d8d8;
      border-radius: 50%;
      cursor: pointer;
      transition: color 0.2s ease, background 0.2s ease;
    }

    > button:hover, > button:focus-visible { color: #fff; background: var(--black); }
  }

  .dots { display: flex; gap: 8px; }
  .dots button {
    width: 7px;
    height: 7px;
    padding: 0;
    background: #d2d2d2;
    border: 0;
    border-radius: 50%;
    cursor: pointer;
    transition: width 0.2s ease, background 0.2s ease;
  }
  .dots button.active { width: 22px; background: var(--accent); border-radius: 8px; }

  @media (max-width: 600px) { .slide { padding-right: 4px; padding-left: 4px; } }
`;

export default MobilePlans;
