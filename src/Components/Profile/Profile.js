import './Profile.css';
import Input from '../Input/Input';

import { CurrentUserContext } from '../../context/CurrentUserContext';
import { useContext, useState, useRef, useEffect } from 'react';
import LayoutWithoutHeaderFooter from '../Layouts/LayoutWithoutHeaderFooter/LayoutWithoutHeaderFooter';
import AuthForm from '../AuthForm/AuthForm';

export default function Profile({ handleLink, handleSubmit, ...props }) {
  const userData = useContext(CurrentUserContext);
  const [isEdit, setIsEdit] = useState(false);
  const inputName = useRef();
  const inputEmail = useRef();
  useEffect(() => {
    inputName.current.value = userData.name;
    inputEmail.current.value = userData.email;
  }, [userData]);
  const submit = (values, evt) => {
    if (!isEdit) {
      setIsEdit(true);
      evt.target
        .querySelector('.auth-form__submit')
        .classList.remove('auth-form__submit_place_profile');
    } else {
      handleSubmit({
        name: inputName.current.value,
        email: inputEmail.current.value,
      });
    }
  };
  return (
    <section className="profile">
      {/* <Header props={props} /> */}
      <LayoutWithoutHeaderFooter
        linkText="Выйти из аккаунта"
        text=""
        path="/"
        place="profile"
        handleLink={handleLink}
      >
        <AuthForm
          errorMessages={{
            conflict: 'Пользователь с таким email уже существует',
            serever: 'При обновлении профиля произошла ошибка',
          }}
          handleSubmit={submit}
          submitText={`${isEdit ? 'Сохранить' : 'Редактировать'}`}
          place="profile"
          noValidate={isEdit ? false : true}
          title={`Привет, ${userData.name}!`}
        >
          <Input
            readonly={isEdit ? false : true}
            inputRef={inputName}
            type="text"
            required={true}
            maxLength={30}
            minLength={2}
            nameOfField="Имя"
            name="name"
          ></Input>
          <Input
            readonly={isEdit ? false : true}
            noValidate={isEdit ? false : true}
            inputRef={inputEmail}
            type="email"
            required={true}
            minLength={5}
            nameOfField="E-mail"
            name="email"
          ></Input>
        </AuthForm>
      </LayoutWithoutHeaderFooter>
    </section>
  );
}
