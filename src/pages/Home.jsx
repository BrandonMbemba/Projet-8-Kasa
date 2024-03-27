import React from 'react';
import Imagehome from '../assets/e270fc8fc902a1eb738458e7b29c1899.jpeg';
import Thumb from '../components/Thumb';
import logements from '../data/logements.json';

const Home = () => {
    return (
        <div className='home'>
            <div className='banner'>
                <img src={Imagehome} alt="Banner" />
                <h1>Chez vous, partout et ailleurs</h1>
            </div>
            <div className="gallery">
                {logements.map((logement) => (
                    <Thumb key={logement.id} logement={logement} />
                ))}
            </div>
        </div>
    );
};

export default Home;