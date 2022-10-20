import React from 'react';
import Nav from '../nav/Nav';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';

export default function Register() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        getValues,
    } = useForm({
        defaultValues: {
            name: '',
            email: '',
            password: '',
            rePassword: '',
        },
    });

    function submitData(e) {
        // e.preventDefault();
        const values = getValues();
        axios
            .post('http://localhost:3000/users', { ...values })
            .then((response) => console.log(response))
            .catch(({ response }) => {
                console.log(response.data);
                console.log(response.status);
                console.log(response.headers);
            });
    }

    // const onSubmit = (data) => console.log(data);
    // console.log(errors);
    return (
        <div id='loginRegister'>
            <Nav />
            <form onSubmit={handleSubmit(submitData)} className='register'>
                <label>Create your account:</label>
                <input
                    {...register('name', { required: 'This is required!' })}
                    className='register-input'
                    type='name'
                    placeholder='Name'
                />
                <input
                    {...register('email', { required: 'This is required!' })}
                    className='register-input'
                    type='e-mail'
                    placeholder='Enter E-mail'
                />

                <input
                    {...register('password', {
                        required: 'This is required!',
                        // pattern: {
                        //     value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]$/,
                        //     message:
                        //         'At least one uppercase letter, one lowercase letter, one number and one special character!',
                        // },
                    })}
                    className='register-input'
                    type='password'
                    placeholder='Password'
                />
                <p>{errors.password?.message}</p>

                <button type='submit' className='register-button'>
                    Register
                </button>
            </form>
            <h3>
                Already have an account?
                <Link to='/login'>Log In</Link>
            </h3>
        </div>
    );
}
