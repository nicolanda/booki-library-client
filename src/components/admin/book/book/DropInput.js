import {
  Autocomplete,
  CircularProgress,
  TextField
} from '@mui/material';
import React from 'react';

export const DropInput = ({
  label,
  state,
  setState,
  data,
  loading
}) => {
  const handleChange = (event, value) => setState(value);
  // console.log(data);
  if (loading) return <CircularProgress />;

  return (
    <div>
      <Autocomplete
        id="prueba"
        sx={{ width: 300 }}
        size="small"
        value={state}
        onChange={handleChange}
        isOptionEqualToValue={(option, value) =>
          option.name === value.name
        }
        getOptionLabel={(option) => option.name}
        options={data}
        loading={loading}
        // defaultValue={}
        renderInput={(params) => (
          <TextField
            {...params}
            label={label}
            variant="standard"
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <React.Fragment>
                  {loading ? (
                    <CircularProgress color="inherit" size={20} />
                  ) : null}
                  {params.InputProps.endAdornment}
                </React.Fragment>
              )
            }}
          />
        )}
      />
    </div>
  );
};
