import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// Components
import { TopNavDesktop } from "./Navbar/index";

const Navbar = () => {
  return (
    <StyledWrapper>
      <div className="mobile_nav"></div>
      <div className="desktop_nav">
        <TopNavDesktop />
        <nav className="bottom">
          <div>
            <div className="logo">
              <Link to="/">Logo</Link>
            </div>
            <div className="navigation">
              <div className="menubar">
                <span>Products</span>
                <div className="menu"></div>
              </div>
              <div className="navigation">
                <Link>Pricing</Link>
              </div>
              <div className="navigation">
                <Link>Solutions</Link>
              </div>
              <div className="navigation">
                <Link>Resources</Link>
              </div>
            </div>
            <div className="btn_group"></div>
          </div>
        </nav>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .desktop_nav {
    border-bottom: 1px solid #ded7cad9;
    transition-property: transform;
    transition-duration: 0.5s;
    position: sticky;
    top: -50px;
  }
`;

export default Navbar;
