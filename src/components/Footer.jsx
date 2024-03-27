import React from 'react';
import ImageFooter from '../assets/LOGO2.svg';

const Footer = () => {
    return (
        <div className='footer'>
            <img src= {ImageFooter} alt='logo' />
            <p>© 2020 Kasa. All rights reserved</p>
        </div>
    );
};

export default Footer;