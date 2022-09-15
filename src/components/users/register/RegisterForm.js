import { Box, Button, Typography } from "@mui/material";
import './registerFrom.css'
import { useForm } from "react-hook-form";
import SendIcon from "@mui/icons-material/Send";

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="container-from" >
      <Box
        sx={{
          p: 2,
        }}
      >
        <Typography variant="h5">Registrartse en la libreria Booki</Typography>
      </Box>
      <div>
        <form>
          <div>
            <label>Nombre</label>
            <input type="text"  {...register('name')} />
          </div>
          <div>
            <label>Apellido</label>
            <input type="text"  {...register('lastName')} />
          </div>

          <Button
          aria-label="send"
          variant="contained"
          type="submit"
          endIcon={<SendIcon />}
          onClick={handleSubmit(onSubmit)}
          >
          Enviar    
          </Button>
        </form>
      </div>
    </div>
  );
};
