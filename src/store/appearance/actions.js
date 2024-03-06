import { setBackgroundColor, _setColor, _setFontSize } from ".";
import store from "../../store";

export const setBackgroundColor = (data) =>
  store.dispatch(setBackgroundColor(data));
export const setColor = (data) => store.dispatch(_setColor(data));
export const setFontSize = (data) => store.dispatch(_setFontSize(data));
