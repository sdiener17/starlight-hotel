/* Written by: Sarah Diener (sdiener17)
 * Created: 11/29/23
 * Description: About page for the website. Mostly just text about various aspects of the project
 * with a few links to other pages.
 */
import React from "react";
import styled from "styled-components";
import { aboutData } from "../data/aboutPageData";
import mySprite from "../images/staticMyself1_NoBackground_128x128.png";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <PageWrapper>
      <div className="headerPageWrapper">
        <MySprite />
        <div className="headerAboutSection">
          <p>{aboutData.projectPurposeText1}</p>
          <p>{aboutData.projectPurposeText2}</p>
          <p>
            The code for this project can be found at github{" "}
            <a
              href="https://github.com/sdiener17/starlight-hotel"
              target="_blank"
            >
              {" "}
              here
            </a>
            .
          </p>
        </div>
      </div>

      <div className="aboutSection">
        <h3>General Overview</h3>
        <p>{aboutData.generalOverviewText1}</p>
        <p>
          {aboutData.generalOverviewText2} For a more detailed overview of the
          storyline, <Link to="/storyline"> click here</Link>.
        </p>
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
        <ul>
          <li>{aboutData.plannedImprovementsText1}</li>
          <li>{aboutData.plannedImprovementsText2}</li>
          <li>{aboutData.plannedImprovementsText3}</li>
          <li>{aboutData.plannedImprovementsText4}</li>
        </ul>
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
  background: rgb(17, 73, 195);
  background: linear-gradient(
    0deg,
    rgba(17, 73, 195, 1) 0%,
    rgba(17, 126, 205, 1) 20%,
    rgba(41, 188, 209, 1) 42%,
    rgba(87, 212, 185, 1) 61%,
    rgba(253, 198, 45, 1) 100%
  );
  font-family: "Fira Sans";
  .headerPageWrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px;
  }
  .headerAboutSection {
    width: 80%;
  }
  .bottom {
    margin-bottom: var(--marginBottom);
  }
  .improvementList {
    font-size: 1.3rem;
  }
  h2 {
    font-size: 2.5rem;
  }
  h3 {
    font-size: 2rem;
  }
  h4 {
    font-size: 1.3rem;
  }
  p {
    font-size: 1.3rem;
  }
  li {
    font-size: 1.3rem;
  }
  .aboutSection {
    margin-bottom: 20px;
  }
`;

const MySprite = styled.div`
  height: 128px;
  width: 128px;
  background: url(${mySprite}) left center;
  margin: 10px;
`;
