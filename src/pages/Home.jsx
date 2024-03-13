import React from 'react';
import Imagehome from '/images/e270fc8fc902a1eb738458e7b29c1899.jpeg';
import Thumbs from '../components/Thumbs';
import logement from '../data/logements.json';

const Home = () => {
    return (
        <div className='home'>
            <div className='banner'>
                <img src= {Imagehome} />
                <h1>Chez vous, partout et ailleurs</h1>
            </div>
            <div className="gallery">
                <Thumbs logement={logement}/>
            </div>
        </div>
    );
};

export default Home;


