import { TextField } from '@mui/material';
import React from 'react';

export const FormInputText = ({
  state,
  setState,
  id,
  type,
  label,
  variant,
  size,
  reg,
  txtError,
  tam,
  helperText,
  confirmPass
}) => {
  const onChange = (e) => {
    setState({ ...state, field: e.target.value });
  };

  const validation = () => {
    if (reg) {
      if (reg.test(state.field)) {
        setState({ ...state, err: !1 });
      } else {
        setState({ ...state, err: !0 });
      }
    }
    if (confirmPass) confirmPass();
  };

  return (
    <TextField
      id={id}
      value={state.field}
      error={state.err}
      helperText={state.err ? txtError : helperText}
      type={type}
      label={label}
      variant={variant}
      size={size}
      sx={{ width: tam }}
      onChange={onChange}
      onKeyUp={validation}
      onBlur={validation}
      required
    />
  );
};
