import { useDispatch } from "react-redux";
import { updateSubAreaAvailable } from "./locationSlice";
import { useEffect } from "react";

export function useExploreEvent() {
  const dispatch = useDispatch();
  //   useEffect(() => {}, [eventName]);
  const someVar = "Hello";
  const invokeEvent = (eventName = "") => {
    if (eventName === "found_darla") {
      dispatch(
        updateSubAreaAvailable({
          parentLocationId: 0,
          availableOptionId: 1,
          setValueTo: false,
        })
      );
    } //end found_darla
  };

  return [someVar, invokeEvent];
}
