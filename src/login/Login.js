import React from 'react';
import Nav from '../nav/Nav';
import axios from 'axios';

export default function Login() {
    const [loginDetails, setLoginDetails] = React.useState({
        email: '',
        password: '',
    });

    function handleChange(e) {
        setLoginDetails({ ...loginDetails, [e.target.name]: e.target.value });
    }

    function loginSubmit(e) {
        e.preventDefault();
        axios
            .post('http://localhost:3000/login', loginDetails)
            .then((response) => console.log(response))
            .catch(({ response }) => {
                console.log(response.data);
                console.log(response.status);
                console.log(response.headers);
            });
    }

    return (
        <div>
            <Nav />

            <form onSubmit={(e) => loginSubmit(e)} className='login-form'>
                <h1>Login Form</h1>
                <input
                    onChange={(e) => handleChange(e)}
                    type='text'
                    placeholder='Email'
                    name='email'
                ></input>
                <input
                    onChange={(e) => handleChange(e)}
                    type='password'
                    placeholder='Password'
                    name='password'
                ></input>
                <button className='login-btn' type='submit'>
                    Login
                </button>
            </form>
        </div>
    );
}
