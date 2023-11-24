import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import StyledGameButton from "../StyledGameButton";
import { StatsDispatchContext } from "../../data/GameContext";

export default function Homepage({ setGameStarted }) {
  //   document.body.style.margin = 0;
  //   const dispatch = useContext(StatsDispatchContext);
  useEffect(() => {
    setGameStarted(false);
  }, []);
  let navigate = useNavigate();
  const handleNewGameClick = (e) => {
    setGameStarted(true);
    // dispatch({ type: "start_game" });
    navigate(`game`);
  };
  const handleLoadGameClick = (e) => {
    //do things
  };

  return (
    <PageWrapper>
      <div className="pageMain">
        <StyledGameButton
          buttonContent={"Start New Game"}
          buttonDisabled={false}
          handleButtonClick={handleNewGameClick}
        />
        <StyledGameButton
          buttonContent={"Load Game From File"}
          buttonDisabled={false}
          handleButtonClick={handleLoadGameClick}
        />
      </div>
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  padding: 1rem 1.5rem;
  .pageMain {
    background-color: gray;
  }
`;
