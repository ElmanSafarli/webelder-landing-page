import React from "react";
// import { Link } from "react-router-dom";
import styled from "styled-components";

const MobilePlans = () => {
  return (
    <StyledWrapper>
      <div className="mobile_plansSlider">
        <h6>Mobile Plans</h6>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.section`
  margin: 0 auto;
  max-width: 1120px;
`;

export default MobilePlans;
