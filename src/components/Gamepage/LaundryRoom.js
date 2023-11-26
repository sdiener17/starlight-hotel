/* Written by: Sarah Diener (sdiener17)
 * Created: 11/24/23
 * Description: Displays the laundry room and it's options for the player.
 * Input:
 * - setCurrentLocation: passed in from the main game page to allow this component to move the player to the laundry room after
 * the starting scene is finished.
 * Used By: Gamepage
 */
import React, { useState } from "react";
import styled from "styled-components";
import StyledGameButton from "../StyledGameButton";
import { useStats, useStatsDispatch } from "../../data/GameContext.js";

export default function LaundryRoom({ setCurrentLocation }) {
  const stats = useStats();

  const [disabledBWork, setDisabledBWork] = useState(
    viewStat("tutorialStage") >= 1 ? false : true
  );
  const [disabledBTalk, setDisabledBTalk] = useState(false);
  const [disabledBExploreOther, setDisabledExploreOther] = useState(
    viewStat("tutorialStage") >= 1 ? false : true
  );
  const [disabledBExploreHere, setDisabledExploreHere] = useState(
    viewStat("tutorialStage") >= 1 ? false : true
  );

  const handleWorkButtonClick = (e) => {
    //do things
  };
  const handleTalkButtonClick = (e) => {
    setCurrentLocation("talkTo");
  };
  const handleExploreHereButtonClick = (e) => {
    //do things
  };
  const handleExploreOtherClick = (e) => {
    setCurrentLocation("whereTo");
  };

  //Function to retrieve a specific stat
  function viewStat(statName) {
    stats.map((s) => {
      if (s.name === statName) {
        return s.content;
      }
    });
    return -1;
  } //end viewStat
  return (
    <PageWrapper>
      <h2>Laundry Room</h2>
      <div>What would you like to do?</div>
      <StyledGameButton
        buttonContent={"Work"}
        buttonDisabled={disabledBWork}
        handleButtonClick={handleWorkButtonClick}
      />
      <StyledGameButton
        buttonContent={"Talk to a Coworker"}
        buttonDisabled={disabledBTalk}
        handleButtonClick={handleTalkButtonClick}
      />
      <StyledGameButton
        buttonContent={"Explore this Area"}
        buttonDisabled={disabledBExploreHere}
        handleButtonClick={handleExploreHereButtonClick}
      />
      <StyledGameButton
        buttonContent={"Explore another Area"}
        buttonDisabled={disabledBExploreOther}
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
