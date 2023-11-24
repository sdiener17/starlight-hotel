import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import StyledGameButton from "../StyledGameButton";

export default function Homepage() {
  //   document.body.style.margin = 0;
  let navigate = useNavigate();
  const handleNewGameClick = (e) => {
    navigate(`game`);
  };
  const handleLoadGameClick = (e) => {
    //do things
  };

  return (
    <PageWrapper>
      <div className="pageMain">
        <StyledGameButton
          buttonContent={"Start New Game"}
          buttonDisabled={false}
          handleButtonClick={handleNewGameClick}
        />
        <StyledGameButton
          buttonContent={"Load Game From File"}
          buttonDisabled={false}
          handleButtonClick={handleLoadGameClick}
        />
      </div>
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  padding: 1rem 1.5rem;
  .pageMain {
    background-color: gray;
  }
`;
