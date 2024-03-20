import React, {useState} from 'react';
import { useParams } from 'react-router-dom';
import logements from '../data/logements.json';
import Description from '../components/Description';
import Equipements from '../components/Equipements';
import Ratings from '../components/Ratings';
import { Navigate } from 'react-router-dom';
import Carousel from '../components/Carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';



const Logement = () => {
    const {id} = useParams();
     const logement = logements.find((logement) => logement.id === (id));
    if (!logement) {
        return <Navigate to="/Error404" />;}
    return  (
        <div className='logement'>
            <Carousel images={logement.pictures}/>
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
                    <Ratings nbStars = {logement.rating} />
                </div>
            </div>
            <div className='accordion'>
                <div className='description'>
                    <Description />
                </div>
                <div className='equipements'>
                    <Equipements />
                </div>  
            </div>
        </div>
    );
};

export default Logement;