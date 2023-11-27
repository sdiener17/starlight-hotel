import { createSlice } from "@reduxjs/toolkit";
import { availableOptionsEnum, locationData } from "./locationData";

export const locationSlice = createSlice({
  name: "locations",
  initialState: locationData,
  reducers: {
    updateIsUnlocked: (state, action) => {
      state.map((loc) => {
        if (loc.locationId === action.payload.locationId) {
          //   return {
          //     ...npc,
          //     npcIsAvailable: action.payload.updatedValue,
          //   };
          loc.isUnlocked = action.payload.updatedValue;
        } else {
          //   return npc;
        }
      });
    },
    updateSubAreaAvailable: (state, action) => {
      const location = state.find(
        (loc) =>
          Number(loc.locationId) === Number(action.payload.parentLocationId)
      );
      if (location != undefined) {
        const found = location.availableOptions.find(
          (option) =>
            Number(option.availableOptionId) ===
            Number(action.payload.availableOptionId)
        );
        found.currentlyDisabled = action.payload.setValueTo;
      }
    },
  },
});

export function selectLocationById(locations, id) {
  return locations.filter((location) => location.locationId === id);
  //   locationState.map((loc) => {
  //     if (loc.locationId === id) {
  //       return loc;
  //     }
  //   });
  //   return undefined;
}

// export function selectAvailableOptionEnumDataById(id) {
//   availableOptionsEnum.map((op) => {
//     if (op.id === id) {
//       return op;
//     }
//   });
//   return "unknown";
// }

// Action creators are generated for each case reducer function
export const { updateIsUnlocked, updateSubAreaAvailable } =
  locationSlice.actions;

export default locationSlice.reducer;
