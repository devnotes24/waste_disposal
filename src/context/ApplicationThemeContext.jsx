import { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider as MUIThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

export const ApplicationThemeContext = createContext();

export const ApplicationThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {

    // Initialize state from local storage if available
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || 'light'; // Default to light if no saved theme
  });

  useEffect(() => {
    // Save theme to local storage whenever it changes
    localStorage.setItem('theme', theme);
  }, [theme]);
  const root = document.documentElement;


//   this is for the scroll bar thumb color
  if (theme === 'dark') {
    root.style.setProperty('--scrollbar-thumb', '#333333');
  } else {
    root.style.setProperty('--scrollbar-thumb', '#cccccc');
  }




  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  
  // Create MUI theme based on the current theme state
  const muiTheme = createTheme({
    
    palette: {
      mode: theme,
      // mode: theme,
      success: {
        main: '#4caf50',   // Main success color
        light: '#80e27e',  // Light success color
        dark: '#087f23',   // Dark success color
        contrastText: '#fff', // Text color on success color
      },
      
    },
  });

  return (
    <ApplicationThemeContext.Provider value={{ theme, toggleTheme }}>
      <MUIThemeProvider theme={muiTheme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </ApplicationThemeContext.Provider>
  );
};

ApplicationThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
