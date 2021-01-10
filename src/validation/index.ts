import * as Yup from "yup";

//in future, we will have to create validationSchema for each component
//based on the fields it has 
export const validationSchema1 = Yup.object({
  firstName: Yup.string()
    .required('This is a required field')
    .min(2, "Must be greater than 2 characters"),
  lastName: Yup.string()
    .required('This is a required field')
    .min(2, "Must be greater than 2 characters"),
  email: Yup.string()
    .required('This is a required field')
    .email(),
});

export const validationSchema2 = Yup.object({
  password: Yup.string()
    .required('This is a required field')
    .min(8, "Password must be more than 8 characters long")
    .matches(
      /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      "Password must contain at least 8 characters, one uppercase, one number and one special case character"
    ),
  confirmPassword: Yup.string()
    .required("Please confirm your password")
    .when("password", {
      is: (password) => (password && password.length > 0 ? true : false),
      then: Yup.string().oneOf([Yup.ref("password")], "Password doesn't match"),
    }),
});

export const validationSchema3 = Yup.object({
  address: Yup.string().required('This is a required field'),
  phone: Yup.string().required('This is a required field'),
  description: Yup.string().required('This is a required field'),
})
