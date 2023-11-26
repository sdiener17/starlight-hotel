import { useDispatch } from "react-redux";
import { updateSubAreaAvailable } from "./locationSlice";

export default function handleEvent(eventName) {
  const dispatch = useDispatch();

  if (eventName === "found_darla") {
    dispatch(
      updateSubAreaAvailable({
        parentLocationId: 0,
        availableOptionId: 1,
        setValueTo: false,
      })
    );
  }
}
