import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// Components
import { AccentBtn, LogoName } from "../../../shared";

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faPenRuler,
  faObjectUngroup,
} from "@fortawesome/free-solid-svg-icons";
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
              <span className="nav-link">Services</span>
              <div className="menu">
                <div className="menu-inner">
                  <div className="menu-items">
                    <span className="preview-label">Featured service</span>
                    <ul>
                      <li>
                        <Link to="/">
                          <span>
                            <FontAwesomeIcon icon={faCode} />
                          </span>
                          <span>Web application development</span>
                        </Link>
                      </li>

                      <li>
                        <Link to="/">
                          <span>
                            <FontAwesomeIcon icon={faObjectUngroup} />
                          </span>
                          <span>UI/UX design</span>
                        </Link>
                      </li>

                      <li>
                        <Link to="/">
                          <span>
                            <FontAwesomeIcon icon={faPenRuler} />
                          </span>
                          <span> Branding & Logos </span>
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="menu-preview">
                    <span className="preview-label">Our services</span>

                    <h4>Digital products & design</h4>

                    <p>
                      We help companies design, build and scale modern digital
                      products — from idea to production.
                    </p>

                    <div className="ecosystem-card">
                      <div className="ecosystem">
                        <div className="core">
                          <span>Digital</span>
                          <span>Products</span>
                        </div>

                        <div className="nodes">
                          <div className="node design">Design</div>
                          <div className="node dev">Development</div>
                          <div className="node launch">Launch</div>
                          <div className="node brand">Brand</div>
                        </div>
                      </div>

                      <div className="process">
                        <span>Discover</span>
                        <span>→</span>
                        <span>Design</span>
                        <span>→</span>
                        <span>Build</span>
                        <span>→</span>
                        <span>Scale</span>
                      </div>
                    </div>

                    <Link to="/services" className="preview-btn">
                      View all services →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="navigation">
              <Link className="nav-link" to="/prices">
                Pricing
              </Link>
            </div>
            <div className="navigation">
              <Link className="nav-link" to="/projects">
                Portfolio
              </Link>
            </div>
            <div className="navigation">
              <Link className="nav-link" to="/">
                Resources
              </Link>
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

        .nav-link {
          cursor: pointer;
        }

        .nav-link {
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

        .nav-link:hover:after {
          width: 100%;
        }

        .nav-link:after {
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
            position: absolute;
            top: 100%;
            margin-top: 12px;
            left: 50%;
            transform: translateX(-50%);

            width: 100%;
            max-width: 652px;
            background: var(--white);
            border-radius: 12px;
            box-shadow: 0 16px 32px rgba(0, 0, 0, 0.14);

            padding: 20px;
            display: none;
            z-index: 30;

            .menu-inner {
              display: flex;
              align-items: start;
            }

            .menu-preview {
              width: 60%;
              padding: 16px 18px;
              border-left: 1px solid #eee;

              display: flex;
              flex-direction: column;
              align-items: start;
              gap: 10px;
            }

            .preview-label {
              font-size: 11px;
              font-weight: 600;
              text-transform: uppercase;
              letter-spacing: 0.08em;
              color: var(--gray);
            }

            .menu-preview h4 {
              font-size: 17px;
              font-weight: 600;
              color: var(--black);
              margin-top: 4px;
            }

            .menu-preview p {
              font-size: 13px;
              line-height: 1.5;
              color: #555;
              margin-bottom: 4px;
            }

            .preview-card {
              margin-top: 6px;
              width: auto;
            }

            /* CTA */
            .preview-btn {
              margin-top: 28px;
              align-self: flex-start;

              font-size: 13px;
              font-weight: 600;
              color: var(--black);
              text-decoration: none;

              padding: 8px 14px;
              border-radius: 20px;

              background: #f3f3f3;
              transition: all 0.25s ease;
            }
            .preview-btn:hover {
              background: #111;
              color: #fff;
            }

            // Preview Img
            .ecosystem-card {
              position: relative;
              display: flex;
              flex-direction: column;
              gap: 0;
            }

            .ecosystem {
              position: relative;
              height: 118px;
              display: flex;
              align-items: center;
              justify-content: center;
              width: 100%;
              border-radius: 14px;
              padding: 14px;
              background: linear-gradient(
                135deg,
                rgba(110, 124, 255, 0.12),
                rgba(181, 109, 255, 0.12),
                rgba(255, 109, 179, 0.12)
              );
            }

            .core {
              background: #fff;
              border-radius: 18px;
              padding: 14px 18px;
              text-align: center;
              box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
            }

            .core span {
              display: block;
              font-size: 13px;
              font-weight: 700;
            }

            .nodes {
              position: absolute;
              inset: 0;
            }

            .node {
              position: absolute;
              font-size: 11px;
              padding: 6px 10px;
              border-radius: 16px;
              font-weight: 600;
              background: #fff;
              box-shadow: 0 6px 18px rgba(0, 0, 0, 0.12);
            }

            .node.design {
              top: 10px;
              left: 20%;
              color: #6e7cff;
            }

            .node.dev {
              top: 20px;
              right: 18%;
              color: #b56dff;
            }

            .node.launch {
              bottom: 14px;
              right: 24%;
              color: #ff6db3;
            }

            .node.brand {
              bottom: 18px;
              left: 22%;
              color: #3bb273;
            }

            .process {
              margin-top: 12px;
              display: flex;
              justify-content: space-between;
              font-size: 11px;
              font-weight: 600;
              color: #444;
              opacity: 0.85;
            }

            .menu-items {
              display: flex;
              flex-direction: column;
              gap: 16px;
              align-items: start;
              justify-content: start;

              ul {
                list-style: none;
                margin: 0px;
                padding: 0px;

                li {
                  a {
                    display: flex;
                    margin-bottom: 2px;
                    flex-direction: row;
                    line-height: calc(1em + 6px);
                    gap: 4px;
                    padding: 8px;
                    text-decoration: none;
                    transition: 100ms linear;
                    -webkit-box-align: center;
                    align-items: center;
                    border-radius: 8px;
                    color: var(--black);

                    span:first-child {
                      margin: 0px 8px 0px 0px;
                      min-width: 16px;
                      height: 16px;
                      width: 16px;
                    }

                    span:last-child {
                      font-weight: 600;
                      font-size: 14px;
                    }
                  }

                  a:hover {
                    background: #f3f3f3;
                  }
                }
              }
            }
          }

          .menu::before {
            content: "";
            position: absolute;
            top: -12px;
            left: 0;
            right: 0;
            height: 12px;
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
