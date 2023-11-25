import React, { useState } from "react";
import styled from "styled-components";
import StyledGameButton from "../StyledGameButton";
import { TypeAnimation } from "react-type-animation";
import { textRichard } from "../../data/npcInteractions";
import FormattedTypeAnimation from "./FormattedTypeAnimation";

export default function NewGame({ setCurrentLocation }) {
  const [mostRecentTextPlayed, setMostRecentTextPlayed] = useState(0);
  const handleButton1Click = (e) => {
    setMostRecentTextPlayed(2.5);
    // setCurrentLocation("laundry");
  };
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
        <StyledGameButton
          buttonContent={"That's a lot of laundry"}
          buttonDisabled={false}
          handleButtonClick={() => {
            setMostRecentTextPlayed(2.5);
          }}
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
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  padding: 1rem 1.5rem;
`;
