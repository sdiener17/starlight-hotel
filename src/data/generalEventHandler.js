import { useDispatch } from "react-redux";
import { updateSubAreaAvailable } from "./locationSlice";

export function useExploreEvent(eventName) {
  const dispatch = useDispatch();

  if (eventName === "found_darla") {
    dispatch(
      updateSubAreaAvailable({
        parentLocationId: 0,
        availableOptionId: 1,
        setValueTo: false,
      })
    );
  } //end found_darla
}
