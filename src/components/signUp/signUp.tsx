import { useEffect, useState } from "react";
import { Button } from "../Buttons";
import { Links } from "../Links";
import { Input } from "../input";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { ErrorMessage } from "../error";
import "./signUp.css";

type Errors = Record<string, string>;

const regularExpressionPassword =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

export const SignUp = () => {
  const [errors, setErrors] = useState<Errors>({
    nameError: "",
    lastNameError: "",
    emailError: "",
    passwordError: "",
    confirmPasswordError: "",
  });

  const [name, setName] = useState<string>("");

  const [lastName, setLastName] = useState<string>("");

  const [email, setEmail] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");

  const [password, setPassword] = useState<string>("");

  const [confirmpassword, setConfirmPassword] = useState<string>("");

  const [state, setState] = useState<boolean>(false);

  const [passState, setPassState] = useState<boolean>(false);

  const toggleBtn = () => {
    setState((prevState) => !prevState);
  };

  const togglePassBtn = () => {
    setPassState((prevState) => !prevState);
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    switch (event.target.id) {
      case "name":
        setName(event.target.value);
        console.log(event.target.value);
        break;
      case "lastName":
        setLastName(event.target.value);
        console.log(event.target.value);
        break;
      case "email":
        setEmail(event.target.value);
        console.log(event.target.value);
        break;
      case "password":
        setPassword(event.target.value);
        console.log(event.target.value);
        break;
      case "confirmpassword":
        setConfirmPassword(event.target.value);
        console.log(event.target.value);
        break;
    }
  };

  const errorHandler = () => {
    if (name.length < 3) {
      setErrors((prev) => {
        return {
          ...prev,
          nameError: "Name must contain more than 3 characters",
        };
      });
      return;
    }

    if (lastName.length < 3) {
      setErrors((prev) => {
        return {
          ...prev,
          lastNameError: "Lastname must contain more than 3 characters",
        };
      });
      return;
    }

    if (!password.match(regularExpressionPassword)) {
      setErrors((prev) => {
        return {
          ...prev,
          passwordError:
            "Minimum eight characters, at least one uppercase letter, one lowercase letter and one number",
        };
      });
      return;
    }

    if (confirmpassword !== password) {
      setErrors((prev) => {
        return {
          ...prev,
          confirmPasswordError: "Passwords do not match",
        };
      });
      return;
    }

    setErrors({
      nameError: "",
      lastNameError: "",
      emailError: "",
      passwordError: "",
      confirmPasswordError: "",
    });
  };

  useEffect(() => {
    console.log("ERRORS CHANGED");
    console.log(errors);
  }, [errors]);

  useEffect(() => {
    if (!regexEmail.test(email) && email.length !== 0) {
      setEmailError("Please enter correct email");
    } else {
      setEmailError("");
    }
  }, [email]);

  return (
    <div className='input-container'>
      <div className='input-container__header'>SignUp</div>
      <div className='input-container__text'>Create your account!</div>
      <label htmlFor='name'> Name </label>
      <Input
        className='input__sign-up'
        type='text'
        id='name'
        name={name}
        onChange={(event) => handleChange(event)}
      />
      {errors.nameError.length > 0 ? (
        <ErrorMessage errorField={errors.nameError} />
      ) : null}

      <label htmlFor='lastName'> LastName </label>
      <Input
        className='input__sign-up'
        type='text'
        id='lastName'
        name={lastName}
        onChange={(event) => handleChange(event)}
      />
      {errors.lastNameError.length > 0 ? (
        <ErrorMessage errorField={errors.lastNameError} />
      ) : null}

      <label htmlFor='email'> Email </label>
      <Input
        className='input__sign-up'
        type='email'
        id='email'
        name={email}
        onChange={(event) => handleChange(event)}
      />
      {emailError !== "empty" && <ErrorMessage errorField={emailError} />}

      <div className='password-container'>
        <label htmlFor='password'> Password </label>
        <Input
          className='input__sign-up'
          type={state ? "text" : "password"}
          id='password'
          name={password}
          onChange={(event) => handleChange(event)}
        />
        <button className='btn' id='passw-btn' onClick={toggleBtn}>
          {state ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
        </button>
        {errors.passwordError && (
          <ErrorMessage errorField={errors.passwordError} />
        )}


        <label htmlFor='confirmpassword'> Confirm Password </label>
        <Input
          className='input__sign-up'
          type={passState ? "text" : "password"}
          id='confirmpassword'
          name={confirmpassword}
          onChange={(event) => handleChange(event)}
        />
        <button className='btn' id='confpassw-btn' onClick={togglePassBtn}>
          {passState ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
        </button>

        {errors.confirmPasswordError && (
          <ErrorMessage errorField={errors.confirmPasswordError} />
        )}

      </div>

      <div className='btn__container'>
        <Button
          className='btn-pink'
          value='Create Account'
          onClick={errorHandler}
        />
        <Button className='btn-white' value='Login' />
      </div>
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
