// Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemText, Divider } from '@mui/material';

const Sidebar = () => {
  return (
    <div style={{ width: 240, backgroundColor: '#333', color: '#fff', paddingTop: 20 }}>
      <List>
        <ListItem button component={Link} to="/dashboard">
          <ListItemText primary="Dashboard" />
        </ListItem>
        <Divider />
        <ListItem button component={Link} to="/transactions">
          <ListItemText primary="Transactions" />
        </ListItem>
        <Divider />
        <ListItem button component={Link} to="/loan">
          <ListItemText primary="Loan" />
        </ListItem>
        <Divider />
        <ListItem button component={Link} to="/account-info">
          <ListItemText primary="Account Info" />
        </ListItem>
        <Divider />
        <ListItem button component={Link} to="/about">
          <ListItemText primary="About" />
        </ListItem>
      </List>
    </div>
  );
};

export default Sidebar;
