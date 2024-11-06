import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

function Header() {
  return (
    <AppBar sx={{alignItems: 'center'}} position="static">
      <Toolbar>
        <Typography variant="h2">Rate Here</Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;