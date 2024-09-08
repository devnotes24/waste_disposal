import FullscreenOutlinedIcon from '@mui/icons-material/FullscreenOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import { useState } from 'react';
import { useTheme } from '@mui/material/styles';

const FullscreenButton = () => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const theme = useTheme(); // Access the MUI theme

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      // Enter full-screen mode
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen().then(() => {
          setIsFullScreen(true);
        }).catch(err => {
          console.error('Failed to enter full-screen mode:', err);
        });
      } else if (document.documentElement.mozRequestFullScreen) { // Firefox
        document.documentElement.mozRequestFullScreen().then(() => {
          setIsFullScreen(true);
        }).catch(err => {
          console.error('Failed to enter full-screen mode:', err);
        });
      } else if (document.documentElement.webkitRequestFullscreen) { // Chrome, Safari, and Opera
        document.documentElement.webkitRequestFullscreen().then(() => {
          setIsFullScreen(true);
        }).catch(err => {
          console.error('Failed to enter full-screen mode:', err);
        });
      } else if (document.documentElement.msRequestFullscreen) { // IE/Edge
        document.documentElement.msRequestFullscreen().then(() => {
          setIsFullScreen(true);
        }).catch(err => {
          console.error('Failed to enter full-screen mode:', err);
        });
      }
    } else {
      // Exit full-screen mode
      if (document.exitFullscreen) {
        document.exitFullscreen().then(() => {
          setIsFullScreen(false);
        }).catch(err => {
          console.error('Failed to exit full-screen mode:', err);
        });
      } else if (document.mozCancelFullScreen) { // Firefox
        document.mozCancelFullScreen().then(() => {
          setIsFullScreen(false);
        }).catch(err => {
          console.error('Failed to exit full-screen mode:', err);
        });
      } else if (document.webkitExitFullscreen) { // Chrome, Safari, and Opera
        document.webkitExitFullscreen().then(() => {
          setIsFullScreen(false);
        }).catch(err => {
          console.error('Failed to exit full-screen mode:', err);
        });
      } else if (document.msExitFullscreen) { // IE/Edge
        document.msExitFullscreen().then(() => {
          setIsFullScreen(false);
        }).catch(err => {
          console.error('Failed to exit full-screen mode:', err);
        });
      }
    }
  };

  // Determine the button color based on the theme
  const iconColor = theme.palette.mode === 'dark' ? 'white' : 'black';

  return (
    <button
      onClick={toggleFullScreen}
      style={{
        background: 'none', // Remove the background
        border: 'none', // Remove the border
        padding: 0, // Remove padding
        fontSize: '24px', // Adjust the size as needed
        cursor: 'pointer',
        color: iconColor, // Apply the color based on the theme
      }}
    >
      {isFullScreen ? <FullscreenExitOutlinedIcon /> : <FullscreenOutlinedIcon />}
    </button>
  );
};

export default FullscreenButton;
