import React, { useState, useRef, useEffect, useCallback } from "react";
import styled from "styled-components";

import { Services } from "../../constants";

const Service = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);
  const totalSlides = 4;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  }, [totalSlides]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, [nextSlide]);

  const goToSlide = (index) => {
    if (sliderRef.current) {
      const sliderWidth = sliderRef.current.offsetWidth;
      sliderRef.current.scrollTo({
        left: sliderWidth * index,
        behavior: "smooth",
      });
    }
    setCurrentIndex(index);
  };

  // Handle left and right arrow clicks
  const prevSlide = () => {
    const newIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    goToSlide(newIndex);
  };

  return (
    <StyledWrapper>
      <div className="content">
        <div>
          <h2>Webelder for Service</h2>
          <h2>Perfect the customer experience</h2>
        </div>
        <div className="feedback">
          <button onClick={prevSlide}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m5.052 12.85 3.549 3.55-1.202 1.202L1.798 12l5.601-5.602 1.202 1.203-3.549 3.549H21v1.7H5.052Z"
                fill="currentColor"
              ></path>
            </svg>
          </button>

          <div className="slider">
            <div className="slider-list" ref={sliderRef}>
              <div
                className="slider-track"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {Services.map((review, index) => (
                  <div
                    key={index}
                    className={`slider-item ${
                      index === currentIndex ? "active" : ""
                    }`}
                    style={{
                      minWidth: "100%",
                      transition: "transform 0.5s ease-in-out",
                    }}
                  >
                    <div className="card">
                      <div>
                        <div className="img">
                          <img src={review.img} alt={review.title} />
                        </div>
                      </div>
                      <div>
                        <h2>{review.title}</h2>
                        <blockquote>“{review.text}”</blockquote>
                        <cite>
                          <div>
                            <p>{review.author}</p>
                            <p>{review.position}</p>
                          </div>
                        </cite>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="slider_partners_logo">
                <nav>
                  {Services.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={index === currentIndex ? "active" : ""}
                    >
                      <span></span>
                    </button>
                  ))}
                </nav>
              </div>
            </div>
          </div>

          <button onClick={nextSlide}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.948 11.15 15.399 7.6l1.202-1.202L22.202 12 16.601 17.6l-1.202-1.202 3.549-3.549H3v-1.7h15.948Z"
                fill="currentColor"
              ></path>
            </svg>
          </button>

          <div></div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.section`
  margin: 0 auto;
  max-width: 1120px;
  .content {
    padding: 6% 0;

    div:nth-child(1) {
      h2 {
        line-height: calc(1em + 8px);
        letter-spacing: 0.75px;
        color: var(--black);
        text-align: center;
      }
      h2:nth-child(1) {
        font-weight: 700;
        font-size: 14px;
        text-transform: uppercase;
        margin: 0px 0px 8px;
      }
      h2:nth-child(2) {
        font-size: 48px;
        margin: 0px 0px 46px;
        font-weight: 800;

        @media screen and (max-width: 1024px) {
          font-size: 38px;
        }
        @media screen and (max-width: 768px) {
          font-size: 24px;
        }
      }
    }

    .feedback {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      flex-basis: 0px;
      -webkit-box-flex: 1;
      flex-grow: 1;
      max-width: 100%;
      flex-wrap: wrap;

      @media screen and (max-width: 768px) {
        flex-direction: column;
      }

      button {
        background: none;
        border: none;
        border-radius: 50%;
        transition: all 0.3s ease-in-out;
        padding: 16px;
        border: 1px solid var(--black);
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        z-index: 1;

        @media screen and (max-width: 768px) {
          display: none;
        }
      }

      button:hover {
        background-color: #f6f0e6;
      }

      .slider {
        display: flex;
        -webkit-box-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        align-items: center;
        width: 83.3333%;
        margin: 0px auto;
        overflow: hidden;

        .slider-list {
          width: 100%;
          transition: transform 0.5s ease-in-out;

          .slider-track {
            display: flex;
            margin-bottom: 32px;

            .slider-item {
              min-width: 100%;
              transition: opacity 0.3s;

              .card {
                display: flex;
                -webkit-box-align: start;
                align-items: start;
                transition: opacity 200ms cubic-bezier(0.7, 0, 0.3, 1);

                @media screen and (max-width: 768px) {
                  flex-direction: column;
                  align-items: center;
                  text-align: center;
                  -webkit-box-align: center;
                }

                div:nth-child(1) {
                  .img {
                    width: 300px;
                    background-color: #faf3e7;
                    height: 300px;

                    @media screen and (max-width: 768px) {
                      width: 100%;
                      height: 220px;
                      margin-bottom: 16px;
                    }
                  }
                }

                div:nth-child(2) {
                  padding-left: 64px;

                  h2 {
                    font-size: 14px;
                    font-stretch: condensed;
                    font-weight: 700;
                    font-family: "ABC Social", Arial, sans-serif;
                    line-height: calc(1em + 8px);
                    text-transform: uppercase;
                    -webkit-box-align: center;
                    align-items: center;
                    display: inline-flex;
                    gap: 8px;
                    margin: 0px 0px 8px;
                    color: var(--black);

                    @media screen and (max-width: 1024px) {
                      font-size: 11px;
                    }
                  }

                  @media screen and (max-width: 1024px) {
                    padding-left: 32px;
                  }

                  @media screen and (max-width: 768px) {
                    padding: 0;
                  }

                  blockquote {
                    margin: 0px 0px 12px;
                    color: var(--black);
                    font-family: Feature, Times, serif;
                    font-weight: 500;
                    margin-bottom: 24px;
                    font-size: 24px;
                    line-height: calc(1em + 8px);
                    letter-spacing: 0.75px;

                    @media screen and (max-width: 1024px) {
                      font-size: 20px;
                    }

                    @media screen and (max-width: 768px) {
                      margin-bottom: 16px;
                      font-size: 16px;
                    }
                  }

                  cite {
                    display: flex;
                    column-gap: 40px;
                    flex-direction: row;
                    margin-bottom: 16px;
                    -webkit-box-align: center;
                    align-items: center;
                    -webkit-box-pack: start;
                    justify-content: flex-start;
                    text-align: left;
                    font-style: normal;

                    @media screen and (max-width: 768px) {
                      justify-content: center;
                      -webkit-box-pack: center;
                      text-align: center;
                      margin-bottom: 0;
                    }

                    div:nth-child(1) {
                      p {
                        margin-bottom: 4px;
                        font-family: "ABC Social", Arial, sans-serif;
                        font-size: 16px;
                        line-height: calc(1em + 8px);

                        @media screen and (max-width: 1024px) {
                          font-size: 15px;
                        }

                        @media screen and (max-width: 768px) {
                          font-size: 12px;
                        }
                      }
                      p:nth-child(1) {
                        font-weight: 700;
                        margin: 0px 0px 16px;

                        @media screen and (max-width: 768px) {
                          margin: 0;
                        }
                      }
                    }
                  }
                }
              }
            }
            .slider-item .active {
              opacity: 1;
            }
          }

          .slider_partners_logo {
            nav {
              display: flex;
              margin-top: 64px;
              width: 83.3333%;
              align-items: normal;
              gap: 4px;
              margin: 0px auto;
              padding: 0px 2px;

              button {
                cursor: pointer;
                position: relative;
                background: none;
                border-width: 2px 0px 0px;
                border-right-style: initial;
                border-bottom-style: initial;
                border-left-style: initial;
                border-right-color: initial;
                border-bottom-color: initial;
                border-left-color: initial;
                border-image: initial;
                border-top-style: solid;
                border-top-color: rgb(222, 215, 202);
                display: flex;
                -webkit-box-pack: center;
                justify-content: center;
                flex: 1 1 100%;
                padding: 1.2px;
                transition: 0.1s linear;
                opacity: 0.5;
                -webkit-box-align: center;
                align-items: center;
                border-radius: 0px;
              }

              button::before {
                background: rgb(22, 20, 12);
                content: "";
                display: block;
                height: 2px;
                left: 0px;
                position: absolute;
                top: -2px;
                width: 100%;
                opacity: 0;
                animation: 10000ms linear 0s 1 normal forwards running
                  progressBar;
              }
              button.active {
                background: rgb(17, 17, 13);
              }
            }
          }
        }
      }
    }
  }
`;

export default Service;
