import React, { useState } from 'react';
import './Accordion.css';
import ChevronDown from '../assets/images/icons-chevron-down.png';

function Accordion({ title, children }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="accordion">
            <button 
                className="accordion__button" 
                aria-expanded={isOpen} 
                onClick={() => setIsOpen(!isOpen)}
            >
                <img 
                    src={ChevronDown} 
                    alt="A chevron down icon" 
                    className={`accordion__icon ${isOpen ? 'open' : ''}`} 
                />
                {title}
            </button>
            <div 
                className={`accordion__content ${isOpen ? 'open' : ''}`} 
                aria-hidden={!isOpen}
            >
                {children}
            </div>
        </div>
    );
}

export default Accordion;