import './Register.css';
import LayoutWithoutHeaderFooter from '../Layouts/LayoutWithoutHeaderFooter/LayoutWithoutHeaderFooter';
import AuthForm from '../AuthForm/AuthForm';
import Input from '../Input/Input';
import Logo from '../Logo/Logo';
import EMAIL_PATTERN from '../../constants/EmailPattern';

export default function Register({ handleSubmit }) {
  return (
    <main className="register">
      <LayoutWithoutHeaderFooter
        linkText="Войти"
        text="Уже зарегистрированы?"
        path="/signin"
      >
        <Logo place="register" />
        <AuthForm
          handleSubmit={handleSubmit}
          submitText="Зарегистрироваться"
          place="register"
          title="Добро пожаловать!"
        >
          <Input
            type="text"
            required={true}
            maxLength={30}
            minLength={2}
            nameOfField="Имя"
            name="name"
          ></Input>
          <Input
            pattern={EMAIL_PATTERN}
            type="email"
            required={true}
            minLength={5}
            nameOfField="E-mail"
            name="email"
          ></Input>
          <Input
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
