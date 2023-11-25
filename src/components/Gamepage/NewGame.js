import React, { useEffect, useState } from "react";
import styled from "styled-components";
import StyledGameButton from "../StyledGameButton";
import { TypeAnimation } from "react-type-animation";
import { textRichard } from "../../data/npcInteractions";
import { playerOptions } from "../../data/playerOptions";
import FormattedTypeAnimation from "./FormattedTypeAnimation";
import WhatNext from "./WhatNext";

export default function NewGame({ setCurrentLocation }) {
  const [mostRecentTextPlayed, setMostRecentTextPlayed] = useState(0);
  //   const [chosenOption1, setChosenOption1] = useState(0);

  function handleOptionSelect(selectedId) {
    setMostRecentTextPlayed(2.5);
    // setCurrentLocation("laundry");
  }
  return (
    <PageWrapper>
      <FormattedTypeAnimation
        text={textRichard.t001}
        delay={2000}
        setValuePostDisplay={setMostRecentTextPlayed}
        newValue={1}
      />

      {mostRecentTextPlayed >= 1 && (
        <FormattedTypeAnimation
          text={textRichard.t002}
          delay={2000}
          setValuePostDisplay={setMostRecentTextPlayed}
          newValue={2}
        />
      )}
      {mostRecentTextPlayed >= 2 && (
        <WhatNext
          options={playerOptions.gameStartOptions.scene1}
          handleOptionSelect={handleOptionSelect}
        />
      )}
      {mostRecentTextPlayed >= 2.5 && (
        <FormattedTypeAnimation
          text={textRichard.t003}
          delay={2000}
          setValuePostDisplay={setMostRecentTextPlayed}
          newValue={3}
        />
      )}
      {mostRecentTextPlayed >= 3 && (
        <StyledGameButton
          buttonContent={"Head to the Laundry Room"}
          buttonDisabled={false}
          handleButtonClick={() => setCurrentLocation("laundry")}
        />
      )}
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  padding: 1rem 1.5rem;
`;
