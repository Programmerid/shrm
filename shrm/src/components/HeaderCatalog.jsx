import React from 'react';
import logo from '../images/icons/logo.svg';

const HeaderCatalog = () => {
    return (
        <header className="header-catalog">
            <div className='container'>
                <img src={logo} alt="shrm logo" />
                <h3>Find the Best AI tool for your Workplace</h3>
            </div>
        </header>
    );
}

export default HeaderCatalog;