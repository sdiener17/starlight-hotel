import React from "react";
import styled from "styled-components";

export default function About() {
  return (
    <PageWrapper>
      <h2>About</h2>
      <h3>General Overview</h3>
      <p>
        This game came about from an experience I had working in a hotel laundry
        room one summer with a friend. We had fun coming up with wild
        conspiracies and mysteries while on the job, and I thought it could be a
        fun idea for a game.
      </p>
      <p>
        The player starts out as a new hire at the Starlight Hotel named Kira
        who, after meeting a few coworkers, starts to realize that there's more
        to this hotel than meets the eye. Through interacting with coworkers and
        exploring the various hotel areas, the player will uncover the secrets
        hidden the shiny, beachside hotel.
      </p>
      <h3>Project Purpose</h3>
      <p>Stuff about how this was a capstone project for my ICS degree</p>
      <p>Link to github repo?</p>
      <h3>Process</h3>
      <p>
        Stuff about the process I took to make the game, technologies used,
        things I learned, challenges, etc.
      </p>
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  padding: 10px;
`;
