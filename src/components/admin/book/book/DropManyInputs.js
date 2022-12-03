import {
  Autocomplete,
  CircularProgress,
  TextField
} from '@mui/material';
import React from 'react';

export const DropManyInputs = ({
  label,
  state,
  setState,
  data,
  loading
}) => {
  if (loading) return <CircularProgress />;
  // console.log(data);
  return (
    <Autocomplete
      multiple
      value={state}
      onChange={(event, value) => setState(value)}
      id="prueba"
      sx={{ width: 500 }}
      size="small"
      options={data}
      isOptionEqualToValue={(option, value) =>
        option.name === value.name
      }
      getOptionLabel={(option) => option.name}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          variant="standard"
          placeholder={`Selecciona los ${label}`}
        />
      )}
    />
  );
};
