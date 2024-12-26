import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const TopNavDesktop = () => {
  return (
    <StyledWrapper>
      <nav className="top">
        <div>
          <div className="navigation">
            <Link to="/">Sign in</Link>
          </div>
          <div className="navigation">
            <Link to="/">Product support</Link>
          </div>
          <div className="navigation">
            <Link to="/">Company</Link>
          </div>
          <div className="navigation">
            <Link to="/">Contact us</Link>
          </div>
          <div className="menubar">
            <span>Language</span>
            <div className="menu">
              <div>
                <div>
                  <Link to="/">English</Link>
                  <Link to="/">French</Link>
                  <Link to="/">German</Link>
                  <Link to="/">Italian</Link>
                  <Link to="/">Spanish</Link>
                  <Link to="/">Portuguese</Link>
                  <Link to="/">Dutch</Link>
                  <Link to="/">Polish</Link>
                  <Link to="/">Swedish</Link>
                  <Link to="/">Azerbaijan</Link>
                  <Link to="/">Norwegian</Link>
                  <Link to="/">Russian</Link>
                  <Link to="/">Czech</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .top {
    max-width: 1120px;
    position: relative;
    margin: 0 auto;
    padding: 4px 0;
    div {
      display: flex;
      -webkit-box-pack: end;
      justify-content: flex-end;
      gap: 16px;

      .navigation,
      .menubar {
        a,
        span {
          position: relative;
          font-size: 14px;
          -webkit-font-smoothing: antialiased;
          text-decoration: none;
          color: var(--black);
          cursor: pointer;
        }

        a::after,
        span::after {
          content: "";
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 1px;
          background-color: var(--black);
          transition: width 0.3s ease;
        }

        a:hover::after,
        span:hover::after {
          width: 100%;
        }
      }

      .menubar {
        .menu {
          display: none;
          position: absolute;
          background: var(--white);
          right: 0;
          left: auto;
          box-shadow: rgba(0, 0, 0, 0.15) 0px 16px 24px;
          top: calc(100% + 1px);
          div {
            display: flex;
            flex-direction: column;
            gap: 24px;
            padding: 24px 32px;

            div {
              -webkit-box-align: center;
              align-items: center;
              display: flex;
              flex-direction: column;
              gap: 8px;
              line-height: 1.5;
              grid-column-end: span 3;
            }
          }
        }
      }

      .menubar:hover .menu {
        display: block;
      }
    }
  }
`;

export default TopNavDesktop;
