import { createContext } from "react";
import { PportalContent } from "./pportal-content";

const stubFn = () => {
  throw new Error("wrap parent component with <PportalProvider />");
};

export type PportalContextValue = {
  _setContent: (content: PportalContent) => void;
  _removeContent: (content: PportalContent) => void;
};

const initialContext: PportalContextValue = {
  _setContent: stubFn,
  _removeContent: stubFn,
};

export default createContext(initialContext);
