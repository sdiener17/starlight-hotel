import { createContext, useContext, useReducer } from "react";

const StatsContext = createContext(null);
const StatsDispatchContext = createContext(null);

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
    case "added": {
      return [
        ...stats,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    }
    case "changed": {
      return stats.map((s) => {
        if (s.id === action.stat.id) {
          return action.stat;
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
  { id: 0, text: "Philosopher’s Path", done: true },
  { id: 1, text: "Visit the temple", done: false },
  { id: 2, text: "Drink matcha", done: false },
];
