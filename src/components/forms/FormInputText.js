import { TextField } from '@mui/material';

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
  confirmPass
}) => {
  const onChange = (e) => {
    setState({ ...state, field: e.target.value });
  };

  const validation = () => {
    if (reg) {
      if (reg.test(state.field)) {
        setState({ ...state, valid: !1 });
      } else {
        setState({ ...state, valid: !0 });
      }
    }
    if (confirmPass) confirmPass();
  };

  return (
    <TextField
      id={id}
      value={state.field}
      error={state.valid}
      helperText={state.valid ? txtError : ''}
      type={type}
      label={label}
      variant={variant}
      size={size}
      sx={{ width: tam }}
      onChange={onChange}
      onKeyUp={validation}
      onBlur={validation}
    />
  );
};
