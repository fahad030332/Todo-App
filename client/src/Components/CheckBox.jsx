import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function CheckBox() {
  return (
    <div>
      {/* <Checkbox {...label} defaultChecked /> */}
      {/* 
      <Checkbox {...label} disabled />
      <Checkbox {...label} disabled checked /> */}
      <Checkbox {...label} />
    </div>
  );
}