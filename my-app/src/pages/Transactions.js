// Transactions.js
import React from 'react';
import { Typography, Grid, List, ListItem, ListItemText } from '@mui/material';

const Transactions = () => {
  const transactions = [
    { id: 1, date: '2025-03-17', amount: ' - ₹500', description: ' Shopping' },
    { id: 2, date: '2025-03-18', amount: ' - ₹2000', description: 'Travel' },
    { id: 3, date: '2025-03-10', amount: ' - ₹1500', description: 'Food' },
    { id: 4, date: '2025-03-15', amount: ' - ₹1000', description: 'Education' },
    { id: 5, date: '2025-03-12', amount: ' - ₹500', description: 'Savings' },
    { id: 6, date: '2025-03-16', amount: ' + ₹500', description: 'Received from John' },
  ];

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h5">Transaction History</Typography>
        <List>
          {transactions.map((transaction) => (
            <ListItem key={transaction.id}>
              <ListItemText
                primary={`${transaction.description}: ${transaction.amount}`}
                secondary={`Date: ${transaction.date}`}
              />
            </ListItem>
          ))}
        </List>
      </Grid>
    </Grid>
  );
};

export default Transactions;
