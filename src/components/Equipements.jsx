import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import logements from '../data/logements.json';

const Equipements = () => {
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
                {isAccordionOpen ? 'Equipements' : 'Equipements'}
            </button>
            {isAccordionOpen && (
                <div>
                    {logement.equipments.map((equipement, index) => (
                    <p key={index}>{equipement}</p>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Equipements;