import './Profile.css';
import Input from '../Input/Input';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import { useContext, useState } from 'react';
import LayoutWithoutHeaderFooter from '../Layouts/LayoutWithoutHeaderFooter/LayoutWithoutHeaderFooter';
import AuthForm from '../AuthForm/AuthForm';
import EmailPattern from '../../constants/EmailPattern';

export default function Profile({ handleLink, handleSubmit }) {
  const userData = useContext(CurrentUserContext);
  const [isEdit, setIsEdit] = useState(false);
  const submit = (values, evt) => {
    if (!isEdit) {
      setIsEdit(true);
      evt.target
        .querySelector('.auth-form__submit')
        .classList.remove('auth-form__submit_place_profile');
    } else {
      handleSubmit(values);
    }
  };
  return (
    <main className="profile">
      <LayoutWithoutHeaderFooter
        linkText="Выйти из аккаунта"
        text=""
        path="/"
        place="profile"
        handleLink={handleLink}
      >
        <AuthForm
          formInputInitialValues={{
            name: userData.name,
            email: userData.email,
          }}
          handleSubmit={submit}
          submitText={`${isEdit ? 'Сохранить' : 'Редактировать'}`}
          place="profile"
          noValidate={isEdit ? false : true}
          title={`Привет, ${userData.name}!`}
        >
          <Input
            value=""
            readonly={isEdit ? false : true}
            type="text"
            required={true}
            maxLength={30}
            minLength={2}
            nameOfField="Имя"
            name="name"
          ></Input>
          <Input
            pattern={EmailPattern}
            value=""
            readonly={isEdit ? false : true}
            noValidate={isEdit ? false : true}
            type="email"
            required={true}
            minLength={5}
            nameOfField="E-mail"
            name="email"
          ></Input>
        </AuthForm>
      </LayoutWithoutHeaderFooter>
    </main>
  );
}
