import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "../Pages/Login.css";

const Login = () => {

    function validateForm() {
        return username.length > 0 && password.length > 0;
    }

    const history = useNavigate();

    const handleSubmit = (e) => {
        if(username === 'admin' && password === 'admin'){
            e.preventDefault();
            history('/dashboard');
        }else {
            e.preventDefault();
            alert('No Account !!!');
        }
    }

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className={'Login'}>
            <form className={'form-login'} action={''} method={'post'} onSubmit={handleSubmit}>
                <img className={'imglogo'} src={'/Logo.png'} alt={''} />
                <p className={'input-username'}>
                    <label htmlFor={'user'}>USERNAME</label>
                    <input value={username} type={'text'} onChange={(e) => setUsername(e.target.value)}/>
                </p>
                <p className={'input-password'}>
                    <label htmlFor={'pass'}>PASSWORD</label>
                    <input value={password} type={'password'} onChange={(e) => setPassword(e.target.value)}/>
                </p>
                <button onClick={handleSubmit} type={'submit'} disabled={!validateForm()}>Login</button>
            </form>
        </div>
    )
}

export default Login;