import React, { useState } from 'react';
import { Button, TextField, Typography, Container, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username && password) {
      navigate('/account-info');
    } else {
      alert('Please fill all fields');
    }
  };

  return (
    <Container maxWidth="xs">
      <Box sx={{ padding: '2rem', boxShadow: 3, borderRadius: 2, backgroundColor: '#f5f5f5' }}>
        <Typography variant="h4" gutterBottom textAlign="center">
          Login
        </Typography>
        <form onSubmit={handleLogin}>
          <TextField
            label="Username"
            fullWidth
            margin="normal"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button variant="contained" color="primary" fullWidth type="submit" sx={{ marginTop: 2 }}>
            Login
          </Button>
        </form>
        <Typography variant="body2" align="center" sx={{ marginTop: 2 }}>
          <a href="/forgot-password">Forgot Password?</a>
        </Typography>
      </Box>
    </Container>
  );
};

export default Login;
