import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const AccountInfo = () => {
  // Retrieve the user data from localStorage
  const user = JSON.parse(localStorage.getItem('userData')) || {}; // If no data, return an empty object

  return (
    <Container maxWidth="sm">
      <Box sx={{ padding: '2rem', boxShadow: 3, borderRadius: 2, backgroundColor: '#f5f5f5' }}>
        <Typography variant="h4" gutterBottom>
          Account Information
        </Typography>
        <Typography variant="body1">
          <strong>Name:</strong> {user.name}
        </Typography>
        <Typography variant="body1">
          <strong>Email:</strong> {user.email}
        </Typography>
        <Typography variant="body1">
          <strong>Username:</strong> {user.username}
        </Typography>
        <Typography variant="body1">
          <strong>Aadhar Card:</strong> {user.aadhar}
        </Typography>
        <Typography variant="body1">
          <strong>Age:</strong> {user.age}
        </Typography>
        <Typography variant="body1">
          <strong>Salary:</strong> {user.salary}
        </Typography>
        <Typography variant="body1">
          <strong>Employment Type:</strong> {user.employmentType}
        </Typography>
        <Typography variant="body1">
          <strong>Account Type:</strong> {user.accountType}
        </Typography>
        <Typography variant="body1">
          <strong>Phone:</strong> {user.phone}
        </Typography>
        <Typography variant="body1">
          <strong>Date of Birth:</strong> {user.dob}
        </Typography>
      </Box>
    </Container>
  );
};

export default AccountInfo;
