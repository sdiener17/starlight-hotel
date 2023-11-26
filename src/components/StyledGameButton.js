/* Written by: Sarah Diener (sdiener17)
 * Created: 11/24/23
 * Description: Defines a common button style used throughout the game.
 * Input:
 * - buttonContent: The text to be displayed on the button.
 * - buttonDisabled: true/false if the button should be disabled or not.
 * - handleButtonClick: The event handler for when the button is clicked (method defined in parent component).
 * - buttonId: Optional id for the button used as the 'name' attribute. Used in some components to identify the correct button clicked.
 * Used By: LaundryRoom, NewGame, WhatNext, WhereTo
 */
import React from "react";
import styled from "styled-components";

export default function StyledGameButton({
  buttonContent,
  buttonDisabled,
  handleButtonClick,
  buttonId = -1,
}) {
  return (
    <PageWrapper>
      <button
        name={buttonId}
        className="gameButton"
        disabled={buttonDisabled}
        onClick={handleButtonClick}
      >
        {buttonContent}
      </button>
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  .gameButton {
    /* position: -webkit-sticky; */
    /* position: sticky; */
    /* top: 0; */
    padding: 10px;
    border-radius: 5px;
    font-size: 1.2rem;
    font-family: "Pixelify Sans", sans-serif;
    background-color: var(--buttonOne);
  }
  .gameButton:hover {
    background-color: var(--buttonOneHover);
  }
`;
