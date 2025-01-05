import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const MainBtn = () => {
  return (
    <StyleMainBtn>
      <Link className="main">
        <div className="original">Button</div>
        <div className="letters">
          <span>B</span>
          <span>U</span>
          <span>T</span>
          <span>T</span>
          <span>O</span>
          <span>N</span>
        </div>
      </Link>
    </StyleMainBtn>
  );
};

export const SecondaryBtn = () => {
  return <Link>Button</Link>;
};

const StyleMainBtn = styled.div`
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
    font-size: 100%;
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
    font-weight: 900;
    overflow: hidden;
    padding: 1.2rem 3rem;
    position: relative;
    text-transform: uppercase;
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
