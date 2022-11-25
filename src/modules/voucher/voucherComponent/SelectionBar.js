import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select  from '@mui/material/Select';

const SelectionBar = (props) => {
  const {setOperation, operation, } = props;

  const handleChange = (event) => {
    setOperation(event.target.value);
  };

  return (
    <>
      <Box sx={{ minWidth: 120, width:240 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Operation</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={operation}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={'view'}>View</MenuItem>
            <MenuItem value={'add'}>Add</MenuItem>
            <MenuItem value={'update'}>Update</MenuItem>
            <MenuItem value={'delete'}>Delete</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </>
  );
}

export default SelectionBar;