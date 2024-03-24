import React from 'react';
import { useParams } from 'react-router-dom';
import logements from '../data/logements.json';
import Ratings from '../components/Ratings';
import { Navigate } from 'react-router-dom';
import Carousel from '../components/Carousel';
import Accordion from '../components/Accordion';



const Logement = () => {
    const {id} = useParams();
     const logement = logements.find((logement) => logement.id === (id));
    if (!logement) {
        return <Navigate to="/Error404" />;}
    return  (
        <div className='logement'>
            {logement.pictures.length === 1 ? (
                <img src={logement.pictures[0]} alt="Logement" />
            ) : (
                <Carousel images={logement.pictures} />
            )}
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
                    <Accordion title= 'Description' content={logement.description} />
                </div>
                <div className='equipements'>
                    <Accordion title = 'Equipements' content = {logement.equipments.map((equipment, index) => (<p key={index}>{equipment}</p>))} />
                </div>  
            </div>
        </div>
    );
};

export default Logement;