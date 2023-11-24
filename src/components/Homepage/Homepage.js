import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Homepage() {
  document.body.style.margin = 0;
  //const history = useNavigate();

  return (
    <PageWrapper>
      <div className="pageMain">
        <div className="startNewGameOrLoadComponentHere">
          Here is where the starting screen will be.
        </div>
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
