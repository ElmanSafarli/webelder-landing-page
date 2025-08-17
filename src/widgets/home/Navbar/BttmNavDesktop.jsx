import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// Components
import { AccentBtn, LogoName } from "../../../shared";

const BottomNavDesktop = () => {
  return (
    <StyledWrapper>
      <nav className="bottom">
        <div>
          <div className="logo">
            <LogoName link="/" width="120" height="69" fill="black" />
          </div>
          <div className="navigation">
            <div className="menubar">
              <span>Products</span>
              <div className="menu"></div>
            </div>
            <div className="navigation">
              <Link to="/prices">Pricing</Link>
            </div>
            <div className="navigation">
              <Link>Solutions</Link>
            </div>
            <div className="navigation">
              <Link>Resources</Link>
            </div>
          </div>
          <div className="btn_group">
            <AccentBtn content="Сontact us" link="/contact" />
          </div>
        </div>
      </nav>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .bottom {
    position: relative;
    margin: 0 auto;
    max-width: 1120px;

    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 20px;

      .navigation {
        -moz-box-align: stretch;
        align-items: stretch;
        align-self: stretch;
        display: flex;
        -moz-box-pack: center;
        justify-content: center;
        margin: 0px auto;

        a {
          cursor: pointer;
        }
        span {
          cursor: default;
        }

        a,
        span {
          -moz-box-align: center;
          align-items: center;
          font-size: 16px;
          border-radius: 0px;
          font-stretch: expanded;
          font-weight: 600;
          display: flex;
          line-height: calc(1.25em + 6px);
          flex-shrink: 0;
          padding: 16px;
          position: relative;
          color: var(--black);
        }

        a:hover:after,
        span:hover:after {
          width: 100%;
        }

        a:after,
        span:after {
          background: rgb(22, 20, 12);
          bottom: 0px;
          content: "";
          display: block;
          height: 3px;
          left: 0px;
          position: absolute;
          transition: width 0.25s cubic-bezier(0.7, 0, 0.3, 1);
          width: 0%;
        }

        .menubar {
          .menu {
            max-width: 1120px;
            min-width: 320px;
            position: absolute;
            top: calc(100% + 1px);
            transition: visibility 0s 250ms, opacity 0s 250ms;
            width: 100%;
            z-index: 20;
            box-shadow: rgba(0, 0, 0, 0.15) 0px 16px 24px;
            background: var(--white);
            left: 0px;
            display: none;
            height: 200px;
          }
        }

        .menubar:hover .menu {
          display: block;
        }
      }
    }
  }
`;

export default BottomNavDesktop;
