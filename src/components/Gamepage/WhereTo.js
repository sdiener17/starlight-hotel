/* Written by: Sarah Diener (sdiener17)
 * Created: 11/24/23
 * Description: Displays a screen for the player to choose the location they would like to travel to in-game.
 * Input:
 * - setCurrentLocation: passed in from the main game page to allow this component to move the player to their desired
 * location.
 * Used By: LaundryRoom
 */
import React from "react";
import styled from "styled-components";
import StyledGameButton from "../StyledGameButton";
import { useDispatch } from "react-redux";
import { updateLocation } from "../../data/playerSlice";

export default function WhereTo() {
  const dispatch = useDispatch();
  const handleLaundryClick = (e) => {
    dispatch(updateLocation("laundry"));
  };
  const handleLaundryOfficeClick = (e) => {
    //TODO: Change to laundryOffice
    dispatch(updateLocation("laundry"));
  };
  return (
    <PageWrapper>
      <h2>Where To?</h2>
      <StyledGameButton
        buttonContent={"Laundry Room"}
        buttonDisabled={false}
        handleButtonClick={handleLaundryClick}
      />
      <StyledGameButton
        buttonContent={"Laundry Office"}
        buttonDisabled={false}
        handleButtonClick={handleLaundryOfficeClick}
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
