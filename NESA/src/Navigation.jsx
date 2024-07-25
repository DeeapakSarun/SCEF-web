import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/services">Our Services</Link></li>
                <li><Link to="/involved">Get Involved</Link></li>
                <li><Link to="/news">News and Updates</Link></li>
            </ul>
        </div>
    );
}

export default Navigation;
