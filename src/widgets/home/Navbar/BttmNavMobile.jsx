import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const BottomNavMobile = () => {
  return (
    <StyledWrapper>
      <button>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M9.921 13.596 4.314 7.99 9.9 2.403l1.202 1.202L6.718 7.99l4.405 4.405-1.202 1.202Z"
            fill="currentColor"
          ></path>
        </svg>
      </button>
      <div>
        <div>
          <div>
            <Link to="/">Overview</Link>
          </div>
          <div>
            <Link to="/">Projects</Link>
          </div>
          <div>
            <Link to="/">Our Benefits</Link>
          </div>
          <div>
            <Link to="/">Reviews</Link>
          </div>
        </div>
      </div>
      <button>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="m6.079 2.404 5.607 5.607L6.1 13.597l-1.202-1.202L9.282 8.01 4.877 3.606l1.202-1.202Z"
            fill="currentColor"
          ></path>
        </svg>
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  padding: 12px 8px;
`;

export default BottomNavMobile;
