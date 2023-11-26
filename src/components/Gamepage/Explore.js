import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { updatePlayerHasOpened } from "../../data/exploreSlice";
import { useExploreEvent } from "../../data/generalEventHandler";

export default function Explore({ locationId }) {
  const [discoveryTrigger, setDiscoveryTrigger] = useState("None");
  //   return state.locations.find((loc) => Number(loc.locationId) === 0);
  const discoveries = useSelector((state) =>
    state.exploreData.find(
      (loc) => Number(loc.locationId) === Number(locationId)
    )
  );
  const dispatch = useDispatch();
  const exploreEvent = useExploreEvent(discoveryTrigger);

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
    setDiscoveryTrigger(clickedDiscoveryTrigger);
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
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  font-family: "fira sans";

  .discoveryContainer {
    display: flex;
    flex-direction: column;
    font-size: 1.4rem;
  }
  .buttonUnopened {
    width: 90%;
    height: 20%;
    padding: 15px;
    border: 3px solid black;
    border-radius: 5px;
    background-color: lightgray;
    margin: 10px;
  }
  .buttonUnopened:hover {
    background-color: red;
  }
  .unopened:hover {
    background-color: red;
  }
  .buttonOpened {
    border: 3px solid black;
    border-radius: 5px;
    padding: 15px;
    background-color: lightgray;
    margin: 10px;
  }
`;
