import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <h1>My React App</h1>
            <nav>
                <ul>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/catalog">Catalog</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;