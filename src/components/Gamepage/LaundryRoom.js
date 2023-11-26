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
import { useDispatch, useSelector } from "react-redux";
import { updateLocation } from "../../data/playerSlice.js";
import {
  selectAvailableOptionEnumDataById,
  selectLocationById,
} from "../../data/locationSlice.js";

export default function LaundryRoom() {
  const laundry = useSelector((state) => {
    return state.locations.find((loc) => Number(loc.locationId) === 0);
  });
  const dispatch = useDispatch();

  const renderOptions =
    laundry != undefined ? (
      laundry.availableOptions.map((option, idx) => {
        return (
          <button
            name={option.name}
            className="gameButton optionButton"
            disabled={option.currentlyDisabled}
            key={idx}
            onClick={(e) =>
              dispatch(updateLocation(option.locationTextIdentifier))
            }
          >
            {option.name}
          </button>
        );
      })
    ) : (
      <div>Error</div>
    );

  return (
    <PageWrapper>
      <h2>Laundry Room</h2>
      <div>What would you like to do?</div>
      {/* {laundry.locationName} */}
      <div className="buttonWrapper">{renderOptions}</div>
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  padding: 1rem 1.5rem;
  .buttonWrapper {
    display: flex;
    flex-direction: row;
  }
  .optionButton {
    margin: 10px;
  }
`;
