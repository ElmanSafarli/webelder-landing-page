import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// SVG
import { HomeInfoList } from "../../shared";

const Info = () => {
  return (
    <StyledWrapper>
      <div>
        {/* Top block */}
        <div className="infoLine">
          <div className="infoMain">
            <h2>Return on investment</h2>
            <h2>Maximize your ROI</h2>
            <p>
              You’ll save time and money with Zendesk. But don’t take it from
              us; take it from Forrester. Their Total Economic Impact™ (TEI)
              study showed 286% return on investment over three years.
            </p>
            <Link to="/" className="link link--carpo">
              Reed the full report
            </Link>
          </div>
          <div className="infoTab"></div>
          <div className="infoList">
            <ul>
              <li>
                <div>
                  <HomeInfoList />
                </div>
                <div>
                  <h5>Improve time to value</h5>
                  <p>
                    Self-service and automation deflect up to 15% of agent
                    contacts. Resolve insights.
                  </p>
                </div>
              </li>
              <li>
                <div>
                  <HomeInfoList />
                </div>
                <div>
                  <h5>Reduce effort per ticket</h5>
                  <p>
                    Self-service and automation deflect up to 15% of agent
                    contacts. Resolve remaining tickets faster with rich
                    customer insights.
                  </p>
                </div>
              </li>
              <li>
                <div>
                  <HomeInfoList />
                </div>
                <div>
                  <h5>Keep costs low</h5>
                  <p>
                    You don’t need a developer army to start using Zendesk, or
                    an influx of agents to keep using it. Efficiency and
                    automation are baked in.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        {/* Priveleges */}
        <div className="infoPriveleges">
          <div className="infoPrivelegesList">
            <div className="infoPrivelegesItem">
              <h3>60%</h3>
              <p>Faster Launch</p>
              <p>
                Clients launch products 60% faster with our development support
              </p>
            </div>
            <div className="infoPrivelegesItem">
              <h3>100+</h3>
              <p>Projects</p>
              <p>Successfully delivered across multiple industries</p>
            </div>
            <div className="infoPrivelegesItem">
              <h3>30</h3>
              <p>Days</p>
              <p>Rapid MVP development for startups and businesses</p>
            </div>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.section`
  padding: 88px 0px;

  @media screen and (max-width: 768px) {
    padding: 32px 16px 48px 16px;
  }

  .infoLine {
    display: flex;
    box-sizing: border-box;
    flex-wrap: wrap;

    .infoMain {
      flex: 0 0 41.6667%;
      -webkit-box-flex: 0;
      max-width: 41.6667%;

      @media screen and (max-width: 768px) {
        flex: 0 0 100%;
        max-width: 100%;
      }

      h2,
      p {
        color: var(--black);
      }

      h2:first-of-type {
        line-height: 1.3;
        text-transform: uppercase;
        letter-spacing: 0.75px;
        font-weight: 600;
        font-size: 14px;
        margin: 0px 0px 8px;

        @media screen and (max-width: 768px) {
          font-size: 12px;
        }
      }

      h2:nth-of-type(2) {
        margin: 0px 0px 24px;
        font-weight: 800;
        font-size: 42px;
        line-height: 1.15;

        @media screen and (max-width: 768px) {
          font-size: 30px;
          font-weight: 600;
        }
      }

      p {
        line-height: 1.45;
        margin: 0px 0px 16px;
        font-weight: 400;
        font-size: 16px;

        @media screen and (max-width: 768px) {
          font-size: 14px;
        }
      }

      .link {
        cursor: pointer;
        font-size: 18px;
        position: relative;
        white-space: nowrap;
        color: var(--black);
        text-decoration: none;
        font-weight: 600;
      }

      .link::before,
      .link::after {
        position: absolute;
        width: 100%;
        height: 1.2px;
        background: currentColor;
        top: 100%;
        left: 0;
        pointer-events: none;
      }

      .link::before {
        content: "";
        transform-origin: 0% 50%;
        transform: scale3d(0, 1, 1);
        transition: transform 0.3s;
      }

      .link:hover::before {
        transform: scale3d(1, 1, 1);
      }

      .link::after {
        content: "";
        top: calc(100% + 4px);
        transition: transform 0.3s;
        transform-origin: 100% 50%;
      }

      .link:hover::after {
        transform: scale3d(0, 1, 1);
      }
    }

    .infoTab {
      flex: 0 0 16.6667%;
      -webkit-box-flex: 0;
      max-width: 16.6667%;

      @media screen and (max-width: 768px) {
        flex: 0 0 100%;
        max-width: 100%;
      }
    }

    .infoList {
      flex: 0 0 41.6667%;
      -webkit-box-flex: 0;
      max-width: 41.6667%;

      @media screen and (max-width: 768px) {
        flex: 0 0 100%;
        max-width: 100%;
        margin-top: 32px;
      }

      ul {
        list-style: none;
        padding-left: 16px;
        margin-bottom: 28px;

        li {
          display: flex;
          gap: 16px;
          margin: 12px 0px;

          div:first-of-type {
            padding-top: 2px;
          }

          div:nth-of-type(2) {
            h5,
            p {
              color: var(--black);
              line-height: 1.45;
            }

            h5 {
              margin-bottom: 2px;
              font-size: 16px;
              margin-top: 1px;
              font-weight: 600;
            }

            p {
              margin: 0px 0px 16px;
            }
          }
        }
      }
    }
  }

  .infoPriveleges {
    margin-top: 64px;

    @media screen and (max-width: 1280px) {
      margin-top: 56px;
    }

    @media screen and (max-width: 768px) {
      margin-top: 48px;
    }

    .infoPrivelegesList {
      display: flex;
      gap: 24px;
      -webkit-box-pack: center;
      justify-content: center;

      @media screen and (max-width: 768px) {
        gap: 16px;
        flex-wrap: wrap;
      }

      .infoPrivelegesItem {
        max-width: 300px;
        text-align: center;
        color: var(--black);

        h3 {
          font-size: 74px;
          margin: 0px 0px 10px;
          font-weight: 400;

          @media screen and (max-width: 1120px) {
            font-size: 64px;
          }

          @media screen and (max-width: 768px) {
            font-size: 48px;
          }
        }

        p:first-of-type {
          margin: 0px 0px 4px;
          font-weight: 600;
          line-height: 1.45;
          font-size: 16px;

          @media screen and (max-width: 768px) {
            font-size: 15px;
          }
        }

        p:nth-of-type(2) {
          font-weight: 400;
          line-height: 1.4;
          font-size: 16px;

          @media screen and (max-width: 768px) {
            font-size: 14px;
          }
        }
      }
    }
  }
`;

export default Info;
