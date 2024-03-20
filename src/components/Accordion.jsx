import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';


const Accordion = ({title, content}) => {
    const [isAccordionOpen, setIsAccordionOpen] = useState(false);

    // Fonction pour basculer l'état de l'accordéon

    const toggleAccordion = () => {setIsAccordionOpen(!isAccordionOpen);
    };
    return (
        <div>
        <button onClick={toggleAccordion}>
            {title}
            {isAccordionOpen ? <FontAwesomeIcon icon = {faChevronUp} /> :<FontAwesomeIcon icon = {faChevronDown} />}
        </button>
        {isAccordionOpen && (
            <div>
                {content}
            </div>
        )}
    </div>
    );
};

export default Accordion;