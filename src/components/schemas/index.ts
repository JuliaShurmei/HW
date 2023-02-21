import * as yup from "yup";

const passwordRules = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,}$/;
//Minimum 5 characters, at least one letter and one number

export const basicSchema = yup.object().shape({
  email: yup.string().email("Please enter a valid email").required("Required"),
  password: yup
    .string()
    .matches(passwordRules, { message: "Please create a stronger password" })
    .required("Required"),
});
