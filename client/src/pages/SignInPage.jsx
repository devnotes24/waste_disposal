import { useTheme } from '@emotion/react';
import { Box, Typography, Container, TextField, Button, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { login } from '../services/apiAuth';
import { useGlobalState } from '../context/useGlobalState';

function SignInPage() {
  const navigate = useNavigate();
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';

  const {setIsAuthenticated} = useGlobalState();

  async function handleFormSubmit(event) {
    event.preventDefault();
        // Collect form data
    const formData = new FormData(event.target);
    const email = formData.get('email');
    const password = formData.get('password');

    // Basic validation
    if (!email || !password) {
      console.error("Email and password are required.");
      return;
    }

    // Log or handle form data
    const data = { email, password };

    try {
      const token = await login(data); // Await the login function

      setIsAuthenticated(true)
      if (token) {
        navigate('/'); // Navigate if login is successful
      }
      else {
        console.log("Invalid credentials");
        alert("Invalid credentials");
      }
      
    } catch (error) {
      console.error('Login failed:', error);
      alert("sign in failed");
      // Display an error message to the user if necessary
    }
  }
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '80vh',
        // backgroundColor: '#f0f4f8',
        py: 4,
      }}
    >
      <Container maxWidth="xs">
        <Paper
          elevation={3}
          sx={{
            p: {xs : 2 , sm : 3 , md : 4},
            borderRadius: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              mb: 3,
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <img src="/Logo.svg" alt="Logo" width="100px" />
          </Box>

          <Typography
            variant="h5"
            component="h1"
            sx={{
              mb: 2,
              fontWeight: 'bold',
              color: isDarkMode ? "#fff" : '#333',
              textAlign: 'center',
            }}
          >
            Welcome Back
          </Typography>

          <Box
            component="form"
            onSubmit={handleFormSubmit}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
            }}
          >
            <TextField
              label="Email Address"
              name="email"
              variant="outlined"
              type="text"
              // type="email"
              margin="normal"
              required
              fullWidth
            />
            <TextField
              label="Password"
              name="password"
              variant="outlined"
              type="password"
              margin="normal"
              required
              fullWidth
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ mt: 2, mb: 2 }}
              fullWidth
            >
              Login
            </Button>
            <Typography
              variant="body2"
              align="center"
              sx={{ color: '#555' }}
            >
              {"Don't have an account?"}
              <Button
                variant="text"
                color="primary"
                onClick={() => navigate("/signUp")}
              >
                Sign Up
              </Button>
            </Typography>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}

export default SignInPage;
