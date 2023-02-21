import { useState } from "react";
import { Button } from "../Buttons";
import { Links } from "../Links";
import { Input } from "../input";
import { useFormik } from "formik";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { basicSchema } from "../schemas";
import "./login.css";
import { off } from "process";

const onSubmit = () => {
  console.log("Submitted");
};

export const Login = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: basicSchema,
      onSubmit,
    });

  console.log(errors);

  const [state, setState] = useState<boolean>(false);
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const toggleBtn = () => {
    setState((prevState) => !prevState);
  };

  const toggleCheck = () => {
    setIsChecked((prevState) => !prevState);
  };

  return (
    <div className='input-container'>
      <div className='input-container__header'>
        Welcome back to Pretty Login
      </div>
      <div className='input-container__text'>It's great to have you back!</div>
      <form onSubmit={handleSubmit} autoComplete="off">
        <label htmlFor='email'> Email </label>
        <Input
          className={errors.email && touched.email ? "input-error" : "input__login"}
          type='email'
          id='email'
          onChange={handleChange}
          name='email'
          value={values.email}
          onBlur={handleBlur}
        />
        {errors.email && touched.email && <div className='error'>{errors.email}</div>}
        <div className='password-container'>
          <label htmlFor='password'> Password </label>
          <Input
            className={errors.password && touched.password  ? "input-error" : "input__login"}
            type={state ? "text" : "password"}
            id='password'
            onChange={handleChange}
            name='password'
            value={values.password}
            onBlur={handleBlur}
          />
          <button className='btn' onClick={toggleBtn}>
            {state ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </button>
          {errors.password && touched.password && <div className='error'>{errors.password}</div>}
        </div>
      <div className='remember__container'>
        <input
          type='checkbox'
          checked={isChecked}
          className='custom-checkbox'
          id='remember'
          name='Remember me?'
          onChange={toggleCheck}
        />
        <label htmlFor='remember'> Remember me? </label>

        <a href='#' className='after-text'>
          Forgot password?
        </a>
      </div>
      <div className='btn__container'>
        <Button className='btn-pink' value='Login'/>
        <Button className='btn-white' value='Create account' />
      </div>
      </form>
      <div className='bottom-text'>
        Or login with
        <div className='bottom-text__container'>
          <Links
            href='https://www.facebook.com'
            className='link'
            value='Facebook'
          />
          <Links
            href='https://www.google.com'
            className='link'
            value='Google'
          />
        </div>
      </div>
    </div>
  );
};
