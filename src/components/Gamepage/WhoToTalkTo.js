/* Written by: Sarah Diener (sdiener17)
 * Created: 11/25/23
 * Description: Displays a listing of available npc's for the player to talk to.
 * Used By: Gamepage
 */
import React, { useEffect } from "react";
import { useStats } from "../../data/GameContext";
import styled from "styled-components";
import NPCCard from "./NPCCard";
import { Richard, Darla } from "../sprites/Characters";

export default function WhoToTalkTo({ setCurrentLocation }) {
  const stats = useStats();
  const personRichard = { n: "Richard", location: "", available: false };
  const personDarla = { n: "Darla", location: "", available: false };
  const personLinenLady = { n: "Linen Lady", location: "", available: false };
  const personEve = { n: "Eve", location: "", available: false };
  const personFranc = { n: "Franc", location: "", available: false };
  const personLenora = { n: "Lenora", location: "", available: false };
  const personMaria = { n: "Maria", location: "", available: false };
  const personBernard = { n: "Bernard", location: "", available: false };

  function viewStat(statName) {
    stats.map((s) => {
      if (s.name === statName) {
        return s.content;
      }
    });
    return -1;
  } //end viewStat

  function convertNumToLocation(num) {
    if (Number(num) === 0) {
      return "Laundry Manager";
    } else if (Number(num) === 1) {
      return "Laundry Operator";
    } else if (Number(num) === 2) {
      return "Houseman";
    } else {
      return "Unknown";
    }
  }

  //function to return true/false if the player knows this npc
  function findAvailability(num) {
    if (Number(num) === -1 || Number(num) === 0) {
      return false;
    } else {
      return true;
    }
  }

  useEffect(() => {
    //Data for Richard
    if (Number(viewStat("knowsRichard")) === 1) {
      personRichard.location = convertNumToLocation(
        viewStat("locationRichard")
      );
      personRichard.available = findAvailability(
        viewStat("isAvailableRichard")
      );
    }
    //Data for Darla
    if (Number(viewStat("knowsDarla")) === 1) {
      personDarla.location = convertNumToLocation(viewStat("locationDarla"));
      personDarla.available = findAvailability(viewStat("isAvailableDarla"));
    }
    //Data for Linen Lady
    if (Number(viewStat("knowsLinenLady")) === 1) {
      personLinenLady.location = convertNumToLocation(
        viewStat("locationLinenLady")
      );
      personLinenLady.available = findAvailability(
        viewStat("isAvailableLinenLady")
      );
    }
  }, []);

  return (
    <PageWrapper>
      <h2>Who would you like to talk to?</h2>
      <div className="peopleWrapper">
        <NPCCard
          image={<Richard />}
          name={personRichard.n}
          location={personRichard.location}
          available={personRichard.available}
        />
        <NPCCard
          image={<Darla />}
          name={personDarla.n}
          location={personDarla.location}
          available={personDarla.available}
        />
      </div>
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  top: 0;
  .peopleWrapper {
    display: flex;
    flex-direction: row;
  }
`;
