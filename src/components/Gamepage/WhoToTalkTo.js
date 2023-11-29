/* Written by: Sarah Diener (sdiener17)
 * Created: 11/25/23
 * Description: Displays a listing of available npc's for the player to talk to.
 * Used By: Gamepage
 */
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import NPCCard from "./NPCCard";
import Sprite from "./Sprite";
import WhatNext from "./WhatNext";
import { Richard, Darla } from "../sprites/Characters";
import { useDispatch, useSelector } from "react-redux";
import { updateLocation } from "../../data/playerSlice";
import { incrementNpcCurrTextSet, selectNpcFromId } from "../../data/npcSlice";
import { npcTextSets } from "../../data/npcTextSets";
import FormattedTypeAnimation from "./FormattedTypeAnimation";
import NPCDialog from "./NPCDialog";

export default function WhoToTalkTo({ backTo }) {
  const dispatch = useDispatch();
  const npcList = useSelector((state) => state.npcList);
  const [currentlyShowing, setCurrentlyShowing] = useState("selection");
  const [dialogTextSet, setDialogTextSet] = useState([]);
  // const [currentDialogSubsetId, setCurrentDialogSubsetId] = useState(-1);
  const [currentlySelectedNpcId, setCurrentlySelectedNpcId] = useState(-1);
  const [currentlySelectedNpc, setCurrentlySelectedNpc] = useState({});
  // const selectedNpc = {};
  // const currentlySelectedId = -1;

  // useEffect(() => {
  //   //nothing
  // }, [currentlyShowing]);

  function handleNpcSelect(id) {
    //Pull out the npc that the player selected
    // const selectedNpc = npcList.find((npc) => Number(npc.npcId) === Number(id));
    setCurrentlySelectedNpc(selectNpcFromId(npcList, id));
    //Get the text set for the selected npc and grab the specific text item needed
    npcTextSets.map((set) => {
      if (set.textSetId === currentlySelectedNpc.npcTextSetId) {
        setDialogTextSet(set.textSet);
        // setCurrentDialogSubsetId(currentlySelectedNpc.npcCurrTextSet);
        setCurrentlySelectedNpcId(currentlySelectedNpc.npcId);
        setCurrentlyShowing("dialog");
        return;
      }
    });
  }

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
        <NPCDialog
          currentNpc={currentlySelectedNpc}
          textSet={dialogTextSet}
          setCurrentlyShowing={setCurrentlyShowing}
        />
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
    @media (max-width: 500px) {
      display: flex;
      flex-direction: column;
    }
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
  .npcText {
    padding: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    /* justify-content: flex-start; */
    @media (max-width: 500px) {
      display: flex;
      flex-direction: column;
    }
  }
  .selectionBox {
    padding: 10px;
  }
`;
