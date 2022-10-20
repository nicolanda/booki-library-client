import React from 'react';

import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select
} from '@mui/material';

export const FormSelectDocumentType = (props) => {
  const { state, setState, label, helperText } = props;

  const onChange = (e) => {
    setState(e.target.value);
  };
  return (
    <FormControl
      variant="outlined"
      size="small"
      sx={{ width: '90%' }}
      required>
      <InputLabel>{label}</InputLabel>
      <Select label={label} value={state} onChange={onChange}>
        {props.data.map(({ id, name }) => {
          return (
            <MenuItem key={id} value={id} label={label}>
              {name}
            </MenuItem>
          );
        })}
      </Select>
      <FormHelperText>{helperText}</FormHelperText>
    </FormControl>
  );
};
