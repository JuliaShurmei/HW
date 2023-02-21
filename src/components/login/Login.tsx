import { useState } from 'react';
import { Button } from '../Buttons';
import { Links } from '../Links';
import { Input } from '../input';
import { AiOutlineEyeInvisible,
      AiOutlineEye } from "react-icons/ai";
import './login.css';



export const Login = () => {

    const [state, setState] = useState(false);

    const toggleBtn = () => {
     setState(prevState => !prevState)
    }

    return (
    <div className="input-container">
    <div className="input-container__header">
         Welcome back to Pretty Login
    </div>
    <div className="input-container__text">
         It's great to have you back!
    </div>
            <label htmlFor="email"> Email </label>
            <Input type="email" id="email" name="email" />
            <div className='password-container'>
            <label htmlFor="password"> Password </label>
            <Input type={state ? "text" : "password"} id="password" name="password" />
            <button className='btn' onClick={toggleBtn}>
            {state ? <AiOutlineEyeInvisible/> : 
              <AiOutlineEye/>
            }
            </button>
            </div>
           <div className='remember__container'>
           <input type="checkbox" className='custom-checkbox' id="remember" name="Remember me?" />
           <label htmlFor="remember"> Remember me? </label>
           <a href='#' className="after-text">
              Forgot password?
           </a>
           </div>
           <div className='btn__container'>
           <Button className='btn-pink' value='Login'/>
           <Button className="btn-white" value='Create account'/>
           </div>
           <div className="bottom-text">
                Or login with
                <div className="bottom-text__container">
                <Links href='https://www.facebook.com' className='link' value='Facebook'/>
                <Links href='https://www.google.com' className='link' value='Google'/>
                </div>
           </div>
           </div>
    )
}