/* Written by: Sarah Diener (sdiener17)
 * Created: 11/25/23
 * Description: Displays a listing of available npc's for the player to talk to.
 * Used By: Gamepage
 */
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import NPCCard from "./NPCCard";
import Sprite from "./Sprite";
import { Richard, Darla } from "../sprites/Characters";
import { useDispatch, useSelector } from "react-redux";
import { updateLocation } from "../../data/playerSlice";
import { selectNpcFromId } from "../../data/npcSlice";
import { npcTextSets } from "../../data/npcTextSets";

export default function WhoToTalkTo({ backTo }) {
  const dispatch = useDispatch();
  const npcList = useSelector((state) => state.npcList);
  const [currentlyShowing, setCurrentlyShowing] = useState("selection");
  const [dialogTextSet, setDialogTextSet] = useState("");

  function handleNpcSelect(id) {
    // const selectedNpc = useSelector((state) => {
    //   return state.npcList.find((npc) => Number(npc.npcId) === Number(id));
    // });
    const selectedNpc = selectNpcFromId(npcList, id);
    npcTextSets.map((set) => {
      if (set.textSetId === selectedNpc.npcTextSetId) {
        setDialogTextSet(set.textSet);
        setCurrentlyShowing("dialog");
        return;
      }
    });
  }

  // const renderedDialog = dialogTextSet.map((text) => {

  // })

  const renderedNPCCards = npcList.map((npc) => {
    if (npc.npcIsKnown) {
      return (
        <div
          className={`card ${npc.npcIsAvailable ? "available" : "unavailable"}`}
          onClick={(e) => {
            handleNpcSelect(npc.npcId);
          }}
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

      {currentlyShowing === "selection" && (
        <div className="peopleWrapper">{renderedNPCCards}</div>
      )}

      {currentlyShowing === "dialog" && (
        <div>Active dialog with selected npc</div>
      )}

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
