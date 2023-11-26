import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { updatePlayerHasOpened } from "../../data/exploreSlice";
import handleEvent from "../../data/generalEventHandler";

export default function Explore({ locationId }) {
  //   return state.locations.find((loc) => Number(loc.locationId) === 0);
  const discoveries = useSelector((state) =>
    state.exploreData.find((loc) => loc.locationId === locationId)
  );
  const dispatch = useDispatch();

  function newDiscoveryClick(discoveryId, discoveryTrigger) {
    dispatch(
      updatePlayerHasOpened({
        parentLocationId: locationId,
        discoveryId: discoveryId,
        setValueTo: true,
      })
    );
    handleEvent(discoveryTrigger);
  }

  return (
    <PageWrapper>
      <div>hi</div>
      {discoveries.map((dis) => {
        if (dis.currentlyShowing) {
          <div
            className={`discoveryContainer  ${dis.playerHasOpened} ? 'opened' : 'unopened'`}
          >
            {!dis.playerHasOpened && (
              <div onClick={newDiscoveryClick(dis.id, dis.triggersEvent)}>
                New Discovery
              </div>
            )}
            {dis.playerHasOpened && <div>{dis.text}</div>}
          </div>;
        }
      })}
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  .discoveryContainer {
    display: flex;
    flex-direction: column;
  }
  .unopened:hover {
    background-color: red;
  }
`;
