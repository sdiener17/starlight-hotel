/* Written by: Sarah Diener (sdiener17)
 * Created: 11/25/23
 * Description: Displays an indiviual card of an npc with their avatar, name, and job. The card is dimmed if the npc
 * is not available to talk to.
 * Input:
 * - image: the component corresponding to the proper npc.
 * - name: the npc's name.
 * - location: the npc's job.
 * - isAvailable: true/false if the npc is available.
 * Used By: Gamepage
 */
import React from "react";
import styled from "styled-components";
import Sprite from "./Sprite";

export default function NPCCard({ imageId, name, location, isAvailable }) {
  return (
    <PageWrapper>
      <div clasName={isAvailable ? "available" : "unavailable"}>
        <Sprite npcId={imageId} />
        <h3>{name}</h3>
        <div>{location}</div>
      </div>
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  top: 0;
  border: 3px solid black;
  border-radius: 2px;
  width: 20%;
  margin: 10px;
  text-align: center;
  .available {
    background-color: gray;
  }
  .unavailable {
    background-color: lightgray;
    color: darkgray;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;
