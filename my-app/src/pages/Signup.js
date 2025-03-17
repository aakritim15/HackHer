import React, { useState } from 'react';
import bcrypt from 'bcryptjs';
import { Button, TextField, Typography, Container, Box, Select, MenuItem, InputLabel, FormControl, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';

// Country Codes list (This is just a small example; you can extend it with actual country codes)
const countryCodes = [
  { code: '+1', name: 'USA' },
  { code: '+44', name: 'UK' },
  { code: '+91', name: 'India' },
  { code: '+61', name: 'Australia' },
];

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    username: '',
    aadhar: '',
    age: '',
    salary: '',
    employmentType: '',
    accountType: 'Basic',
    countryCode: '+1', // Default country code (USA)
    phone: '',
    dob: '',
    password: '',
    confirmPassword: '',
  });
  const [passwordError, setPasswordError] = useState('');
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Validate password strength
    if (name === 'password') {
      const passwordValidation = validatePassword(value);
      setPasswordError(passwordValidation.errorMessage);
      setIsPasswordValid(passwordValidation.isValid);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    if (!isPasswordValid) {
      alert('Please fix the password requirements.');
      return;
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(formData.password, 10);

    // Save the data to localStorage
    const userData = {
      ...formData,
      password: hashedPassword,
    };

    // Save user data in localStorage
    localStorage.setItem('userData', JSON.stringify(userData));

    // Navigate to the account info page
    navigate('/account-info');
  };

  // Password validation logic
  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (password.length === 0) {
      return { isValid: false, errorMessage: '' };
    }
    const isValid = passwordRegex.test(password);
    const errorMessage = isValid
      ? ''
      : 'Password must be at least 8 characters long, contain at least one uppercase letter, one number, and one special character.';
    return { isValid, errorMessage };
  };

  return (
    <Container
      maxWidth="xs"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh', // Full screen height
      }}
    >
      <Box
        sx={{
          padding: '2rem',
          width: '100%', // Full width inside the container
          maxWidth: '600px', // Increased width
          minHeight: '600px', // Reduced height
          boxShadow: 3,
          borderRadius: 2,
        }}
      >
        <Typography variant="h4" gutterBottom textAlign="center">
          Sign Up
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {/* Left side */}
            <Grid item xs={12} sm={6}>
              <TextField
                label="Name"
                fullWidth
                margin="normal"
                value={formData.name}
                onChange={handleChange}
                name="name"
                sx={{ input: { color: 'black' } }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Email"
                type="email"
                fullWidth
                margin="normal"
                value={formData.email}
                onChange={handleChange}
                name="email"
                sx={{ input: { color: 'black' } }}
              />
            </Grid>

            {/* Right side */}
            <Grid item xs={12} sm={6}>
              <TextField
                label="Username"
                fullWidth
                margin="normal"
                value={formData.username}
                onChange={handleChange}
                name="username"
                sx={{ input: { color: 'black' } }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Aadhar Card"
                fullWidth
                margin="normal"
                value={formData.aadhar}
                onChange={handleChange}
                name="aadhar"
                sx={{ input: { color: 'black' } }}
              />
            </Grid>

            {/* Left side */}
            <Grid item xs={12} sm={6}>
              <TextField
                label="Age"
                type="number"
                fullWidth
                margin="normal"
                value={formData.age}
                onChange={handleChange}
                name="age"
                sx={{ input: { color: 'black' } }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Salary"
                type="number"
                fullWidth
                margin="normal"
                value={formData.salary}
                onChange={handleChange}
                name="salary"
                sx={{ input: { color: 'black' } }}
              />
            </Grid>

            {/* Right side */}
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth margin="normal">
                <InputLabel>Employment Type</InputLabel>
                <Select
                  name="employmentType"
                  value={formData.employmentType}
                  onChange={handleChange}
                  sx={{ color: 'black' }}
                >
                  <MenuItem value="Full-time">Full-time</MenuItem>
                  <MenuItem value="Part-time">Part-time</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth margin="normal">
                <InputLabel>Account Type</InputLabel>
                <Select
                  name="accountType"
                  value={formData.accountType}
                  onChange={handleChange}
                  sx={{ color: 'black' }}
                >
                  <MenuItem value="Basic">Basic</MenuItem>
                  <MenuItem value="Premium">Premium</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            {/* Left side */}
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth margin="normal">
                <InputLabel>Country Code</InputLabel>
                <Select
                  name="countryCode"
                  value={formData.countryCode}
                  onChange={handleChange}
                  sx={{ color: 'black' }}
                >
                  {countryCodes.map((country) => (
                    <MenuItem key={country.code} value={country.code}>
                      {country.name} ({country.code})
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Phone"
                type="tel"
                fullWidth
                margin="normal"
                value={formData.phone}
                onChange={handleChange}
                name="phone"
                sx={{ input: { color: 'black' } }}
              />
            </Grid>

            {/* Full width items */}
            <Grid item xs={12}>
              <TextField
                label="Date of Birth"
                type="date"
                fullWidth
                margin="normal"
                value={formData.dob}
                onChange={handleChange}
                name="dob"
                InputLabelProps={{
                  shrink: true,
                }}
                sx={{ input: { color: 'black' } }}
              />
            </Grid>

            {/* Password fields */}
            <Grid item xs={12} sm={6}>
              <TextField
                label="Password"
                type="password"
                fullWidth
                margin="normal"
                value={formData.password}
                onChange={handleChange}
                name="password"
                helperText={passwordError}
                error={passwordError.length > 0}
                sx={{ input: { color: 'black' } }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Confirm Password"
                type="password"
                fullWidth
                margin="normal"
                value={formData.confirmPassword}
                onChange={handleChange}
                name="confirmPassword"
                sx={{ input: { color: 'black' } }}
              />
            </Grid>

            {/* Password requirement message */}
            <Grid item xs={12}>
              <Typography variant="body2" color="textSecondary" sx={{ marginTop: 1 }}>
                Password must be at least 8 characters long, contain at least one uppercase letter, one number, and one special character.
              </Typography>
            </Grid>
          </Grid>

          <Button variant="contained" color="primary" fullWidth type="submit" sx={{ marginTop: 2 }}>
            Sign Up
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default Signup;
