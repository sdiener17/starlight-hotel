/* Written by: Sarah Diener (sdiener17)
 * Created: 11/24/23
 * Description: Main game interface. Holds components for all parts of the game and switches between them based on user
 * input.
 */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateLocation } from "../../data/playerSlice";
import styled from "styled-components";
import StyledGameButton from "../StyledGameButton";
import LaundryRoom from "./LaundryRoom";
import WhereTo from "./WhereTo";
import NewGame from "./NewGame";
import WhoToTalkTo from "./WhoToTalkTo";

export default function Gamepage() {
  //Used to store the currently location the player is at. This allows the correct component to be showed.
  // const [currentLocation, setCurrentLocation] = useState("gamestart");
  const currentLocation = useSelector(
    (state) => state.playerData.currentLocation
  );
  // const dispatch = useDispatch();

  useEffect(() => {
    //things
  }, [currentLocation]);
  return (
    <PageWrapper>
      {currentLocation === "gamestart" && <NewGame />}
      {currentLocation === "laundry" && <LaundryRoom />}
      {currentLocation === "whereTo" && <WhereTo />}
      {currentLocation === "talkTo" && <WhoToTalkTo />}
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
