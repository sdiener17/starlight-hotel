/* Written by: Sarah Diener (sdiener17)
 * Created: 11/25/23
 * Description: Displays a listing of available npc's for the player to talk to.
 * Used By: Gamepage
 */
import React, { useEffect } from "react";
import styled from "styled-components";
import NPCCard from "./NPCCard";
import Sprite from "./Sprite";
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
        <div
          className={`card ${npc.npcIsAvailable ? "available" : "unavailable"}`}
        >
          <Sprite npcId={npc.npcId} />
          <h3>{npc.npcName}</h3>
          <div>{npc.npcJob}</div>
        </div>
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
  .card {
    border: 3px solid black;
    border-radius: 2px;
    width: 20%;
    margin: 10px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
  }
  .card:hover {
    background-color: var(--buttonOneHover);
  }
  .available {
    background-color: gray;
  }
  .unavailable {
    background-color: lightgray;
    color: darkgray;
  }
`;
