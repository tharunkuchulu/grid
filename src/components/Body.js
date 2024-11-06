import React from 'react';
import { Box, Typography } from '@mui/material';

function Body() {
  return (
    <Box sx={{ flex: 1, p: 2, alignItems:'center' }}>
      <Typography align="center" variant="h4" gutterBottom>THARUN</Typography>
      <Typography align="center">This is the place where you can share your thoughts and rate the quality of my work. Your feedback is highly valuable and will help me improve and provide even better results in the future. I truly appreciate your time and input, so feel free to express your honest opinions.</Typography>
    </Box>
  );
}

export default Body;