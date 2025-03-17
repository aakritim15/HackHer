// About.js
import React from 'react';
import { Typography, Grid } from '@mui/material';

const About = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h5">About</Typography>
        <Typography variant="body1">
          This is a financial dashboard app that allows users to track their transactions, loans, and more. Our goal is to provide an easy way for users to manage their finances efficiently.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default About;
