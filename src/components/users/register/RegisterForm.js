import { Button, TextField } from '@mui/material';
import './registerFrom.css';
import SendIcon from '@mui/icons-material/Send';

export const RegisterForm = () => {
  const intialValues = {
    name: '',
    email: '',
    password: '',
    telephone: '',
    confirmPassword: '',
    documentType: '',
    documentNumber: ''
  };

  console.log(intialValues);
  return (
    <div className="form-container">
      <div className="title-form">
        <h2>Registro</h2>
      </div>
      <form className="body-form">
        <TextField
          id="name"
          label="name"
          variant="outlined"
          size="small"
          style={{ width: '80%' }}
        />

        <TextField
          id="email"
          label="correo"
          variant="outlined"
          size="small"
          style={{ width: '80%' }}
        />

        <div>
          <label>Contraseña</label>
        </div>
        <div>
          <label>Confirmar contraseña</label>
        </div>

        <TextField
          id="telephone"
          label="telefono"
          variant="outlined"
          size="small"
          style={{ width: '80%' }}
        />

        <TextField
          id="documentType"
          label="tipo de documento"
          variant="outlined"
          size="small"
          style={{ width: '80%' }}
        />

        <TextField
          id="documentType"
          label="tipo de documento"
          variant="outlined"
          size="small"
          style={{ width: '80%' }}
        />

        <div className="button-form">
          <Button
            aria-label="send"
            variant="contained"
            type="submit"
            endIcon={<SendIcon />}>
            Enviar
          </Button>
        </div>
      </form>
    </div>
  );
};
