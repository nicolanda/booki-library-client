import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select
} from '@mui/material';

export const AddressSelect = ({
  state,
  setState,
  label,
  txt,
  tam,
  data
}) => {
  const onChange = (e) => {
    setState(e.target.value);
  };
  return (
    <FormControl style={{ width: tam }} required size="small">
      <InputLabel>{label}</InputLabel>
      <Select
        label={label}
        value={state}
        helperText={txt}
        onChange={onChange}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {data.map(({ id, name }) => {
          return (
            <MenuItem key={id} value={id} label={label}>
              {name}
            </MenuItem>
          );
        })}
      </Select>
      <FormHelperText>{txt}</FormHelperText>
    </FormControl>
  );
};
