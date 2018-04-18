import React from 'react';
import logo from './logo.png';
import './header.css';

const containerStyle = {
    fontSize: '40px'
}

const Header = () => {
    return (
        <div style={containerStyle} className="header">
            <img src={logo} alt="logo" className="header-logo" />
        </div>
    );
}

export default Header;