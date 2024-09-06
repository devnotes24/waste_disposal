import { Box, IconButton, Tooltip } from "@mui/material"
import Header from "./Header"
import { Outlet, useNavigate  } from "react-router-dom"
import { makeStyles } from '@mui/styles';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';

// Custom styles
const useStyles = makeStyles((theme) => ({
    fixedButton: {
      position: 'fixed',
      bottom: theme.spacing(2),
      right: theme.spacing(2),
      zIndex: 1000,
      backgroundColor: theme.palette.primary.main,
      '&:hover': {
        backgroundColor: theme.palette.primary.dark,
      },
    },
    tooltip: {
      fontSize: '0.875rem',
    },
  }));
function AppLayout() {
    const navigate = useNavigate();
    const classes = useStyles();
    return (
        <Box>
            <Header/>
            <Box sx={{paddingX : {xs : 0.5 , sm : 2 , py : 2},  pt : 2}}>
                <Outlet/>
            </Box>
                    {/* Fixed Button */}
        <Tooltip title="Meet the Developers" classes={{ tooltip: classes.tooltip }}>
          <IconButton
            className={classes.fixedButton}
            onClick={() => navigate('/developerInfo')} // Redirect to the DevelopersInfo page
          >
            <DeveloperModeIcon />
          </IconButton>
        </Tooltip>
        </Box>
    )
}

export default AppLayout
