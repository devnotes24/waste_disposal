import { ApplicationThemeContext } from "./ApplicationThemeContext";
import { useContext } from "react";
export function useApplicationTheme(){
    return useContext(ApplicationThemeContext)
}