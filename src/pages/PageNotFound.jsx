// import { useTheme } from '@emotion/react';
import { Box, Typography, Button } from '@mui/material';

import { useNavigate } from 'react-router-dom';

const PageNotFound = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate(-1);
  };
//   const theme = useTheme();
//   const isDarkMode = theme.palette.mode === 'dark';
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        textAlign: 'center',
        backgroundColor: (theme) => theme.palette.background.paper,
        padding: 3,
      }}
    >
      <Typography variant="h1" sx={{ fontSize: '7rem', fontWeight: 'bold', color: (theme) => theme.palette.error.main }}>
        404
      </Typography>
      <Typography variant="h6" sx={{ mb: 2  }}>
      {/* <Typography variant="h6" sx={{ mb: 2  , color : isDarkMode? "white" : "black"}}> */}
        Oops! The page you are looking for does not exist.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={handleGoHome}
      >
        Back
      </Button>
    </Box>
  );
};

export default PageNotFound;
