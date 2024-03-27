import React from 'react';
import ImageAbout from '../assets/b9995860bb6384a77ca7dc9bf52da3be.jpg';
import Accordion from '../components/Accordion';

const About = () => {

    return (
    <div className='about'>
        <div className='banner'>
            <img src= {ImageAbout} />
        </div>
        <div className='about_container'>
            <Accordion title={'Fiabilité'} content= {'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.'}/>
            <Accordion title={'Respect'} content={'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'}/>
            <Accordion title={'Service'} content={'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'}/>
            <Accordion title={'Sécurité'} content={'La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critéres de sécurité établis par nos services. En laissant une note aussi bien à l"hôte qu"au locataire, cela permet à nos équipes de vérifier que les tandars sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.'}/>
        </div>
    </div>
    );
};

export default About;