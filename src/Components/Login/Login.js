import LayoutForAuth from '../Layouts/LayoutForAuth/LayoutForAuth';
import AuthForm from '../AuthForm/AuthForm';
import Input from '../Input/Input';

export default function Login({ errorMessage }) {
  return (
    <LayoutForAuth
      linkText="Регистрация"
      text="Еще не зарегистрированы?"
      path="/signup"
      title="Рады видеть!"
    >
      <AuthForm
        submitText="Войти"
        place="login"
      >
        <Input
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
    </LayoutForAuth>
  );
}
