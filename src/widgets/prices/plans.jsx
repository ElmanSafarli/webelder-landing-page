import React from "react";
import styled from "styled-components";
import MobilePlans from "./mobilePlans";
import { plansData } from "../../constants/plans/plansData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { AccentBtn } from "../../shared";

const Plans = () => {
  return (
    <StyledWrapper>
      <div className="plans-container">
        <div className="plans-list">
          {plansData.map((plan) => (
            <div className="plan-item" key={plan.id}>
              <div className="plan-content">
                <div className="plan_header">
                  <h4>{plan.title}</h4>
                  <p>{plan.description}</p>
                  <div className="price">{plan.price}</div>
                  <div className="price_btn">
                    <AccentBtn content="Order now" link="/contact" />
                  </div>
                </div>
                <h5>Key features</h5>
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
        <MobilePlans />
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.section`
  margin: 0 auto;
  max-width: 1120px;
  padding: 88px 0;

  ul {
    list-style-type: none;
  }

  .plans-list {
    display: flex;

    .plan-item {
      width: 100%;
      flex-basis: 0px;
      -webkit-box-flex: 1;
      flex-grow: 1;
      max-width: 100%;
      text-align: left;
      padding: 24px;
      color: var(--black);

      .plan_header {
        h4 {
          font-size: 24px;
          margin: 0px 0px 8px;
        }

        p {
          margin-bottom: 16px;
          font-size: 14px;
          min-height: 70px;
        }
        .price {
          font-size: 32px;
          margin: 0px 0px 12px;
          font-weight: 500;
        }
      }

      h5 {
        font-weight: 500;
        font-size: 16px;
        margin-top: 24px;
        margin-bottom: 20px;
      }

      ul {
        li {
          display: flex;
          gap: 16px;
          margin-top: 12px;
          svg {
            font-size: 12px;
          }
          span {
            margin-right: 8px;
            font-weight: 400;
            font-size: 15px;
            text-decoration: underline dotted rgb(22, 20, 12);
            text-underline-offset: 3px;
          }
        }
      }
    }
  }
`;

export default Plans;
