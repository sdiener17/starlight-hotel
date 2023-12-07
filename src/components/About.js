import React from "react";
import styled from "styled-components";
import { aboutData } from "../data/aboutPageData";

export default function About() {
  return (
    <PageWrapper>
      <h2>About</h2>
      <div className="aboutSection">
        <h3>Project Purpose</h3>
        <p>{aboutData.projectPurposeText1}</p>
        <p>
          The code for this project can be found at github{" "}
          <a
            href="https://github.com/sdiener17/starlight-hotel"
            target="_blank"
          >
            {" "}
            here.
          </a>
        </p>
      </div>
      <div className="aboutSection">
        <h3>General Overview</h3>
        <p>{aboutData.generalOverviewText1}</p>
        <p>{aboutData.generalOverviewText2}</p>
      </div>

      <div className="aboutSection">
        <h3>Technical Details</h3>
        <p>{aboutData.technicalDetailsText1}</p>
        <p>
          Stuff about the process I took to make the game, technologies used,
          things I learned, challenges, etc.
        </p>
      </div>
      <div className="aboutSection">
        <h3>Story Outline</h3>
        <p>Outline of the planned game story and/or link to more info</p>
      </div>
      <div className="aboutSection">
        <h3>What I Learned</h3>
        <p>{aboutData.whatILearnedText1}</p>
        <h4>Skills I was able to use include:</h4>
        <ul>
          <li>{aboutData.skillsUsedText1}</li>
          <li>{aboutData.skillsUsedText2}</li>
          <li>{aboutData.skillsUsedText3}</li>
        </ul>
        <h4>Some of the challenges I had along the way:</h4>
        <ul>
          <li>{aboutData.challengesEncounteredText1}</li>
          <li>{aboutData.challengesEncounteredText2}</li>
        </ul>
        <h4>Technical and non-technical things that I learned:</h4>
      </div>
      <div className="aboutSection">
        <h3>Planned Improvements</h3>
        <p>List of planned improvements/additions to the game</p>
      </div>

      <div className="bottom" />
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;
  padding: 1rem 1.5rem;
  .bottom {
    margin-bottom: var(--marginBottom);
  }
  h2 {
    font-size: 2.5rem;
  }
  h3 {
    font-size: 2rem;
  }
  .aboutSection {
    margin-bottom: 20px;
  }
`;
