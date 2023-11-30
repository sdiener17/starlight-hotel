/* Written by: Sarah Diener (sdiener17)
 * Created: 11/29/23
 * Description: Used by other components to show options for the player to choose from, and then displays the option
 * chosen as if the player were speaking it in a dialog.
 * Input:
 * - options: The list of options for the player to choose from.
 * -
 * Used By: WhatNext.js
 */
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import FormattedTypeAnimation from "./FormattedTypeAnimation";
import Sprite from "./Sprite";

export default function WhatNextForDialog({ options, nextStep }) {
  const [isDisabled, setIsDisabled] = useState(false);
  const [showOptionChosen, setShowOptionChosen] = useState(false);
  const [selectedText, setSelectedText] = useState("");
  useEffect(() => {
    //things
  }, [isDisabled, showOptionChosen]);

  //Calls the parent's event handler for a button press, passing in the id of the button selected
  const generalHandler = (e) => {
    setIsDisabled(true);
    options.map((option) => {
      if (option.id.toString() === e.target.name.toString()) {
        setSelectedText(option.text);
      }
    });
    setShowOptionChosen(true);
    // handleOptionSelect(e.target.name);
  };
  return (
    <PageWrapper>
      <h2 className="head">What's Next?</h2>
      <div className="optionsWrapper">
        {options.map((option, idx) => {
          return (
            <div className="buttonWrapper">
              <button
                className="gameButton"
                key={idx}
                disabled={isDisabled}
                onClick={(e) => generalHandler(e)}
                name={option.id}
              >
                {option.text}
              </button>
            </div>
          );
        })}
        {showOptionChosen && (
          <div>
            <Sprite npcId={-10} />
            <FormattedTypeAnimation
              text={selectedText}
              delay={100}
              setValuePostDisplay={nextStep}
              newValue={1}
            />
          </div>
        )}
      </div>
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  position: sticky;
  top: 0;
  padding: 1rem 1.5rem;
  .head {
    font-family: "Oxygen";
  }
  .optionsWrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
  }
  .buttonWrapper {
    margin: 10px;
  }
`;
