/* Written by: Sarah Diener (sdiener17)
 * Created: 11/19/23
 * Description: Landing page for the game. Displays options to start a new game or load a previous session from a save file.
 * Input:
 * - setGameStarted: Passed from App.js, used to tell if the game is started or not so the header can display
 * the correct information.
 */
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import StyledGameButton from "../StyledGameButton";
import { StatsDispatchContext } from "../../data/GameContext";

export default function Homepage({ setGameStarted }) {
  //   document.body.style.margin = 0;
  //   const dispatch = useContext(StatsDispatchContext);
  //Sets the game status to not started so the proper header is displayed
  useEffect(() => {
    setGameStarted(false);
  }, []);
  let navigate = useNavigate();
  //Event handler for starting a new game
  const handleNewGameClick = (e) => {
    setGameStarted(true);
    // dispatch({ type: "start_game" });
    navigate(`game`);
  };
  //Event handler for loading a game from a save file
  const handleLoadGameClick = (e) => {
    //do things
  };

  return (
    <PageWrapper>
      <div className="pageMain">
        <button className="gameButton homeButton" onClick={handleNewGameClick}>
          Start New Game
        </button>
        <button
          className="gameButton homeButton"
          onClick={handleLoadGameClick}
          disabled={true}
        >
          Load Game From File
        </button>
      </div>
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  position: sticky;
  top: 0;
  padding: 1rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* width: 100%; */
  .pageMain {
    /* background-color: gray; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 3px solid black;
    border-radius: 5px;
    width: 50%;
    padding: 10px;
  }
  .homeButton {
    margin: 10px;
  }
`;
