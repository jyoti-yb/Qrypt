import React, { useState } from "react";
import './LoginRegister.css';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { BsEnvelopeAtFill } from "react-icons/bs";

const LoginRegister = () => {

    const [action, setAction] = useState('');

    const registerLink = () => {
        setAction(' active') 
    };

    const loginLink = () => {
        setAction('') 
    };

    return (
        <div className={`wrapper${action}`}>
            <div className="form-box login">
                <form action="">
                    <h1>Login</h1>
                    <div className="input-box">
                        <input type="text" placeholder='Username or Email' required />
                        <FaUser className='icon'/>
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder='Password' required />
                        <FaLock className='icon'/>
                    </div>
                    <div className="remember-forgot">
                        <label><input type="checkbox" />Remember me</label>
                        <div className="forgot-password">
                            <p>Forgot password?</p>
                        </div>
                        { /*<button type="button" className="forgot-password">Forgot password?</button> */}
                    </div>

                    <button type="submit">Login</button>

                    <div className="register-link">
                        <p>Don't have an account?<span onClick={registerLink}> Sign up</span></p>
                    </div>
                </form>
            </div>

            <div className="form-box register">
                <form action="">
                    <h1>Sign Up</h1>
                    <div className="input-box">
                        <input type="text" placeholder='Email' required />
                        <BsEnvelopeAtFill className='icon'/>
                    </div>
                    <div className="input-box">
                        <input type="text" placeholder='Username' required />
                        <FaUser className='icon'/>
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder='Password' required />
                        <FaLock className='icon'/>
                    </div>
                    <div className="remember-forgot">
                    <label><input type="checkbox" />I agree to the terms & conditions.</label>
                    {
  /*
    <button type="button" className="terms-link">Terms & Conditions</button>
  */
}

                    </div>

                    <button type="submit">Sign up</button>

                    <div className="register-link">
                        <p>Already have an account?<span onClick={loginLink}> Login.</span></p>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default LoginRegister;
