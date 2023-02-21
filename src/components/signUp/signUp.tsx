import { useState } from "react";
import { Button } from "../Buttons";
import { Links } from "../Links";
import { Input } from "../input";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import "./signUp.css";

export const SignUp = () => {
  const [name, setName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
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
        setPassword(event.target.value);
        console.log(event.target.value);
        break;
    }
  };

  const handleConfirm = () => {
    //const list = document.getElementsByClassName("input-container__text")[0];
    //list.innerHTML = email + '\n' + password + '\n' + isChecked;
    alert(
      "Name: " +
        name +
        "\n" +
        "Last Name: " +
        lastName +
        "\n" +
        "Password: " +
        password +
        "\n" +
        "Email: " +
        email +
        "\n"
    );
  };

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

      <label htmlFor='lastName'> LastName </label>
      <Input
        className='input__sign-up'
        type='text'
        id='lastName'
        name={lastName}
        onChange={(event) => handleChange(event)}
      />

      <label htmlFor='email'> Email </label>
      <Input
        className='input__sign-up'
        type='email'
        id='email'
        name={email}
        onChange={(event) => handleChange(event)}
      />

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

        <label htmlFor='confirmpasswort'> Confirm Password </label>
        <Input
          className='input__sign-up'
          type={passState ? "text" : "password"}
          id='confirmpassword'
          name={password}
          onChange={(event) => handleChange(event)}
        />

        <button className='btn' id='confpassw-btn' onClick={togglePassBtn}>
          {passState ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
        </button>
      </div>

      <div className='btn__container'>
        <Button
          className='btn-pink'
          value='Create Account'
          onClick={handleConfirm}
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
