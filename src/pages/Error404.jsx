import React from 'react';
import { Link } from 'react-router-dom';

const Error404 = () => {
    return (
        <div className='errorPage'>
            <h1>404</h1>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <Link to={`/`} className='backToHomePage'>
                <p>Retournez à l'acceuil</p>
            </Link>
        </div>
    );
};

export default Error404;