import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { SimpleWhite } from "../../shared";

const CTA = () => {
  return (
    <StyledWrapper>
      <div className="cta-banner">
        <div>
          <h3>Start your project today</h3>
        </div>
        <div className="cta-links">
          <Link to="/" className="first">
            View portfolio
          </Link>
          <SimpleWhite content="Dashboard" link="/" />
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.section`
  margin: 0 auto;
  max-width: 1120px;

  @media screen and (max-width: 768px) {
    padding: 56px 16px 60px;
  }
  .cta-banner {
    background-color: var(--black);
    padding: 64px 96px;
    text-align: inherit;
    text-decoration: none;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 32px;
    border-radius: 40px;

    @media screen and (max-width: 768px) {
      padding: 2rem 1.5rem;
      text-align: center;
      gap: 28px;
      justify-content: center;
    }

    h3 {
      color: var(--white);
      font-weight: 500;
      font-size: 28px;
      line-height: 1.25;

      @media screen and (max-width: 768px) {
        font-size: 22px;
      }
    }

    .cta-links {
      display: flex;
      gap: 16px;

      @media screen and (max-width: 768px) {
        flex-direction: column;
        width: 100%;
        gap: 10px;
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

        @media screen and (max-width: 768px) {
          width: 100%;
        }
      }

      .first:hover {
        background-color: var(--white);
        color: var(--black);
      }
    }
  }
`;

export default CTA;
