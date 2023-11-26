/* Written by: Sarah Diener (sdiener17)
 * Created: 11/24/23
 * Description: Shows the starting screen of the game. Goes through all the initial dialog and explanation before letting the player
 * head to the laundry room to start playing.
 * Input:
 * - setCurrentLocation: passed in from the main game page to allow this component to move the player to the laundry room after
 * the starting scene is finished.
 */
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import StyledGameButton from "../StyledGameButton";
import { textRichard } from "../../data/npcInteractions";
import { playerOptions } from "../../data/playerOptions";
import FormattedTypeAnimation from "./FormattedTypeAnimation";
import WhatNext from "./WhatNext";
import { Richard, MaterialGirl } from "../sprites/Characters";

export default function NewGame({ setCurrentLocation }) {
  const [mostRecentTextPlayed, setMostRecentTextPlayed] = useState(0);
  const [showPlayerChoice1, setShowPlayerChoice1] = useState(false);
  const [choice1Text, setChoice1Text] = useState("");
  const scrollSpan = useRef();
  useEffect(() => {
    scrollSpan.current.scrollIntoView({ behavior: "smooth" });
  }, [mostRecentTextPlayed, showPlayerChoice1]);

  function handleOptionSelect(selectedId) {
    playerOptions.gameStartOptions.scene1.map((option) => {
      if (option.id.toString() === selectedId.toString()) {
        setChoice1Text(option.text);
      }
    });
    setShowPlayerChoice1(true);
  }
  return (
    <PageWrapper>
      <div className="npcText">
        <Richard className="sprite-1" />
        <FormattedTypeAnimation
          text={textRichard.t001}
          delay={2000}
          setValuePostDisplay={setMostRecentTextPlayed}
          newValue={1}
        />
      </div>

      {mostRecentTextPlayed >= 1 && (
        <div className="npcText">
          <Richard className="sprite-1" />
          <FormattedTypeAnimation
            text={textRichard.t002}
            delay={2000}
            setValuePostDisplay={setMostRecentTextPlayed}
            newValue={2}
          />
        </div>
      )}
      {mostRecentTextPlayed >= 2 && (
        <div className="selectionBox">
          <WhatNext
            options={playerOptions.gameStartOptions.scene1}
            handleOptionSelect={handleOptionSelect}
          />
        </div>
      )}
      {showPlayerChoice1 && (
        <div className="npcText">
          <MaterialGirl className="sprite-1" />
          <FormattedTypeAnimation
            text={choice1Text}
            delay={2000}
            setValuePostDisplay={setMostRecentTextPlayed}
            newValue={2.5}
          />
        </div>
      )}
      {mostRecentTextPlayed >= 2.5 && (
        <div className="npcText">
          <Richard />
          <FormattedTypeAnimation
            text={textRichard.t003}
            delay={2000}
            setValuePostDisplay={setMostRecentTextPlayed}
            newValue={3}
          />
        </div>
      )}
      {mostRecentTextPlayed >= 3 && (
        <div className="selectionBox">
          <StyledGameButton
            buttonContent={"Head to the Laundry Room"}
            buttonDisabled={false}
            handleButtonClick={() => setCurrentLocation("laundry")}
          />
        </div>
      )}
      <span ref={scrollSpan} />
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  position: sticky;
  top: 0;
  padding: 1rem 1.5rem;
  display: flex;
  flex-direction: column;
  margin-bottom: var(--marginBottom);
  .npcText {
    padding: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    /* justify-content: flex-start; */
  }
  .sprite-1 {
    padding: 5px;
  }
  .selectionBox {
    padding: 10px;
  }
`;
