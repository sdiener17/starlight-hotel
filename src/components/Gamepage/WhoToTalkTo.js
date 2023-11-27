/* Written by: Sarah Diener (sdiener17)
 * Created: 11/25/23
 * Description: Displays a listing of available npc's for the player to talk to.
 * Used By: Gamepage
 */
import React, { useEffect } from "react";
import styled from "styled-components";
import NPCCard from "./NPCCard";
import { Richard, Darla } from "../sprites/Characters";
import { useDispatch, useSelector } from "react-redux";
import { updateLocation } from "../../data/playerSlice";
import { selectNpcFromId } from "../../data/npcSlice";

export default function WhoToTalkTo({ backTo }) {
  const dispatch = useDispatch();
  const npcList = useSelector((state) => state.npcList);

  const renderedNPCCards = npcList.map((npc) => {
    if (npc.npcIsKnown) {
      return (
        <NPCCard
          name={npc.npcName}
          location={npc.npcJob}
          available={npc.npcIsAvailable}
          imageId={npc.npcId}
        />
      );
    }
  });

  function backButtonClick() {
    dispatch(updateLocation(backTo));
  }

  return (
    <PageWrapper>
      <h2>Who would you like to talk to?</h2>
      <div className="peopleWrapper">{renderedNPCCards}</div>
      <button
        className="gameButton"
        onClick={(e) => {
          backButtonClick();
        }}
      >
        Back
      </button>
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  top: 0;
  margin-bottom: var(--marginBottom);
  .peopleWrapper {
    display: flex;
    flex-direction: row;
  }
`;
