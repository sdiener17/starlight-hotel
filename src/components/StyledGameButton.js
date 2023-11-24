import React from "react";
import styled from "styled-components";

export default function StyledGameButton({
  buttonContent,
  buttonDisabled,
  handleButtonClick,
}) {
  return (
    <PageWrapper>
      <button
        className="gameButton"
        disabled={buttonDisabled}
        onClick={handleButtonClick}
      >
        {buttonContent}
      </button>
    </PageWrapper>
  );
}

const PageWrapper = styled.button`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  padding: 1rem 1.5rem;
  font-size: 1.5rem;
  .gameButton {
    background-color: gray;
  }
  .gameButton:hover {
    background-color: red;
  }
`;
