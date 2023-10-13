import './Profile.css';
import Input from '../Input/Input';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import { useContext, useState } from 'react';
import LayoutWithoutHeaderFooter from '../Layouts/LayoutWithoutHeaderFooter/LayoutWithoutHeaderFooter';
import AuthForm from '../AuthForm/AuthForm';
import EMAIL_PATTERN from '../../constants/emailPattern';

export default function Profile({ handleLink, handleSubmit }) {
  const userData = useContext(CurrentUserContext);
  const [isEdit, setIsEdit] = useState(false);
  const submit = (values) => {
    if (!isEdit) {
      setIsEdit(true);
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
          isEdit={isEdit}
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
            pattern={EMAIL_PATTERN}
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
