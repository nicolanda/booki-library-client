import React from 'react';
import { HeaderReg } from '../components/header/HeaderReg';
import { RegisterForm } from '../components/users/register/RegisterForm';

export const RegisterPage = () => {
  return (
    <div>
      <HeaderReg />
      <RegisterForm />
    </div>
  );
};
