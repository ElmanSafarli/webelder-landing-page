import React from "react";
import styled from "styled-components";
import { SimpleWhite } from "../../shared";
import { Link } from "react-router-dom";

import { CustomerLogos } from "../../shared";

const ServiceSolution = () => {
  const logos = [
    `${CustomerLogos.TMTECH}`,
    `${CustomerLogos.Neline}`,
    `${CustomerLogos.Balonowa}`,
    `${CustomerLogos.MJEngineering}`,
    `${CustomerLogos.Ahmadshop}`,
    `${CustomerLogos.Bobgames}`,
    `${CustomerLogos.GardenCare}`,
    `${CustomerLogos.Buta}`,
    `${CustomerLogos.Tiens}`,
    `${CustomerLogos.Weconsult}`,

    `${CustomerLogos.TMTECH}`,
    `${CustomerLogos.Neline}`,
    `${CustomerLogos.Balonowa}`,
    `${CustomerLogos.MJEngineering}`,
    `${CustomerLogos.Ahmadshop}`,
    `${CustomerLogos.Bobgames}`,
    `${CustomerLogos.GardenCare}`,
    `${CustomerLogos.Buta}`,
    `${CustomerLogos.Tiens}`,
    `${CustomerLogos.Weconsult}`,

    `${CustomerLogos.TMTECH}`,
    `${CustomerLogos.Neline}`,
    `${CustomerLogos.Balonowa}`,
    `${CustomerLogos.MJEngineering}`,
    `${CustomerLogos.Ahmadshop}`,
    `${CustomerLogos.Bobgames}`,
    `${CustomerLogos.GardenCare}`,
    `${CustomerLogos.Buta}`,
    `${CustomerLogos.Tiens}`,
    `${CustomerLogos.Weconsult}`,
  ];
  return (
    <StyledWrapper>
      <div className="service-solution">
        <div className="info">
          <div className="text">
            <h2>The #1 service solution</h2>
            <h2>
              Powering 100,000+ of the best customer and employee experiences
            </h2>
            <div className="links">
              <Link to="/" className="first">
                Learn More
              </Link>
              <SimpleWhite content="View portfolio" link="/" />
            </div>
          </div>
          <div className="image"></div>
        </div>
        <div className="customer-line">
          <div className="slider">
            <div className="slide-track">
              {logos.concat(logos).map((logo, index) => (
                <img key={index} src={logo} alt={`logo-${index}`} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.section`
  padding: 88px 0;
  background-color: var(--black);

  @media screen and (max-width: 426px) {
    padding: 60px 16px;
  }

  .service-solution {
    margin: 0 auto;
    max-width: 1120px;
    .info {
      .text {
        h2 {
          color: var(--white);
          width: 100%;
          max-width: 400px;
        }
        h2:first-of-type {
          margin: 0px 0px 8px;
          font-weight: 700;
          font-size: 14px;
          text-transform: uppercase;
        }
        h2:last-of-type {
          margin: 0px 0px 24px;
          font-weight: 500;
          font-size: 42px;

          @media screen and (max-width: 768px) {
            font-size: 30px;
          }
        }

        .links {
          display: flex;
          gap: 16px;

          @media screen and (max-width: 768px) {
            gap: 4px;
          }

          .first {
            border: none;
            border-radius: 16px;
            display: inline-block;
            outline: transparent solid 0px;
            outline-offset: 3px;
            text-decoration: none;
            white-space: nowrap;
            line-height: 28px;
            padding: 10px 20px;
            background-color: var(--accent);
            font-weight: 600;
            color: var(--white);
            transition: all 0.3s ease-in-out;
          }

          .first:hover {
            background-color: var(--white);
            color: var(--black);
          }
        }
      }
    }

    .customer-line {
      margin-top: 76px;
      overflow: hidden;

      @media screen and (max-width: 426px) {
        margin-top: 40px;
      }

      .slider {
        height: 100px;
        position: relative;
        width: 100%;
        display: flex;
        align-items: center;
        overflow: hidden;

        mask-image: linear-gradient(
          to right,
          transparent 0%,
          black 10%,
          black 90%,
          transparent 100%
        );
        -webkit-mask-image: linear-gradient(
          to right,
          transparent 0%,
          black 10%,
          black 90%,
          transparent 100%
        );

        @media screen and (max-width: 426px) {
          height: auto;
        }
      }

      .slide-track {
        display: flex;
        width: calc(200px * 12); /* 6 logos * 2 (we duplicated the array) */
        animation: scroll 10s linear infinite;
        gap: 40px;

        @media screen and (max-width: 426px) {
          gap: 26px;
        }
      }

      img {
        max-height: 56px;
        filter: brightness(0) invert(1);

        @media screen and (max-width: 426px) {
          max-height: 38px;
        }
      }

      @keyframes scroll {
        0% {
          transform: translateX(0);
        }

        100% {
          transform: translateX(-50%);
        }
      }
    }
  }
`;

export default ServiceSolution;
