import React from "react";
import styled from "styled-components";

// Components
import { AccentBtn, SecondaryBtn } from "../../shared";

const Header = () => {
  return (
    <StyledWrapper>
      <div className="content">
        <div className="info">
          <h1>Digital solutions for your success</h1>
          <p>
            Customers and employees are more than just interactions, they are
            human connections. We simplify business complexity by helping
            companies create meaningful connections with customers and turn
            everyday interactions into exceptional experiences.
          </p>
          <div className="btn_group">
            <AccentBtn content={"Implement the idea"} link="/" />
            <SecondaryBtn content={"Learn more"} link="/" />
          </div>
        </div>
        <div></div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.section`
  padding: 64px 0px 88px 0px;

  .content {
    margin: 0 auto;
    max-width: 1120px;
    display: flex;
    flex-wrap: wrap;
    -webkit-box-align: center;
    align-items: center;

    @media screen and (max-width: 768px) {
      display: block;
    }

    .info {
      flex: 0 0 50%;
      -webkit-box-flex: 0;
      max-width: 50%;

      @media screen and (max-width: 768px) {
        flex: 0 0 100%;
        max-width: 100%;
      }

      h1 {
        margin: 0 0 24px;
        line-height: calc(1em + 8px);
        letter-spacing: 0.75px;
        font-weight: 800;
        font-size: 68px;
        @media screen and (max-width: 1024px) {
          font-size: 56px;
        }
        @media screen and (max-width: 768px) {
          font-size: 40px;
        }
      }

      p {
        margin: 0px 0px 12px;
        font-size: 18px;
        line-height: calc(1em + 8px);
        letter-spacing: 0px;
        font-weight: 600;
      }

      .btn_group {
        padding-top: 8px;
        display: flex;
        align-items: center;
        gap: 8px;
        justify-content: flex-start;

        @media screen and (max-width: 426px) {
          flex-direction: column;

          div {
            width: 100%;
          }
        }
      }
    }
  }
  @media screen and (max-width: 426px) {
    padding: 32px 16px 48px 16px;
  }
`;

export default Header;
