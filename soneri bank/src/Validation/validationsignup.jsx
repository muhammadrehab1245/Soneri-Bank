import * as Yup from "yup";
export const UsernameSchema = Yup.object().shape({
    username: Yup.string().email('Invalid email').required('Required'),
    cUsername: Yup.string().oneOf([Yup.ref('username'), null], 'Confirm username correctly').required('Required'),
  });
export const UsernameSchemaforpassword = Yup.object().shape({
    username: Yup.string().email('Invalid email').required('Required'),
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