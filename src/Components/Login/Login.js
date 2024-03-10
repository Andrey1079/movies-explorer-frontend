import './Login.css';
import AuthForm from '../AuthForm/AuthForm';
import Input from '../Input/Input';
import LayoutWithoutHeaderFooter from '../Layouts/LayoutWithoutHeaderFooter/LayoutWithoutHeaderFooter';
import Logo from '../Logo/Logo';
import EMAIL_PATTERN from '../../constants/EmailPattern';

export default function Login({ handleSubmit }) {
  return (
    <main className="login">
      <LayoutWithoutHeaderFooter
        linkText="Регистрация"
        path="/signup"
        text="Еще не зарегистрированы?"
      >
        <Logo place="login" />
        <AuthForm
          // formInputInitialValues={{ email: '', password: '' }}
          submitText="Войти"
          place="login"
          title="Рады видеть!"
          handleSubmit={handleSubmit}
        >
          <Input
            type="email"
            required={true}
            minLength={5}
            nameOfField="E-mail"
            name="email"
            pattern={EMAIL_PATTERN}
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
