import { useTheme } from '@emotion/react';
import { Box, Typography, Container, TextField, Button, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { login } from '../services/apiAuth';
import { useGlobalState } from '../context/useGlobalState';
import { useState } from 'react';
import SimpleBackDrop from '../components/SimpleBackDrop';
import toast from 'react-hot-toast';

function SignInPage() {
  const [loading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';

  const { setIsAuthenticated } = useGlobalState();

  // Email validation function
  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  async function handleFormSubmit(event) {
    event.preventDefault();
    // Collect form data
    const formData = new FormData(event.target);
    const email = formData.get('email');
    const password = formData.get('password');

    // Basic validation
    if (!email || !password) {
      toast.error("Email and password are required.");
      return;
    }

    if (!isValidEmail(email)) {
      toast.error("Invalid email address. Must contain '@' and a domain (e.g., .com).");
      return;
    }

    // Log or handle form data
    const data = { email, password };

    try {
      setIsLoading(true);
      const token = await login(data); // Await the login function
      console.log(token);
      
      if (token) {
        setIsAuthenticated(true);
        toast.success("Login successful");
        navigate('/'); // Navigate if login is successful
      } else {
        toast.error("Invalid credentials");
        console.log("Invalid credentials");
      }
    } catch (error) {
      console.error('Login failed:', error);
      toast.error("Login failed");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <SimpleBackDrop loading={loading} />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '80vh',
          py: 4,
        }}
      >
        <Container maxWidth="xs">
          <Paper
            elevation={3}
            sx={{
              p: { xs: 2, sm: 3, md: 4 },
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
              Login
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
                type="email"
                margin="normal"
                required
                fullWidth
                inputProps={{
                  pattern: "^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$",
                  title: "Please enter a valid email address (e.g., example@domain.com)"
                }}
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
    </>
  );
}

export default SignInPage;
