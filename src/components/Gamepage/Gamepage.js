/* Written by: Sarah Diener (sdiener17)
 * Created: 11/24/23
 * Description: Main game interface. Holds components for all parts of the game and switches between them based on user
 * input.
 */
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateLocation } from "../../data/playerSlice";
import styled from "styled-components";
import StyledGameButton from "../StyledGameButton";
import LaundryRoom from "./LaundryRoom";
import WhereTo from "./WhereTo";
import NewGame from "./NewGame";
import WhoToTalkTo from "./WhoToTalkTo";
import Explore from "./Explore";

export default function Gamepage() {
  //Used to store the currently location the player is at. This allows the correct component to be showed.
  // const [currentLocation, setCurrentLocation] = useState("gamestart");
  const currentLocation = useSelector(
    (state) => state.playerData.currentLocation
  );
  const allPlayerData = useSelector((state) => state.playerData);

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   console.log("CURRENT LOCATION: " + currentLocation);
  //   console.log("ALL PLAYER DATA: " + allPlayerData);
  // }, []);
  return (
    <PageWrapper>
      {currentLocation === "gameStart" && <NewGame />}
      {currentLocation === "laundry" && <LaundryRoom />}
      {currentLocation === "whereTo" && <WhereTo />}
      {currentLocation === "talkTo_laundry" && (
        <WhoToTalkTo backTo={"laundry"} />
      )}
      {currentLocation === "explore_laundry" && (
        <Explore locationId={0} backTo={"laundry"} />
      )}
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
