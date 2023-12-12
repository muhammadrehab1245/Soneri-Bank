import * as Yup from "yup";
export const UsernameSchema = Yup.object().shape({
    username: Yup.string()
      .min(6, 'Too Short!')
      .max(15, 'Too Long!')
      .required('Required'),
    cUsername: Yup.string()
      .min(6, 'Too Short!')
      .max(15, 'Too Long!').oneOf([Yup.ref('username'), null], 'Confirm username correctly')
      .required('Required'),
  });

  export const PasswordSchema = Yup.object().shape({
    password: Yup.string()
      .min(8, 'Too Short!')
      .required('Required'),
    cPassword: Yup.string()
      .min(8, 'Too Short!').oneOf([Yup.ref('password'), null], 'Confirm password correctly')
      .required('Required'),
  });
  export const PinSchema = Yup.object().shape({
    pin: Yup.string()
      .min(5, 'Too Short!')
      .required('Required'),
    cPin: Yup.string()
      .min(5, 'Too Short!').oneOf([Yup.ref('pin'), null], 'Confirm password correctly')
      .required('Required'),
  });