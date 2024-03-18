import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import logements from '../data/logements.json';

const Description = () => {
    const { id } = useParams();
    const logement = logements.find(logement => logement.id === id);

    // State for managing accordion open/close state
    const [isAccordionOpen, setIsAccordionOpen] = useState(false);

    // Function to toggle accordion state
    const toggleAccordion = () => {
        setIsAccordionOpen(!isAccordionOpen);
    };

    return (
        <div className="accordion">
            <button onClick={toggleAccordion}>
                {isAccordionOpen ? 'Description' : 'Description'}
            </button>
            {isAccordionOpen && (
                <div>
                    <p>{logement.description}</p>
                </div>
            )}
        </div>
    );
};

export default Description;