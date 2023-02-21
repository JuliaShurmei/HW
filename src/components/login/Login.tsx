import { useState } from "react";
import { Button } from "../Buttons";
import { Links } from "../Links";
import { Input } from "../input";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import "./login.css";

export const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [state, setState] = useState<boolean>(false);
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const toggleBtn = () => {
    setState((prevState) => !prevState);
  };

  const toggleCheck = () => {
    setIsChecked((prevState) => !prevState);
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    switch (event.target.id) {
      case "email":
        setEmail(event.target.value);
        console.log(event.target.value);
        break;
      case "password":
        setPassword(event.target.value);
        console.log(event.target.value);
        break;
    }
  };

  const handleConfirm = () => {
    //const list = document.getElementsByClassName("input-container__text")[0];
    //list.innerHTML = email + '\n' + password + '\n' + isChecked;
    alert(
      "Password: " +
        password +
        "\n" +
        "Email: " +
        email +
        "\n" +
        "Remember me?: " +
        isChecked
    );
  };

  return (
    <div className='input-container'>
      <div className='input-container__header'>
        Welcome back to Pretty Login
      </div>
      <div className='input-container__text'>It's great to have you back!</div>
      <label htmlFor='email'> Email </label>
      <Input
        className='input__login'
        type='email'
        id='email'
        name={email}
        onChange={(event) => handleChange(event)}
      />
      <div className='password-container'>
        <label htmlFor='password'> Password </label>
        <Input
          className='input__login'
          type={state ? "text" : "password"}
          id='password'
          name={password}
          onChange={(event) => handleChange(event)}
        />
        <button className='btn' onClick={toggleBtn}>
          {state ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
        </button>
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
        <Button className='btn-pink' value='Login' onClick={handleConfirm} />
        <Button className='btn-white' value='Create account' />
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
