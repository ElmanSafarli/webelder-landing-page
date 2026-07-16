import React from "react";
import styled from "styled-components";
import { plansData } from "../../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { AccentBtn } from "../../shared";

const Plans = () => {
  return (
    <StyledWrapper>
      <div className="plans-container">
        <div className="plans-list">
          {plansData.map((plan) => (
            <div className={`plan-item ${plan.recommended ? "recommended" : ""}`} key={plan.id}>
              <div className="plan-content">
                <div className="plan_header">
                  <div className="plan-title">
                  <h2>{plan.title}</h2>
                    {plan.recommended && <span>Most popular</span>}
                  </div>
                  <p>{plan.description}</p>
                  <div className="price"><strong>{plan.price}</strong><span>starting from</span></div>
                  <div className="price_btn">
                    <AccentBtn content="Order now" link="/contact" />
                  </div>
                </div>
                <h3>Key features</h3>
                <ul>
                  {plan.features.map((feature, index) => (
                    <li key={index}>
                      <div>
                        <FontAwesomeIcon icon={faCheck} />
                      </div>{" "}
                      <>
                        {" "}
                        <span>{feature}</span>
                      </>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.section`
  margin: 0 auto;
  max-width: 1120px;
    width: 100%;

  ul {
    list-style-type: none;
  }

  .plans-list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 14px;

    .plan-item {
      width: 100%;
      text-align: left;
      padding: 28px 24px;
      color: var(--black);
      background: var(--white);
      border: 1px solid #e2e2e2;
      border-radius: 8px;
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.04);
      transition: transform 0.3s ease, box-shadow 0.3s ease,
        border-color 0.3s ease;

      &:hover {
        transform: translateY(-5px);
        border-color: #cfcfcf;
        box-shadow: 0 18px 38px rgba(0, 0, 0, 0.09);
      }

      &.recommended {
        border: 2px solid var(--accent);
        box-shadow: 0 14px 34px rgba(154, 68, 151, 0.12);
      }

      .plan_header {
        .plan-title {
          display: flex;
          min-height: 56px;
          align-items: flex-start;
          justify-content: space-between;
          gap: 8px;

          h2 { font-size: 23px; font-weight: 600; }
          span {
            padding: 5px 7px;
            color: var(--white);
            font-size: 9px;
            font-weight: 700;
            white-space: nowrap;
            text-transform: uppercase;
            background: var(--accent);
            border-radius: 4px;
          }
        }

        p {
          margin-bottom: 24px;
          font-size: 14px;
          line-height: 1.5;
          min-height: 64px;
          color: #666;
        }
        .price {
          display: flex;
          min-height: 58px;
          flex-direction: column;
          margin-bottom: 18px;

          strong { font-size: 34px; font-weight: 600; line-height: 1; }
          span { margin-top: 6px; color: #858585; font-size: 11px; }
        }

        .price_btn > div, .price_btn a { width: 100%; }
      }

      h3 {
        font-weight: 500;
        font-size: 16px;
        margin-top: 30px;
        margin-bottom: 18px;
        padding-top: 22px;
        border-top: 1px solid #e8e8e8;
      }

      ul {
        li {
          display: flex;
          gap: 11px;
          align-items: flex-start;
          margin-top: 13px;
          svg {
            margin-top: 4px;
            color: var(--accent);
            font-size: 12px;
          }
          span {
            font-weight: 400;
            font-size: 14px;
            line-height: 1.4;
          }
        }
      }
    }
  }

  @media (max-width: 1020px) {
    .plans-list { grid-template-columns: repeat(2, 1fr); }
  }
`;

export default Plans;
