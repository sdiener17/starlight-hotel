/* Written by: Sarah Diener (sdiener17)
 * Created: 11/19/23
 * Description: Context and reducer for the game.
 */
import { createContext, useContext, useReducer } from "react";

export const StatsContext = createContext(null);
export const StatsDispatchContext = createContext(null);

export function DataProvider({ children }) {
  const [stats, dispatch] = useReducer(statsReducer, initialStats);

  return (
    <StatsContext.Provider value={stats}>
      <StatsDispatchContext.Provider value={dispatch}>
        {children}
      </StatsDispatchContext.Provider>
    </StatsContext.Provider>
  );
}

export function useStats() {
  return useContext(StatsContext);
}

export function useStatsDispatch() {
  return useContext(StatsDispatchContext);
}

function statsReducer(stats, action) {
  switch (action.type) {
    case "increment_tutorial_stage": {
      return stats.map((s) => {
        if (s.name === "tutorialStage") {
          return { name: "tutorialStage", content: s.content + 1 };
        } else {
          return s;
        }
      });
    }
    case "start_game": {
      return stats.map((s) => {
        if (s.name === "gameRunning") {
          return { name: "gameRunning", content: 1 };
        } else {
          return s;
        }
      });
    }
    case "deleted": {
      return stats.filter((s) => s.id !== action.id);
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}

const initialStats = [
  { name: "gameRunning", content: 0 },
  { name: "playerTotalLevel", content: 0 },
  { name: "currentEnergy", content: 50 },
  { name: "sortingSpeed", content: 0 },
  { name: "foldingAccuracy", content: 0 },
  { name: "foldingSpeed", content: 0 },
  { name: "stackingAbility", content: 0 },
  { name: "orderProficiency", content: 0 },
  { name: "machineWorkingProficiency", content: 0 },
  { name: "linenLocationKnowledge", content: 0 },
  { name: "strength", content: 0 },
  { name: "popularity", content: 0 },
  { name: "agility", content: 0 },
  { name: "stamina", content: 0 },
  { name: "stealth", content: 0 },
  { name: "canSorthWashcloths", content: 0 },
  { name: "canFoldTablecloths", content: 0 },
  { name: "canFoldTowels", content: 0 },
  { name: "canDistinguishTowels", content: 0 },
  { name: "canDistinguishBedding", content: 0 },
  { name: "canDistinguishTablecloths", content: 0 },
  { name: "canFillDiningOrders", content: 0 },
  { name: "canFillHousingOrders", content: 0 },
  { name: "canFillOutPaperwork", content: 0 },
  { name: "canBlendInAsHouseKeeperPublicArea", content: 0 },
  { name: "canBlendInAsHouseKeeperRoomService", content: 0 },
  { name: "canBlendInAsServer", content: 0 },
  { name: "canBlendInAsMember", content: 0 },
  { name: "knowsRichard", content: 0 },
  { name: "knowsDarla", content: 0 },
  { name: "knowsLinenLady", content: 0 },
  { name: "knowsEve", content: 0 },
  { name: "knowsFranc", content: 0 },
  { name: "knowsLenora", content: 0 },
  { name: "knowsMaria", content: 0 },
  { name: "knowsBrenna", content: 0 },
  { name: "knowsBernard", content: 0 },
  { name: "isAvailableRichard", content: 1 },
  { name: "isAvailableDarla", content: 1 },
  { name: "isAvailableLinenLady", content: 1 },
  { name: "isAvailableEve", content: 1 },
  { name: "isAvailableFranc", content: 1 },
  { name: "isAvailableLenora", content: 1 },
  { name: "isAvailableMaria", content: 1 },
  { name: "isAvailableBrenna", content: 1 },
  { name: "isAvailableBernard", content: 1 },
  { name: "locationRichard", content: 0 },
  { name: "locationDarla", content: 1 },
  { name: "locationLinenLady", content: 1 },
  { name: "locationEve", content: 1 },
  { name: "locationFranc", content: 1 },
  { name: "locationLenora", content: 1 },
  { name: "locationMaria", content: 1 },
  { name: "locationBrenna", content: 1 },
  { name: "locationBernard", content: 2 },
  { name: "unlockedLaundryOffice", content: 0 },
  { name: "unlockedUniformOffice", content: 0 },
  { name: "unlockedMainOffice", content: 0 },
  { name: "unlockedHouseSeafoam", content: 0 },
  { name: "unlockedHouseStarfish", content: 0 },
  { name: "unlockedHousePearl", content: 0 },
  { name: "unlockedHouseShark", content: 0 },
  { name: "unlockedHouseGeorge", content: 0 },
  { name: "unlockedMainHotel", content: 0 },
  { name: "unlockedDiningRoom", content: 0 },
  { name: "unlockedKitchen", content: 0 },
  { name: "unlockedGolfCartGarage", content: 0 },
  { name: "unlockedGolfCourse", content: 0 },
  { name: "totalWashclothsSorted", content: 0 },
  { name: "totalTableclothsFolded", content: 0 },
  { name: "totalLargeTowelsFolded", content: 0 },
  { name: "totalSmallTowelsFolded", content: 0 },
  { name: "totalOrdersFilled", content: 0 },
  { name: "tutorialStage", content: 0 },
];
