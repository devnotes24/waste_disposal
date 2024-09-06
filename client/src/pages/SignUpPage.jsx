import { Box, Typography, Container, TextField, Button, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useRef, useState } from 'react';
import { useTheme } from '@emotion/react';
import { register } from '../services/apiRegister';

function SignUpPage() {
  const navigate = useNavigate();
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';
  const formRef = useRef(null); // Create a ref for the form
  const [error, setError] = useState(null); // State to store error messages

  async function handleFormSubmit(event) {
    event.preventDefault(); // Prevent the default form submit behavior

    // Collect form data
    const formData = new FormData(event.target);
    const name = formData.get('name');
    const lastName = formData.get('lastName');
    const email = formData.get('email');
    const password = formData.get('password');
    const confirmPassword = formData.get('confirmPassword');

    // Basic validation
    if (!name || !lastName || !email || !password || !confirmPassword) {
      setError('All fields are required.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    // Log or handle form data
    const data = { name, lastName, email, password };
    console.log({ name, lastName, email, password });
    try {
        const response = await register(data); // Await the login function
      console.log(response);
        if (response.success) {
          navigate('/signIn'); // Navigate if login is successful
          alert("Registration successful")
        }
        else {
          console.log("Sign Up failed");
          alert("Sign Up failed");
        }
        
      } catch (error) {
        console.error('Sign up failed:', error);
        alert("Sign Up failed");
        // Display an error message to the user if necessary
      }

    // Clear the error if form is valid
    setError(null);

    // TODO: Add your form submission logic here (e.g., API call)

    // Reset the form after submission
    if (formRef.current) {
      formRef.current.reset();
    }
  }

  return (
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
            <img src="/Logo.svg" alt="Logo" width="70px" />
          </Box>

          <Typography
            variant="h5"
            component="h1"
            sx={{
              mb: 2,
              fontWeight: 'bold',
              color: isDarkMode ? '#fff' : '#333',
              textAlign: 'center',
            }}
          >
            Create Your Account
          </Typography>

          {error && (
            <Typography
              variant="body2"
              color="error"
              sx={{ mb: 2, textAlign: 'center' }}
            >
              {error}
            </Typography>
          )}

          <Box
            component="form"
            ref={formRef} // Attach the ref to the form
            onSubmit={handleFormSubmit}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
            }}
            noValidate
            autoComplete="off"
          >
            <Box sx={{display : "flex" , gap : 2 }}>
            <TextField
            size = "small"
              label="First Name"
              name="name"
              variant="outlined"
              margin="normal"
              required
              fullWidth
              sx={{flex: '3 1 0%',}}
            />
            <TextField
            size = "small"
              label="Last Name"
              name="lastName"
              variant="outlined"
              margin="normal"
              required
              fullWidth
              sx={{flex: '2 1 0%',}}
            />
            </Box>
            <TextField
            size = "small"
              label="Email Address"
              name="email"
              variant="outlined"
              type="email"
              margin="normal"
              required
              fullWidth
            />
            <TextField
            size = "small"
              label="Password"
              name="password"
              variant="outlined"
              type="password"
              margin="normal"
              required
              fullWidth
            />
            <TextField
            size = "small"
              label="Re-enter Password"
              name="confirmPassword"
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
              Sign Up
            </Button>
            <Typography
              variant="body2"
              align="center"
              sx={{ color: '#555' }}
            >
              {"Already have an account?"}
              <Button
                variant="text"
                color="primary"
                onClick={() => navigate("/signIn")}
              >
                Sign In
              </Button>
            </Typography>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}

export default SignUpPage;
