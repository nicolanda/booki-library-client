export const regularExpression = {
  name: /^[a-zA-ZÀ-ÿ\s]{4,40}$/,
  password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,15}$/,
  email: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
  cellphone: /^\d{9,10}$/,
  numDocument: /^\d{6,10}$/
};

export const errorMessage = {
  name: 'El nombre debe tener entre 4 y 40 letras',
  email: 'El email no es válido',
  password:
    'La contraseña deben contener entre 6 15 caracteres, una mayúscula y un número',
  password2: 'Las contraseñas no coinciden',
  cellphone: 'El número de celular no es válido',
  numDocument: 'El número de documento no es válido'
};
