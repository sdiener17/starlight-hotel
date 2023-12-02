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
import {
  incrementNpcCurrTextSet,
  selectNpcFromId,
  selectNpcList,
} from "../../data/npcSlice";
import { npcTextSets } from "../../data/npcTextSets";
import FormattedTypeAnimation from "./FormattedTypeAnimation";
import NPCDialog from "./NPCDialog";

export default function WhoToTalkTo({ backTo }) {
  const dispatch = useDispatch();
  // const npcList = useSelector((state) => state.npcList);
  const npcList = useSelector(selectNpcList);
  const [currentlyShowing, setCurrentlyShowing] = useState("selection");
  const [dialogTextSet, setDialogTextSet] = useState([]);
  // const [currentDialogSubsetId, setCurrentDialogSubsetId] = useState(-1);
  const [currentlySelectedNpcId, setCurrentlySelectedNpcId] = useState(-1);
  const [currentlySelectedNpc, setCurrentlySelectedNpc] = useState({
    npcName: "Bob",
  });
  // const selectedNpc = {};
  // const currentlySelectedId = -1;

  // useEffect(() => {
  //   //nothing
  // }, [currentlyShowing]);

  function handleNpcSelect(e, id) {
    e.preventDefault();
    // console.log("CLICKED THIS GUY " + id);
    //Pull out the npc that the player selected
    //Need 'holdNpc' due to the fact that setting state with hooks won't update till the function is finished
    var holdNpc = selectNpcFromId(npcList, id);
    setCurrentlySelectedNpc(holdNpc);
    //Get the text set for the selected npc and grab the specific text item needed
    npcTextSets.map((set) => {
      if (set.textSetId === holdNpc.npcTextSetId) {
        setDialogTextSet(set.textSet);
        // setCurrentDialogSubsetId(currentlySelectedNpc.npcCurrTextSet);
        setCurrentlySelectedNpcId(holdNpc.npcId);
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
            handleNpcSelect(e, npc.npcId);
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
          npcList={npcList}
          currentNpcId={currentlySelectedNpcId}
          textSet={dialogTextSet}
          setCurrentlyShowing={setCurrentlyShowing}
        />
      )}
      {currentlyShowing != "dialog" && (
        <button
          className="gameButton"
          onClick={(e) => {
            backButtonClick();
          }}
        >
          Back
        </button>
      )}
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
