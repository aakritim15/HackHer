import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Avatar, Box } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';

const Header = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#333' }}>
      <Toolbar>
        {/* Logo */}
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          UnityAI
        </Typography>

        {/* Chatbot Icon */}
        <IconButton color="inherit">
          <ChatIcon />
        </IconButton>

        {/* Account Avatar */}
        <Box sx={{ ml: 2 }}>
          <Avatar alt="User Account" src="/path-to-avatar.jpg" />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
