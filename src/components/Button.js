import * as React from 'react';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';

export default function DisableElevation() {
  return (
    <ButtonGroup
      disableElevation
      aria-label="Disabled button group"
      sx={{marginLeft:'44rem',position:"relative",top:"-290px",left:"200px"}}
      
    >
      <Button variant="contained">SAVE</Button>
      <Button variant="outlined">EXIT</Button>
    </ButtonGroup>
  );
}
