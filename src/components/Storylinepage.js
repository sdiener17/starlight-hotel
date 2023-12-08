/* Written by: Sarah Diener (sdiener17)
 * Created: 12/7/23
 * Description: Page that gives a detailed description of the plot of the game.
 */
import React from "react";
import styled from "styled-components";

export default function Storylinepage() {
  return (
    <PageWrapper>
      <h2>Full Game Story</h2>
      <h3>Introduction</h3>
      <p>
        The player starts the game as a new hire named Kira in the Starlight
        Hotel laundry room, a fancy, beachside Hotel.
      </p>
      <p>
        Kira, and her friend Skipper who was hired as a houseman, begin work.
        Most of Kira's coworkers are very nice. One of them who she works
        closely with, Cera, is slightly odd though.
      </p>
      <p>
        While working to fill laundry orders for the various hotel 'house'
        locations, Kira learns that the housemen, who are in charge of keeping
        the houses properly stocked, will sometimes hoarde certain linens, or
        even fight over ones that are in higher demand. The king duvets seem to
        be a particular point of tension.
      </p>
      <h3>The Plot</h3>
      <p>
        The story begins to get interesting when Kira overhears Cera talking to
        Skipper one day.
      </p>
      <div className="pageBottom" />
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;
  padding: 1rem 1.5rem;
  font-family: "Fira Sans";
  background: rgb(218, 203, 128);
  background: linear-gradient(
    167deg,
    rgba(218, 203, 128, 1) 0%,
    rgba(149, 187, 221, 1) 100%
  );
  .pageBottom {
    margin-bottom: var(--marginBottom);
  }
  h2 {
    font-size: 2.5rem;
  }
  h3 {
    font-size: 2rem;
  }
  p {
    font-size: 1.3rem;
  }
`;
