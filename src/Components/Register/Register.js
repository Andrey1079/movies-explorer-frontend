import LayoutWithoutHeaderFooter from '../Layouts/LayoutWithoutHeaderFooter/LayoutWithoutHeaderFooter';
import AuthForm from '../AuthForm/AuthForm';
import Input from '../Input/Input';
import Logo from '../Logo/Logo';

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
          formInputInitialValues={{ name: '', email: '', password: '' }}
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
