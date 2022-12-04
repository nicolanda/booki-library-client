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
  // console.log(data);
  if (loading) return <CircularProgress />;

  return (
    <div>
      <Autocomplete
        id="prueba"
        freeSolo={true}
        sx={{ width: 300 }}
        size="small"
        value={state}
        onChange={(event, value) => setState(value)}
        isOptionEqualToValue={(option, value) =>
          option.value === value.value
        }
        getOptionLabel={(option) => (option.name ? option.name : '')}
        options={data ? data : []}
        loading={loading}
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
