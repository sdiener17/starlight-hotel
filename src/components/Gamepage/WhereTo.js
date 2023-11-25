import React from "react";
import styled from "styled-components";
import StyledGameButton from "../StyledGameButton";

export default function WhereTo({ setCurrentLocation }) {
  const handleLaundryClick = (e) => {
    setCurrentLocation("laundry");
  };
  const handleLaundryOfficeClick = (e) => {
    //TODO: Change to laundryOffice
    setCurrentLocation("laundry");
  };
  return (
    <PageWrapper>
      <h2>Where To?</h2>
      <StyledGameButton
        buttonContent={"Laundry Room"}
        buttonDisabled={false}
        handleButtonClick={handleLaundryClick}
      />
      <StyledGameButton
        buttonContent={"Laundry Office"}
        buttonDisabled={false}
        handleButtonClick={handleLaundryOfficeClick}
      />
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  padding: 1rem 1.5rem;
`;
