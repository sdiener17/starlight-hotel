// import React, { useEffect } from "react";
import styled from "styled-components";
import StyledGameButton from "../StyledGameButton";

export default function WhatNext({ options, handleOptionSelect }) {
  //   useEffect(() => {
  //     options.map((option) => {
  //       console.log("TEXT: " + option.text);
  //     });
  //   }, []);
  const generalHandler = (e) => {
    // setChosenOption(e.target.buttonId);
    // console.log(e.target);
    // console.log("\nNAME********\n");
    // console.log(e.target.name);
    handleOptionSelect(e.target.name);
  };
  return (
    <PageWrapper>
      <h2>What's Next?</h2>
      {options.map((option, idx) => {
        return (
          <StyledGameButton
            key={idx}
            buttonContent={option.text}
            buttonDisabled={false}
            handleButtonClick={(e) => generalHandler(e)}
            buttonId={option.id}
          />
        );
      })}
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  padding: 1rem 1.5rem;
`;
