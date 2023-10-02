import AuthForm from '../AuthForm/AuthForm';
import Input from '../Input/Input';
import LayoutWithoutHeaderFooter from '../Layouts/LayoutWithoutHeaderFooter/LayoutWithoutHeaderFooter';
import Logo from '../Logo/Logo';

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
          errorMessages={{
            badRequest: 'Вы ввели неправильный логин или пароль.',
            serever: 'При авторизации произошла ошибка',
            token: 'Токен не передан или передан не в том формате',
          }}
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
