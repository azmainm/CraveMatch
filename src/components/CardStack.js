import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { data } from './dummy_data';
import Card from './Card';

const CardStack = () => {
    const [cards, setCards] = useState([]);
    const history = useHistory();

    useEffect(() => {
        const shuffledData = [...data].sort(() => Math.random() - 0.5);
        setCards(shuffledData);
    }, []);

    const onRemove = (index) => {
        const newCards = [...cards];
        newCards.splice(index, 1);
        setCards(newCards);
        if (newCards.length === 1) {
            history.push('/details', { ...newCards[0] });
        }
    };

    return (
        <div className="cardstack flex-1 flex flex-wrap justify-center md:mt-32">
            {cards.map((card, index) => (
                <div
                    key={index}
                    className={`w-64 h-72 transition-all duration-300 ${index < 2 ? 'mb-4' : ''} ${index === 0 ? 'lg:mr-4' : index === 1 ? 'lg:ml-4' : 'hidden'
                        }`}
                >
                    <Card card={card} onRemove={() => onRemove(index)} />
                </div>
            ))}
        </div>
    );
};

export default CardStack;
