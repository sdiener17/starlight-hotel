/* Written by: Sarah Diener (sdiener17)
 * Created: 11/24/23
 * Description: Used by other components to show options for the player to choose from, such as choosing a response
 * in dialog.
 * Input:
 * - options: The list of options for the player to choose from.
 * - handleOptionSelect: the method in the parent component that will dictate what to do once an option has been selected.
 * The option id of the option chosen is passed into this method.
 * Used By: NewGame
 */
import React from "react";
import styled from "styled-components";
import StyledGameButton from "../StyledGameButton";

export default function WhatNext({ options, handleOptionSelect }) {
  //   useEffect(() => {
  //     options.map((option) => {
  //       console.log("TEXT: " + option.text);
  //     });
  //   }, []);
  //Calls the parent's event handler for a button press, passing in the id of the button selected
  const generalHandler = (e) => {
    // setChosenOption(e.target.buttonId);
    // console.log(e.target);
    // console.log("\nNAME********\n");
    // console.log(e.target.name);
    handleOptionSelect(e.target.name);
  };
  return (
    <PageWrapper>
      <h2 className="head">What's Next?</h2>
      <div className="optionsWrapper">
        {options.map((option, idx) => {
          return (
            <div className="buttonWrapper">
              <StyledGameButton
                key={idx}
                buttonContent={option.text}
                buttonDisabled={false}
                handleButtonClick={(e) => generalHandler(e)}
                buttonId={option.id}
              />
            </div>
          );
        })}
      </div>
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  position: -webkit-sticky;
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
