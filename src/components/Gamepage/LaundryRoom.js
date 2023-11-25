/* Written by: Sarah Diener (sdiener17)
 * Created: 11/24/23
 * Description: Displays the laundry room and it's options for the player.
 * Input:
 * - setCurrentLocation: passed in from the main game page to allow this component to move the player to the laundry room after
 * the starting scene is finished.
 * Used By: Gamepage
 */
import React from "react";
import styled from "styled-components";
import StyledGameButton from "../StyledGameButton";

export default function LaundryRoom({ setCurrentLocation }) {
  const handleWorkButtonClick = (e) => {
    //do things
  };
  const handleTalkButtonClick = (e) => {
    //do things
  };
  const handleExploreHereButtonClick = (e) => {
    //do things
  };
  const handleExploreOtherClick = (e) => {
    setCurrentLocation("whereTo");
  };
  return (
    <PageWrapper>
      <h2>Laundry Room</h2>
      <div>What would you like to do?</div>
      <StyledGameButton
        buttonContent={"Work"}
        buttonDisabled={false}
        handleButtonClick={handleWorkButtonClick}
      />
      <StyledGameButton
        buttonContent={"Talk to a Coworker"}
        buttonDisabled={false}
        handleButtonClick={handleTalkButtonClick}
      />
      <StyledGameButton
        buttonContent={"Explore this Area"}
        buttonDisabled={false}
        handleButtonClick={handleExploreHereButtonClick}
      />
      <StyledGameButton
        buttonContent={"Explore another Area"}
        buttonDisabled={false}
        handleButtonClick={handleExploreOtherClick}
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
