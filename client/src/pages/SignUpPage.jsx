import { Box, Typography, Container, TextField, Button, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useRef, useState } from 'react';
import { useTheme } from '@emotion/react';
import { register } from '../services/apiRegister';
import SimpleBackDrop from '../components/SimpleBackDrop';
import toast from 'react-hot-toast';
function SignUpPage() {
  const navigate = useNavigate();
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';
  const formRef = useRef(null); // Create a ref for the form
  const [error, setError] = useState(null); // State to store error messages
  const [loading , setIsLoading] = useState(false);

  // Validation functions
  function isAlphaOnly(str) {
    return /^[A-Za-z ]+$/.test(str);
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function isValidPassword(password) {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
  }

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

    if (!isAlphaOnly(name)) {
      setError('First name should not contain numbers.');
      return;
    }

    if (!isAlphaOnly(lastName)) {
      setError('Last name should not contain numbers.');
      return;
    }

    if (!isValidEmail(email)) {
      setError('Invalid email address.');
      return;
    }

    if (!isValidPassword(password)) {
      setError('Password must be at least 8 characters long and include an uppercase letter, a lowercase letter, a digit, and a special character.');
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
      setIsLoading(true)
      const response = await register(data); // Await the login function
      console.log(response);
      if (response.success) {
        navigate('/signIn'); // Navigate if login is successful
        toast.success('Sign Up successful')
      } else {
        console.log("Sign Up failed");
        toast.error('Sign Up failed')
      }
    } catch (error) {
      console.error('Sign up failed:', error);
      toast.error('Sign Up failed')
      // Display an error message to the user if necessary
    }
    finally{
      setIsLoading(false)
    }

    // Clear the error if form is valid
    setError(null);

    // Reset the form after submission
    if (formRef.current) {
      formRef.current.reset();
    }
  }

  return (
    <>
    <SimpleBackDrop loading={loading}/>
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
            <Box sx={{ display: 'flex', gap: 2 }}>
              <TextField
                size="small"
                label="First Name"
                name="name"
                variant="outlined"
                margin="normal"
                required
                fullWidth
                sx={{ flex: '3 1 0%' }}
                inputProps={{ pattern: "[A-Za-z]*", title: "First Name should not contain numbers" }}
              />
              <TextField
                size="small"
                label="Last Name"
                name="lastName"
                variant="outlined"
                margin="normal"
                required
                fullWidth
                sx={{ flex: '2 1 0%' }}
                inputProps={{ pattern: "[A-Za-z]*", title: "Last Name should not contain numbers" }}
              />
            </Box>
            <TextField
              size="small"
              label="Email Address"
              name="email"
              variant="outlined"
              type="email"
              margin="normal"
              required
              fullWidth
            />
            <TextField
              size="small"
              label="Password"
              name="password"
              variant="outlined"
              type="password"
              margin="normal"
              required
              fullWidth
            />
            <TextField
              size="small"
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
    </>
  );
}

export default SignUpPage;
