import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import StyledGameButton from "../StyledGameButton";
import LaundryRoom from "./LaundryRoom";
import WhereTo from "./WhereTo";
import NewGame from "./NewGame";

export default function Gamepage() {
  const [currentLocation, setCurrentLocation] = useState("gamestart");

  useEffect(() => {
    //things
  }, [currentLocation]);
  return (
    <PageWrapper>
      {currentLocation === "gamestart" && (
        <NewGame setCurrentLocation={setCurrentLocation} />
      )}
      {currentLocation === "laundry" && (
        <LaundryRoom setCurrentLocation={setCurrentLocation} />
      )}
      {currentLocation === "whereTo" && (
        <WhereTo setCurrentLocation={setCurrentLocation} />
      )}
      <div className="pageMain">Game has started</div>
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
