/* Written by: Sarah Diener (sdiener17)
 * Created: 11/28/23
 * Description: Displays dialog for a player interacting with an NPC
 * Used By: WhoToTalkTo
 */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { npcTextSets } from "../../data/npcTextSets";
import Sprite from "./Sprite";
import WhatNext from "./WhatNext";
import FormattedTypeAnimation from "./FormattedTypeAnimation";
import { updateLocation } from "../../data/playerSlice";
import { incrementNpcCurrTextSet, selectNpcFromId } from "../../data/npcSlice";
import WhatNextForDialog from "./WhatNextForDialog";

export default function NPCDialog({
  currentNpc,
  textSet,
  setCurrentlyShowing,
}) {
  //   const npcList = useSelector((state) => state.npcList);
  const dispatch = useDispatch();

  const [currentlyTalkingNpcId, setCurrentlyTalkingNpcId] = useState(-1);
  const [currentTextToDisplay, setCurrentTextToDisplay] = useState("");
  const [currentOptionsToDisplay, setCurrentOptionsToDisplay] = useState([]);
  const [typeDialogCurrentlyDisplaying, setTypeDialogCurrentlyDisplaying] =
    useState("");
  const [loopIsFinished, setLoopIsFinished] = useState(false);

  useEffect(() => {
    console.log("Entered useEffect.");
    nextStep(1);
  }, []);

  //   const selectedNpc = selectNpcFromId(npcList, npcId);
  //   //Get the text set for the selected npc and grab the specific text item needed
  //   npcTextSets.map((set) => {
  //     if (set.textSetId === selectedNpc.npcTextSetId) {
  //       setDialogTextSet(set.textSet);
  //       setCurrentDialogSubsetId(selectedNpc.npcCurrTextSet);
  //       setCurrentlySelectedNpcId(selectedNpc.npcId);
  //       setCurrentlyShowing("dialog");
  //       return;
  //     }
  //   });

  //Function to perform the next step of the dialog
  //Called after each step finishes (such as npc text is displayed or the player makes a choice)
  function nextStep(increment) {
    console.log("Entered nextStep method");
    if (loopIsFinished) {
      console.log("FINISHED");
      return;
    }
    const npcCurrTextSetId = currentNpc.npcCurrTextSet;
    //Go through the text set options for this npc and find the one that is currently supposed to be displayed
    textSet.map((textOption) => {
      //looking at current text set to show
      if (Number(textOption.subsetId) === Number(npcCurrTextSetId)) {
        //If we're looking at npc dialog text
        if (!textOption.isPlayerResponse) {
          setCurrentlyTalkingNpcId(currentNpc.npcId);
          setCurrentTextToDisplay(textOption.text);
          //If we should increment to the next text set after showing this one
          if (textOption.continuesImmediately) {
            dispatch(incrementNpcCurrTextSet(currentNpc.npcId));
          } else {
            setLoopIsFinished(true);
          }
          setTypeDialogCurrentlyDisplaying("text");
        }
        //otherwise, we're looking at player response options
        else {
          //If we should increment to the next text set after showing this one
          if (textOption.continuesImmediately) {
            dispatch(incrementNpcCurrTextSet(currentNpc.npcId));
          } else {
            setLoopIsFinished(true);
          }
          setCurrentlyTalkingNpcId(-10);
          setCurrentOptionsToDisplay(textOption.playerResponseOptions);
          setTypeDialogCurrentlyDisplaying("options");
        } //end outer if
      }
    });
    //Check for player response, if yes, render, if no ->
    //check for another npc response, if yes render, if no ->
    //stop looping
  }

  return (
    <PageWrapper>
      {typeDialogCurrentlyDisplaying === "text" && (
        <div className="npcText">
          <Sprite npcId={currentlyTalkingNpcId} />
          <FormattedTypeAnimation
            text={currentTextToDisplay}
            delay={100}
            setValuePostDisplay={nextStep}
            newValue={1}
          />
        </div>
      )}

      {typeDialogCurrentlyDisplaying === "options" && (
        <div className="selectionBox">
          <WhatNextForDialog
            options={currentOptionsToDisplay}
            nextStep={nextStep}
          />
        </div>
      )}

      <button
        className="gameButton"
        onClick={(e) => setCurrentlyShowing("selection")}
      >
        Back
      </button>
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  .npcText {
    padding: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    /* justify-content: flex-start; */
  }
  .selectionBox {
    padding: 10px;
  }
`;

// {dialogTextSet.map((text) => {
//     if (text.subsetId === currentDialogSubsetId) {
//       //Grab the possible player responses for the text that is about to be displayed
//       const responses = () =>
//         text.includesPlayerResponse ? text.playerResponseOptions : [{}];
//       return (
//         <div className="npcText">
//           <Sprite npcId={currentlySelectedNpcId} />
//           <FormattedTypeAnimation
//             text={text.text}
//             delay={10}
//             setValuePostDisplay={
//               text.includesPlayerResponse ? renderedPlayerResponses : dispatch
//             }
//             newValue={
//               text.includesPlayerResponse
//                 ? text
//                 : incrementNpcCurrTextSet(currentlySelectedNpcId)
//             }
//         }}}
