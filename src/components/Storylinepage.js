/* Written by: Sarah Diener (sdiener17)
 * Created: 12/7/23
 * Description: Page that gives a detailed description of the plot of the game.
 */
import React, { useEffect } from "react";
import styled from "styled-components";

export default function Storylinepage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <PageWrapper>
      <h2>Full Game Story</h2>
      <h3>Introduction</h3>
      <p>
        The player starts the game as a new hire named Kira in the Starlight
        Hotel laundry room, a fancy, beachside Hotel. Kira, and her friend
        Skipper who was hired as a houseman, begin work. Most of Kira's
        coworkers are very nice, thouch one of them, Cera, is slightly odd.
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
        Skipper one day. Cera warns him to be careful now that he's been
        assigned a house and Skipper jokingly says he'll back out as soon as he
        starts hoarding linens.
      </p>
      <p>
        One day, Cera pulls Kira behind the racks of tablecloths as two men in
        blue shirts with sunglasses enter the laundry room. Cera calls them the
        "Men in Blue" and says they are not to be trusted. She has Kira help her
        move some king duvets that she had been storing under the folding
        counter to a better hiding spot to keep the Men in Blue from finding
        them.
      </p>
      <p>
        Cera recruits Kira as her "sidekick" from that point forward and tells
        her that she really goes by "Linen Lady". Linen Lady begins wearing a
        "cape" at work, made of one of the white and yellow striped beach
        towels. She gives Kira a washcloth cape to wear as well, and dubs her
        "Material Girl".
      </p>
      <p>
        Skipper begins acting strange, and Linen Lady sends Kira on quests to
        gather information. (The quests will increasingly rely on the player to
        complete by using their knowledge and skillfuly interacting with
        coworkers/solving puzzles).
      </p>
      <p>
        Through exploring, interacting with coworkers, and solving puzzles, Kira
        will discover that the hotel has a strange life-force behind it that is
        driven by the housemen (who she discovers are half-house, half-men), who
        collect linens to feed energy to this force. She will discover that this
        force is Rick the MEGABEAST, who lives under the golf course pond. The
        Men in Blue are agents who observe the employees behavior to report back
        to this force as well. The hotel is growing larger, and could consume
        the entire city if not stopped. Linen Lady and Material Girl (with the
        help of some unexpected allies) will have to figure out how to stop Rick
        the MEGABEAST before the Starlight Hotel grows too large to stop.
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
