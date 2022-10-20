import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
    return (
        <div className='header'>
            <div className='header-nav-logo'>
                <h1>Logo</h1>
            </div>
            <nav className='header-nav'>
                <Link className='header-nav-item' to='/'>
                    Home
                </Link>
                <Link className='header-nav-item' to='/contact'>
                    Contact
                </Link>
                <Link className='header-nav-item' to='/profile'>
                    Profile
                </Link>
                <Link className='header-nav-item' to='/register'>
                    Login/Register
                </Link>
            </nav>
        </div>
    );
}
