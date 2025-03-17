// Loan.js
import React from 'react';
import { Typography, Grid, Paper, Button } from '@mui/material';

const Loan = () => {
  const handleApplyLoan = (amount) => {
    // Here, you can add your logic to handle the loan application (e.g., redirect to application form or call an API).
    alert(`Loan of ₹${amount} applied successfully!`);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        {/* Loan 1 */}
        <Paper style={{ padding: 20, backgroundColor: '#f4f4f4', borderRadius: '8px' }}>
          <Typography variant="h5">Loan Details</Typography>
          <Typography variant="h6">Loan Amount: ₹20,000</Typography>
          <Typography variant="h6">Interest Rate: 10% p.a.</Typography>
          <Typography variant="h6">Tenure: 1 Years</Typography>
          <Grid container justifyContent="flex-end">
            <Button
              variant="contained"
              color="primary"
              style={{ marginTop: 20 }}
              onClick={() => handleApplyLoan(20000)}
            >
              Apply Loan
            </Button>
          </Grid>
        </Paper>

        {/* Loan 2 */}
        <Paper style={{ padding: 20, backgroundColor: '#f4f4f4', borderRadius: '8px' }}>
          <Typography variant="h5">Loan Details</Typography>
          <Typography variant="h6">Loan Amount: ₹50,000</Typography>
          <Typography variant="h6">Interest Rate: 15% p.a.</Typography>
          <Typography variant="h6">Tenure: 2 Years</Typography>
          <Grid container justifyContent="flex-end">
            <Button
              variant="contained"
              color="primary"
              style={{ marginTop: 20 }}
              onClick={() => handleApplyLoan(50000)}
            >
              Apply Loan
            </Button>
          </Grid>
        </Paper>

       
      </Grid>
    </Grid>
  );
};

export default Loan;
