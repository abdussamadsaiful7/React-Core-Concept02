import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div>
            <nav className='menu'>
                <a href="/home">Home</a>
                <a href="/shop">Shop</a>
                <a href="/about">About us</a>
            </nav>
            <h2>Welcome to My React js</h2>
        </div>
    );
};

export default Header;