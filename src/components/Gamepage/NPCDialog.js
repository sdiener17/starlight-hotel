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
import FormattedTypeAnimation from "./FormattedTypeAnimation";
import { updateLocation } from "../../data/playerSlice";
import { incrementNpcCurrTextSet, selectNpcFromId } from "../../data/npcSlice";
import WhatNextForDialog from "./WhatNextForDialog";
import { TypeAnimation } from "react-type-animation";

export default function NPCDialog({
  currentNpcId,
  textSet,
  setCurrentlyShowing,
  npcList,
}) {
  // const npcList = useSelector((state) => state.npcList);
  const dispatch = useDispatch();

  const [currentlyTalkingNpcId, setCurrentlyTalkingNpcId] = useState(-1);
  const [currentTextToDisplay, setCurrentTextToDisplay] = useState("");
  const [currentOptionsToDisplay, setCurrentOptionsToDisplay] = useState([]);
  const [typeDialogCurrentlyDisplaying, setTypeDialogCurrentlyDisplaying] =
    useState("Bob");
  // let currentlyTalkingNpcId = -1;
  // let currentTextToDisplay = "";
  // let currentOptionsToDisplay = [];
  // let typeDialogCurrentlyDisplaying = "";
  const [loopIsFinished, setLoopIsFinished] = useState(false);

  useEffect(() => {
    console.log("Entered useEffect.");
    // nextStep(1);
  }, [typeDialogCurrentlyDisplaying, currentTextToDisplay]);

  //Function to perform the next step of the dialog
  //Called after each step finishes (such as npc text is displayed or the player makes a choice)
  function nextStep(increment) {
    console.log("Entered nextStep method");

    if (loopIsFinished) {
      console.log("FINISHED");
      return;
    }
    const currentNpc = selectNpcFromId(npcList, currentNpcId);
    const npcCurrTextSetId = currentNpc.npcCurrTextSet;
    //Go through the text set options for this npc and find the one that is currently supposed to be displayed
    for (var i = 0; i < textSet.length; i++) {
      let textOption = textSet[i];
      console.log(
        "step 1 + Looking for text #" +
          npcCurrTextSetId +
          " Looking at text #" +
          textOption.subsetId
      );
      //looking at current text set to show
      if (Number(textOption.subsetId) === Number(npcCurrTextSetId)) {
        console.log("step 2");
        //If we're looking at npc dialog text
        if (!textOption.isPlayerResponse) {
          console.log("step 3");
          setCurrentlyTalkingNpcId(currentNpcId);
          setCurrentTextToDisplay(textOption.text);
          // currentlyTalkingNpcId = currentNpcId;
          // currentTextToDisplay = textOption.text;
          //If we should increment to the next text set after showing this one
          if (textOption.continuesImmediately) {
            console.log("step 4");
            dispatch(incrementNpcCurrTextSet({ npcId: currentNpcId }));
          } else {
            setLoopIsFinished(true);
          }
          setTypeDialogCurrentlyDisplaying("text");
          console.log("step 5");
          // typeDialogCurrentlyDisplaying = "text";
        }
        //otherwise, we're looking at player response options
        else {
          //If we should increment to the next text set after showing this one
          if (textOption.continuesImmediately) {
            dispatch(incrementNpcCurrTextSet({ npcId: currentNpcId }));
          } else {
            setLoopIsFinished(true);
          }
          setCurrentlyTalkingNpcId(-10);
          setCurrentOptionsToDisplay(textOption.playerResponseOptions);
          setTypeDialogCurrentlyDisplaying("options");
          // currentlyTalkingNpcId = -10;
          // currentOptionsToDisplay = textOption.playerResponseOptions;
          // typeDialogCurrentlyDisplaying = "options";
        } //end outer if
        return;
      }
    }
  } // end nextStep

  function nextButtonShow() {
    // setNextShow(true);
  }

  return (
    <PageWrapper>
      <button className="gameButton" onClick={(e) => nextStep(1)}>
        Yooooooooooooooooo
      </button>
      {typeDialogCurrentlyDisplaying === "text" && (
        <div className="wholeDialogBox">
          <div className="npcText">
            <Sprite npcId={currentlyTalkingNpcId} />
            <div className="formattedTypeAnimation">
              <TypeAnimation
                sequence={[
                  `${currentTextToDisplay}`,
                  100,
                  () => {
                    nextButtonShow();
                  },
                ]}
                cursor={false}
                omitDeletionAnimation={true}
                speed={90}
                style={{ whiteSpace: "pre-line", fontSize: "1.5rem" }}
              />
            </div>
          </div>
          <div className="nextButtonWrapper">
            <button
              className="gameButton nextButton"
              onClick={(e) => nextStep(1)}
            >
              Next
            </button>
          </div>
        </div>
      )}

      {typeDialogCurrentlyDisplaying === "options" && (
        <div className="selectionBox">
          <WhatNextForDialog
            options={currentOptionsToDisplay}
            nextStep={nextButtonShow}
          />

          <button className="gameButton" onClick={(e) => nextStep(1)}>
            Next
          </button>
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
  .formattedTypeAnimation {
    font-family: "fira sans";
    height: 60%;
    width: 60%;
  }
  .wholeDialogBox {
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    /* justify-content: center; */
    margin: 10px;
  }
  .nextButtonWrapper {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  }
  .nextButton {
    width: 30%;
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
