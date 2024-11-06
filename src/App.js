import React from 'react';
import Header from './components/Header';
import Body from './components/Body';
import { Box } from '@mui/material';
import RadioGroupRating from './components/RadioGroupRating';
import FullWidthTextField from './components/FullWidth';
import Footer from './components/Footer';
import DisableElevation from './components/Button';

function App() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <Body />
      <RadioGroupRating/>
      <FullWidthTextField />
      <DisableElevation/>
      <Footer/>
    </Box>
  );
}

export default App;