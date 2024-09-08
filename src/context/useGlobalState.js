import { useContext } from "react";
import {GlobalStateContext} from "./GlobalStateContext";
export function useGlobalState() {
    return useContext(GlobalStateContext);
  };