import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const BottomNavMobile = () => {
  const navigationRef = useRef(null);
  const [showLeftBtn, setShowLeftBtn] = useState(false);
  const [showRightBtn, setShowRightBtn] = useState(false);

  // For touch-based scrolling
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollStart, setScrollStart] = useState(0);

  useEffect(() => {
    updateButtonVisibility();
    const nav = navigationRef.current;

    // Listen to scroll events
    nav.addEventListener("scroll", updateButtonVisibility);

    return () => {
      nav.removeEventListener("scroll", updateButtonVisibility);
    };
  }, []);

  const updateButtonVisibility = () => {
    const nav = navigationRef.current;
    if (!nav) return;

    setShowLeftBtn(nav.scrollLeft > 0);
    setShowRightBtn(nav.scrollLeft < nav.scrollWidth - nav.clientWidth);
  };

  const scrollLeft = () => {
    navigationRef.current.scrollBy({ left: -200, behavior: "smooth" });
  };

  const scrollRight = () => {
    navigationRef.current.scrollBy({ left: 200, behavior: "smooth" });
  };

  // Touch event handlers
  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX);
    setScrollStart(navigationRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const currentX = e.touches[0].pageX;
    const distanceMoved = startX - currentX;
    navigationRef.current.scrollLeft = scrollStart + distanceMoved;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    <StyledWrapper>
      {showLeftBtn && (
        <button className="scroll-btn left" onClick={scrollLeft}>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.921 13.596 4.314 7.99 9.9 2.403l1.202 1.202L6.718 7.99l4.405 4.405-1.202 1.202Z"
              fill="currentColor"
            ></path>
          </svg>
        </button>
      )}
      <div
        className="navigation"
        ref={navigationRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
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
      {showRightBtn && (
        <button className="scroll-btn right" onClick={scrollRight}>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="m6.079 2.404 5.607 5.607L6.1 13.597l-1.202-1.202L9.282 8.01 4.877 3.606l1.202-1.202Z"
              fill="currentColor"
            ></path>
          </svg>
        </button>
      )}
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  padding: 12px 8px;
  display: none;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 2px 12px;
  background: rgb(246, 240, 230);
  border-bottom: 1px solid rgb(235, 227, 214);
  border-top: 1px solid rgb(235, 227, 214);
  width: 100%;
  button {
    border: none;
    outline: none;
    background-color: transparent;
    cursor: pointer;
  }

  button:first-of-type {
    mask-image: linear-gradient(to right, black 80%, rgba(0, 0, 0, 0) 100%);
  }

  button:last-of-type {
    mask-image: linear-gradient(to left, black 80%, rgba(0, 0, 0, 0) 100%);
  }

  .navigation {
    overflow: auto hidden;
    padding: 0px 8px;
    width: calc(100% - 12px);
    scrollbar-width: none;
    touch-action: pan-x; /* Enable horizontal scrolling */

    div {
      display: flex;
      flex-wrap: nowrap;
      gap: 16px;

      div {
        a {
          font-weight: 600;
          color: var(--black);
          line-height: calc(1.25em + 6px);
          min-height: calc(1.25em + 8px);
          font-size: 16px;
          white-space: nowrap;
          opacity: 0.6;
          transition: 600ms cubic-bezier(0.7, 0, 0.3, 1);
        }
        a:hover {
          opacity: 1;
        }
      }
    }
  }

  @media screen and (max-width: 426px) {
    display: flex;
  }
`;

export default BottomNavMobile;
