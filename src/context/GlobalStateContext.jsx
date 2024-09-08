import { useState, createContext, useEffect } from "react";
import PropTypes from 'prop-types';
import { getToken } from "../services/tokenService";
// import { getToken } from "../services/tokenService";

const GlobalStateContext = createContext();

function GlobalStateProvider({ children }) {

    //for authentication
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    //for theme
    // const [isDarkMode , setIsDarkMode] = useState(false);


    const token = getToken();

    useEffect(() => {
      setIsAuthenticated(!!token);
    }, [ token , setIsAuthenticated]);
  

    //provide the states here
    const value = { 
                    isAuthenticated, setIsAuthenticated ,
                    // isDarkMode , setIsDarkMode ,
                }
    return (
        <GlobalStateContext.Provider value={value}>
            {children}
        </GlobalStateContext.Provider>
    );
}

GlobalStateProvider.propTypes = {
    children: PropTypes.node.isRequired,  // Use PropTypes.node to cover all possible child types
};

export { GlobalStateProvider, GlobalStateContext };
