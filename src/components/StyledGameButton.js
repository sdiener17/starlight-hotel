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
  .gameButton {
    /* position: -webkit-sticky; */
    /* position: sticky; */
    /* top: 0; */
    padding: 10px;
    border-radius: 5px;
    font-size: 1.5rem;
    font-family: "Pixelify Sans", sans-serif;
    background-color: gray;
  }
  .gameButton:hover {
    background-color: red;
  }
`;
