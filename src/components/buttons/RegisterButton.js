import { Button } from '@mui/material';

export const RegisterButton = (props) => {
  const { type, variant, label } = props;
  return (
    <>
      <Button variant={variant} type={type}>
        {label}
      </Button>
    </>
  );
};
