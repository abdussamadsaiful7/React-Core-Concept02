import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div>
            <div className='header shadow p-2 mb-4 bg-white rounded'>
                <nav className='menu m-4'>
                    <a href="/home">Home</a>
                    <a href="/service">Services</a>
                    <a href="/about">About Us</a>
                    <a href="/contact">Contact Us</a>
                </nav>
            </div>
           <h1>Welcome to Rest Countries</h1>
        </div>
    );
};

export default Header;