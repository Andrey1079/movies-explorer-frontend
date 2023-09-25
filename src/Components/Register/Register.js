import LayoutForAuth from '../Layouts/LayoutForAuth/LayoutForAuth';
import AuthForm from '../AuthForm/AuthForm';
import Input from '../Input/Input';

export default function Register({ errorMessage }) {
  return (
    <LayoutForAuth
      linkText="Войти"
      text="Уже зарегистрированы?"
      path="/signin"
      title="Добро пожаловать!"
    >
      <AuthForm
        // text="Уже зарегистрированы?"
        submitText="Зарегистрироваться"
        // linkText="Войти"
        // url="/signin"
        place="register"
      >
        <Input
          type="text"
          required={true}
          maxLength={30}
          minLength={2}
          nameOfField="Имя"
          name="user-name"
        ></Input>
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
