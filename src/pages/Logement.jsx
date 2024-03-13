import React from 'react';
import { useParams } from 'react-router-dom';
import logements from '../data/logements.json';

const Logement = () => {
    const {id} = useParams();
     const logement = logements.find((logement) => logement.id === (id));
    return  (
        <div className='logement'>
            <img src={logement.cover} alt= {logement.description} />
            <div className='locationAndInfo'>
                <div className='location'>
                    <h1>{logement.title}</h1>
                    <p>{logement.location}</p>
                </div>
                <div className='info'>
                    <p>{logement.host.name}</p>
                    <img src={logement.host.picture} alt={logement.host.name} />
                </div>
            </div>
            <div className='tagsAndRatings'>
                <div className='tags'>
                    {logement.tags.map((tag, index) => (
                    <p key={index}>{tag}</p>
                    ))}
                </div>
                <div className='ratings'>
                    <p>{logement.rating}</p>
                </div>
            </div>
            <div>

            </div>
        </div>
    );
};

export default Logement;