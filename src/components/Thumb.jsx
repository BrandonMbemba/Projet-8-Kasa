import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Thumb = ({ logement }) => {
    return (
        <Link to={`/logement/${logement.id}`} className='thumbs'>
            <div className='thumbs'>
                <img src={logement.cover} alt={logement.title} />
                <h2>{logement.title}</h2>
            </div>
        </Link>
    );
};

Thumb.propTypes = {
    logement: PropTypes.object.isRequired
};

export default Thumb;