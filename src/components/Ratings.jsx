import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import logements from '../data/logements.json';

const numbers = [1, 2, 3, 4, 5];


const Ratings = ({nbStars}) => {
    return (
        <div>
            {numbers.map((number,) => 
            (  <FontAwesomeIcon key={number} icon={faStar} color= {number <= nbStars ? "#FF6060" : "grey" } />
            ))}
        </div> 

    );
};

export default Ratings;