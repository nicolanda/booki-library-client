import { Button, TextField } from "@mui/material";
import "./registerFrom.css";
import SendIcon from "@mui/icons-material/Send";

export const RegisterForm = () => {
  const intialValues = {
    name: "",
    email: "",
    password: "",
    telephone: "",
    confirmPassword: "",
    documentType: "",
    documentNumber: "",
  };

  return (
    <div className="container-from">
      <div>
        <form>
          <div>
            <TextField id="name" label="name" variant="standard" size="small" />
          </div>
          <div>
            <TextField
              id="email"
              label="correo"
              variant="standard"
              size="small"
            />
          </div>
          <div>
            <label>Contraseña</label>
          </div>
          <div>
            <label>Confirmar contraseña</label>
          </div>
          <div>
            <TextField
              id="telephone"
              label="telefono"
              variant="standard"
              size="small"
            />
          </div>
          <div>
            <TextField
              id="documentType"
              label="tipo de documento"
              variant="standard"
              size="small"
            />
          </div>
          <div>
            <TextField
              id="documentType"
              label="tipo de documento"
              variant="standard"
              size="small"
            />
          </div>
          <Button
            aria-label="send"
            variant="contained"
            type="submit"
            endIcon={<SendIcon />}
          >
            Enviar
          </Button>
        </form>
      </div>
    </div>
  );
};
