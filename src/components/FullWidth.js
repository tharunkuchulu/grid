import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function FullWidthTextField() {
  return (
    <Box sx={{ width: 500, maxWidth: '100%', marginLeft:'33rem'}}>
      <TextField fullWidth label="Write your Feedback Here" id="fullWidth" />
    </Box>
  );
}
