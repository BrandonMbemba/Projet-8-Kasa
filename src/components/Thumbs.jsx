import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Thumbs = ({logement}) => {
    return (
        logement.map((logement) => (
            <Link key={logement.id} to={`/logement/${logement.id}`} className='thumbs'>
            <div className='thumbs'>
                <img src= {logement.cover} />
                <h2>{logement.title}</h2>
            </div>
            </Link>
        ))
    );
};

Thumbs.propTypes = {
    logement: PropTypes.array.isRequired
};

export default Thumbs;