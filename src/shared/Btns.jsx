import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const AccentBtn = ({ content, link }) => {
  return (
    <StyleAccentBtn>
      <Link to={link} className="main">
        <div className="original">{content}</div>
        <div className="letters">
          {content.split("/n").map((word, wordIndex) => (
            <span key={wordIndex} className="word">
              {word.split("").map((letter, letterIndex) => (
                <span key={letterIndex}>{letter}</span>
              ))}
            </span>
          ))}
        </div>
      </Link>
    </StyleAccentBtn>
  );
};

export const SecondaryBtn = () => {
  return <Link>Button</Link>;
};

export const HamburgerMobileBtn = () => {
  return (
    <StyleHamburgerMobileBtn>
      <svg
        width="24px"
        height="24px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 18L20 18"
          stroke="#000000"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M4 12L20 12"
          stroke="#000000"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M4 6L20 6"
          stroke="#000000"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </StyleHamburgerMobileBtn>
  );
};

const StyleHamburgerMobileBtn = styled.button`
  border: none;
  background-color: transparent;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  svg {
    transition: all 0.3s ease-in-out;
  }

  @media screen and (max-width: 426px) {
    svg {
      width: 18px;
      height: 18px;
    }
  }
`;

const StyleAccentBtn = styled.div`
  .main,
  .main *,
  .main :after,
  .main :before,
  .main:after,
  .main:before {
    border: 0 solid;
    box-sizing: border-box;
  }

  .main {
    -webkit-tap-highlight-color: transparent;
    background-color: #000;
    background-image: none;
    color: #fff;
    cursor: pointer;
    font-size: 16px;
    line-height: 1.5;
    margin: 0;
    -webkit-mask-image: -webkit-radial-gradient(#000, var(--accent));
    padding: 0;
  }

  .main:disabled {
    cursor: default;
  }

  .main:-moz-focusring {
    outline: auto;
  }

  .main svg {
    display: block;
    vertical-align: middle;
  }

  .main [hidden] {
    display: none;
  }

  .main {
    border: 1px solid;
    border-radius: 999px;
    box-sizing: border-box;
    display: block;
    font-weight: 700;
    overflow: hidden;
    padding: 10px 20px;
    position: relative;
  }

  .main .original {
    background: var(--accent);
    color: #fff;
    display: grid;
    inset: 0;
    place-content: center;
    position: absolute;
    transition: transform 0.2s cubic-bezier(0.87, 0, 0.13, 1);
  }

  .main:hover .original {
    transform: translateY(100%);
  }

  .main .letters {
    display: inline-flex;
  }

  .main span {
    opacity: 0;
    transform: translateY(-15px);
    transition: transform 0.2s cubic-bezier(0.87, 0, 0.13, 1), opacity 0.2s;
  }

  .main span:nth-child(2n) {
    transform: translateY(15px);
  }

  .main:hover span {
    opacity: 1;
    transform: translateY(0);
  }

  .main:hover span:nth-child(2) {
    transition-delay: 0.1s;
  }

  .main:hover span:nth-child(3) {
    transition-delay: 0.2s;
  }

  .main:hover span:nth-child(4) {
    transition-delay: 0.3s;
  }

  .main:hover span:nth-child(5) {
    transition-delay: 0.4s;
  }

  .main:hover span:nth-child(6) {
    transition-delay: 0.5s;
  }
`;
