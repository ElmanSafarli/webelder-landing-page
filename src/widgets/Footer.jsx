import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTiktok,
  faTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

import { LogoName } from "../shared";
const Footer = () => {
  return (
    <StyledWrapper>
      <footer>
        <div className="top"></div>
        <div className="middle">
          <h3>
            How can we help? <Link to="/contact">Contact us.</Link>
          </h3>
          <div className="social_links">
            <ul>
              <li>
                <Link>
                  <FontAwesomeIcon icon={faInstagram} />
                </Link>
              </li>
              <li>
                <Link>
                  <FontAwesomeIcon icon={faTiktok} />
                </Link>
              </li>
              <li>
                <Link>
                  <FontAwesomeIcon icon={faTwitter} />
                </Link>
              </li>
              <li>
                <Link>
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="bottom">
          <LogoName link="/" width="100%" height="auto" fill="white" />
        </div>
      </footer>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.section`
  background-color: var(--black);
  padding: 40px 0;
  @media screen and (max-width: 768px) {
    padding: 56px 16px 60px;
  }

  footer {
    margin: 0 auto;
    max-width: 1120px;
    display: flex;
    flex-direction: column;
    gap: 64px;

    .middle {
      display: flex;
      aign-items: center;
      justify-content: space-between;
      gap: 20px;
      border-top: 1px solid rgb(66, 67, 62);
      border-bottom: 1px solid rgb(66, 67, 62);
      padding: 64px 0px;

      h3 {
        color: var(--white);
        font-size: 42px;
        font-weight: 500;

        a {
          color: var(--accent);

          display: inline-block;
          position: relative;

          &::after {
            content: "";
            position: absolute;
            width: 100%;
            transform: scaleX(0);
            height: 3.2px;
            bottom: 0;
            left: 0;
            background-color: var(--accent);
            transition: transform 0.25s ease-out;
            transform-origin: bottom right;
          }

          &:hover::after {
            transform: scaleX(1);
            transform-origin: bottom left;
          }
        }

        @media screen and (max-width: 1120px) {
          font-size: 32px;
        }

        @media screen and (max-width: 768px) {
          font-size: 24px;
        }
      }

      .social_links {
        ul {
          list-style: none;
          display: flex;
          -webkit-box-pack: end;
          justify-content: flex-end;
          gap: 16px;
          li {
            a {
              color: var(--white);
              font-size: 24px;
              transition: all 0.3s ease-in-out;

              svg {
                margin-top: 12px;
              }
            }

            a:hover {
              color: var(--accent);
            }
          }
        }
      }

      @media screen and (max-width: 768px) {
        flex-direction: column;
      }
    }
  }
`;

export default Footer;
