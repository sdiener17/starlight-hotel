import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import StyledGameButton from "../StyledGameButton";

export default function Gamepage() {
  return (
    <PageWrapper>
      <div className="pageMain">Game has started</div>
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
