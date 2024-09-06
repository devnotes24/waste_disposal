import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';
import ThemeButton from './ThemeButton';

import FullscreenButton from './FullScreenButton';
import { useGlobalState } from '../context/useGlobalState';

const pages = [{label : "HOME" , path : ""},{label : "ABOUT" , path : "/about"},{label : "SERVICES" , path : "/services"},{label : "CONTACT" , path : "/contact"},{label : "DEVELOPERS" , path : "/developerInfo"}];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Header() {
  const navigate = useNavigate();
  const {isAuthenticated , setIsAuthenticated} = useGlobalState();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  //logout function
  const handleLogout = () => {
    console.log("Logout cliicked");
    localStorage.removeItem('authToken');
    setIsAuthenticated(false);
    navigate("/");
    window.location.reload();
    handleCloseUserMenu();
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  function handleNavigate(path){
    navigate(path);
    handleCloseNavMenu();
  }
  return (<>
    <AppBar position="static">

      <Container maxWidth="xl">
        <Toolbar disableGutters>
          
          <Box
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
            }}
          >
             <img width={"40px"} height={"40px"} src="/Logo.svg"/>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => (
                <MenuItem key={page.label} onClick={() => handleNavigate(page.path)}>
                  <Typography sx={{ textAlign: 'center' }}>{page.label}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
            }}
          >
             <img width={"40px"} height={"40px"} src="/Logo.svg"/>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page.label}
                onClick={() => handleNavigate(page.path)}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page.label}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {/* {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
                </MenuItem>
              ))} */}
                <MenuItem onClick={handleCloseUserMenu}>
                  <ThemeButton/>
                </MenuItem>
                <MenuItem sx={{display : 'flex' , gap : 1 , alignItems : "center"}} onClick={handleCloseUserMenu}>
                  <Typography sx={{ textAlign: 'center' , mt : -1}}>Full Screen</Typography>
                  <FullscreenButton />
                </MenuItem>
                {isAuthenticated ? 
                <MenuItem onClick={handleLogout}>
                  <Typography sx={{ textAlign: 'center' }}>Logout</Typography>
                </MenuItem>
                :
                <MenuItem onClick={() => {handleCloseUserMenu() ; navigate('/signIn')}}>
                  <Typography sx={{ textAlign: 'center' }}>Login</Typography>
                </MenuItem>
                }
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
</>
  );
}
export default Header;
