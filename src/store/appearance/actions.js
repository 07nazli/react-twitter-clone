import { setBackgroundColor, setColor, setFontSize } from ".";
import store from "../../store";

export const setBackgroundColor = (data) =>
  store.dispatch(setBackgroundColor(data));
export const setColor = (data) => store.dispatch(setColor(data));
export const setFontSize = (data) => store.dispatch(setFontSize(data));
