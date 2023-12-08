/* Written by: Sarah Diener (sdiener17)
 * Created: 11/26/23
 * Description: Displays the current discoveries available to the player in any given room, determined by the locationID prop.
 * Input:
 * - locationId: The numeric id of the location that the player is currently looking at discoveries for.
 * Used By: Gamepage
 */
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { updatePlayerHasOpened } from "../../data/exploreSlice";
import { useExploreEvent } from "../../data/generalEventHandler";
import { updateLocation } from "../../data/playerSlice";

export default function Explore({ locationId, backTo }) {
  //   const [discoveryTrigger, setDiscoveryTrigger] = useState("None");
  const [someVar, invokeEvent] = useExploreEvent();
  //   return state.locations.find((loc) => Number(loc.locationId) === 0);
  const discoveries = useSelector((state) =>
    state.exploreData.find(
      (loc) => Number(loc.locationId) === Number(locationId)
    )
  );
  const locationSubscription = useSelector((state) => state.locations);
  const dispatch = useDispatch();

  if (discoveries.data === undefined) {
    return <div>Error finding discoveries.</div>;
  }
  const discoveryList = discoveries.data;

  function newDiscoveryClick(discoveryId, clickedDiscoveryTrigger) {
    dispatch(
      updatePlayerHasOpened({
        parentLocationId: locationId,
        discoveryId: discoveryId,
        setValueTo: true,
      })
    );
    invokeEvent(clickedDiscoveryTrigger);
  }

  function backButtonClick() {
    dispatch(updateLocation(backTo));
  }

  return (
    <PageWrapper>
      <h2>Discoveries</h2>
      {discoveryList.map((dis) => {
        if (dis.currentlyShowing === true) {
          return (
            <div
              className={`discoveryContainer  ${dis.playerHasOpened} ? 'opened' : 'unopened'`}
            >
              {!dis.playerHasOpened && (
                <button
                  className="buttonUnopened"
                  onClick={(e) => newDiscoveryClick(dis.id, dis.triggersEvent)}
                >
                  New Discovery
                </button>
              )}
              {dis.playerHasOpened && (
                <div className="buttonOpened">{dis.text}</div>
              )}
            </div>
          );
        }
      })}
      <button className="gameButton" onClick={(e) => backButtonClick()}>
        Back
      </button>
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  font-family: "Fira Sans";
  margin-bottom: var(--marginBottom);

  .discoveryContainer {
    display: flex;
    flex-direction: column;
    font-size: 1.4rem;
  }
  .buttonUnopened {
    font-family: "Fira Sans";
    font-size: 1.4rem;
    width: 90%;
    height: 20%;
    padding: 15px;
    border: 3px solid black;
    border-radius: 5px;
    background-color: var(--buttonOne);
    margin: 10px;
  }
  .buttonUnopened:hover {
    background-color: var(--buttonOneHover);
  }
  .buttonOpened {
    border: 3px solid black;
    border-radius: 5px;
    padding: 15px;
    background-color: var(--buttonOne);
    margin: 10px;
  }
`;
