import { useRef } from 'react';
import AuthForm from '../AuthForm/AuthForm';
import Input from '../Input/Input';
import LayoutWithoutHeaderFooter from '../Layouts/LayoutWithoutHeaderFooter/LayoutWithoutHeaderFooter';
import Logo from '../Logo/Logo';

export default function Login({ handleSubmit }) {
  const inputEmail = useRef();
  const inputPassword = useRef();
  return (
    <main className="login">
      <LayoutWithoutHeaderFooter
        linkText="Регистрация"
        path="/signup"
        text="Еще не зарегистрированы?"
      >
        <Logo place="login" />
        <AuthForm
          submitText="Войти"
          place="login"
          title="Рады видеть!"
          handleSubmit={handleSubmit}
        >
          <Input
            inputRef={inputEmail}
            type="email"
            required={true}
            minLength={5}
            nameOfField="E-mail"
            name="email"
          ></Input>
          <Input
            inputRef={inputPassword}
            type="password"
            required={true}
            minLength={8}
            nameOfField="Пароль"
            name="password"
          ></Input>
        </AuthForm>
      </LayoutWithoutHeaderFooter>
    </main>
  );
}
