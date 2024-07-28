import React, { useState } from "react";
import './LoginRegister.css';

const LoginRegister = () => {

    const [action, setAction] = useState('');

    return (
        <div className={`wrapper${action}`}>
            <div className="form-box login">
                <form action="">
                    <h1>Welcome!</h1>
                    <button type="submit">Sign-in with Google</button>
                </form>
            </div>
        </div>
    );
};

export default LoginRegister;
