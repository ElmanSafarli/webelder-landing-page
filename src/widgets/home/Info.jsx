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
            <Link to="/">Reed the full report</Link>
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
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.section`
  padding: 88px 0px;
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
          font-size: 34px;
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
      }

      ul {
        list-style: none;
        padding-left: 16px;
        margin-bottom: 32px;

        li {
          display: flex;
          gap: 16px;
          margin: 12px 0px;

          div:first-of-type {
            padding-top: 2px;
          }

          div:nth-of-type(2) {
            h5,
            p{
                color: var(--black);
                line-height: 1.45;
            }

            h5 {
                margin-bottom: 2px;        
                font-size: 16px; 
                margin-top: 1px;
                font-weight: 600;
            }

            p{
                margin: 0px 0px 16px;
            }
        }
      }
    }
  }
`;

export default Info;
