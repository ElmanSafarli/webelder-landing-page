import React from "react";
import styled from "styled-components";

// Components
import { AccentBtn, HamburgerMobileBtn, LogoName } from "../../../shared";

const TopNavMobile = () => {
  return (
    <StyledWrapper>
      <div>
        <div className="logo">
          <LogoName link="/" width="120" height="62" fill="black" />
        </div>
        <div>
          <div className="accent-btn">
            <AccentBtn content="Contact us" link="/" />
          </div>

          <HamburgerMobileBtn />
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.nav`
  border-bottom: 1px solid #ded7cad9;
  padding: 8px;
  div {
    display: flex;
    justify-content: space-between;
    -moz-box-align: center;
    align-items: center;
    gap: 14px;
    position: relative;
  }

  @media screen and (max-width: 426px) {
    div {
      .logo {
        a {
          svg {
            width: 92px;
            height: 36px;
          }
        }
      }

      .accent-btn {
        display: none;
      }
    }
  }
`;

export default TopNavMobile;
