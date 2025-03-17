// Dashboard.js
import React from 'react';
import { Typography, Grid } from '@mui/material';
import DonutChart from '../components/DonutChart'; // Assuming this component is already created

const Dashboard = () => {
  // Example data for Donut chart
  const data = {
    labels: ['Food', 'Travel', 'Education', 'Savings', 'Miscellaneous'],
    datasets: [
      {
        data: [1500, 2000, 1000, 500 , 500],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#FF9F40'],
      },
    ],
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={4}>
        <div style={{ padding: 20, backgroundColor: '#f4f4f4', borderRadius: '8px' }}>
          <Typography variant="h6">Total Amount: ₹10,000</Typography>
        </div>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <div style={{ padding: 20, backgroundColor: '#f4f4f4', borderRadius: '8px' }}>
          <Typography variant="h6">CIBIL Score: 70</Typography>
        </div>
      </Grid>
      <Grid item xs={12} sm={12} md={4}>
        <DonutChart data={data} />
      </Grid>
    </Grid>
  );
};

export default Dashboard;
