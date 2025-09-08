import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { plansData } from "../../constants";
import { AccentBtn } from "../../shared";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faArrowLeft,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";

const MobilePlans = () => {
  const [slidesToShow, setSlidesToShow] = useState(
    window.innerWidth <= 600 ? 1 : 2
  );

  const totalSlides = Math.ceil(plansData.length / slidesToShow);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setSlidesToShow(window.innerWidth <= 600 ? 1 : 2);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1 >= totalSlides ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 < 0 ? totalSlides - 1 : prev - 1));
  };

  return (
    <StyledWrapper $slidesToShow={slidesToShow}>
      <div className="mobile_plansSlider">
        {/* Верхний слайдер */}
        <div className="slider-container">
          <div
            className="slider-track"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {plansData.map((plan) => (
              <div className="slide" key={plan.id}>
                <div className="card-style">
                  <h3>{plan.title}</h3>
                  <p>{plan.description}</p>
                  <div className="price">
                    <p>{plan.price}</p>
                  </div>
                  <div className="card-btn">
                    <AccentBtn content="Order now" link="/contact" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Навигация */}
        <div className="slide_nav">
          <button onClick={prevSlide} aria-label="Previous slide">
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          {Array.from({ length: totalSlides }).map((_, i) => (
            <button
              key={i}
              className={`dot-nav ${i === currentIndex ? "active" : ""}`}
              onClick={() => setCurrentIndex(i)}
              aria-label={`Go to slide group ${i + 1}`}
            />
          ))}
          <button onClick={nextSlide} aria-label="Next slide">
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>

        {/* Нижний слайдер */}
        <div className="slider-container">
          <div
            className="slider-track"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {plansData.map((plan) => (
              <div className="slide" key={plan.id}>
                <div className="infoCard-style">
                  <h4>{plan.title}</h4>
                  <h5>Key features</h5>
                  <ul>
                    {plan.features.map((feature, idx) => (
                      <li key={idx}>
                        <FontAwesomeIcon icon={faCheck} />{" "}
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.section`
  margin: 0 auto;
  max-width: 1120px;

  .slider-container {
    overflow: hidden;
    width: 100%;
  }

  .slider-track {
    display: flex;
    transition: transform 0.4s ease;
    width: 100%;
  }

  .slide {
    min-width: ${({ $slidesToShow }) => 100 / $slidesToShow}%;
    box-sizing: border-box;
    padding: 16px;
  }

  .card-style {
    background: rgb(245, 245, 242);
    border-radius: 12px;
    padding: 24px;

    h3 {
      margin: 0px 0px 8px;
      padding: 0px 16px 0px 0px;
      font-weight: 500;
      font-size: 22px;
      line-height: 1.25;
      color: var(--black);
    }

    p {
      padding: 0px 16px 0px 0px;
      font-size: 15px;
      line-height: 1.45;
      margin: 0px 0px 16px;
      font-weight: 400;
      min-height: 56px;
    }

    .price {
      p {
        font-weight: 500;
        font-size: 22px;
        line-height: 1.25;
        color: var(--black);
      }
    }
  }

  .infoCard-style {
    padding-right: 6px;
    padding-left: 6px;
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    -webkit-box-pack: start;
    justify-content: flex-start;
    position: relative;
    transition: box-shadow;
    width: 100%;
    background-color: rgb(245, 245, 242);
    padding: 32px 12px 12px;
    border-radius: 12px;

    h4 {
      font-weight: 500;
      font-size: 22px;
      line-height: 1.25;
      padding: 0px 16px 0px 0px;
      margin: 0px 0px 8px;
      color: var(--black);
    }

    h5 {
      margin-top: 24px;
      font-weight: 600;
      font-size: 15px;
      line-height: 1.45;
      padding: 0px 16px 0px 0px;
      margin: 0px 0px 12px;
      color: var(--black);
    }

    ul {
      list-style: none;
      margin-bottom: 32px;
      padding: 0px;
      margin: 0px;
      width: 100%;

      li {
        background-color: rgb(255, 255, 255);
        border-radius: 4px;
        display: flex;
        gap: 16px;
        padding: 8px;
        margin: 12px 0px 16px;
        font-weight: 400;
        font-size: 16px;
        line-height: 1.45;
        color: var(--black);
      }
    }
  }

  .slide_nav {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    margin: 12px 0;

    button {
      background: none;
      border: none;
      cursor: pointer;
      font-size: 18px;
    }

    .dot-nav {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      padding: 0px;
      background-color: transparent;
      border: 1px solid rgba(17, 17, 13, 0.18);
      cursor: pointer;
    }

    .dot-nav.active {
      background: var(--accent);
    }
  }
`;

export default MobilePlans;
