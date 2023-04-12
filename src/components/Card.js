import React from 'react';
import { FaTrash } from 'react-icons/fa';

const Card = ({ card, onRemove }) => {
    return (
        <div className="relative bg-white h-72 w-64 rounded-xl shadow-lg">
            <img
                src={card.photoURL}
                alt={card.name}
                className="absolute top-0 h-full w-full rounded-xl object-cover"
            />
            <div className="absolute bottom-0 bg-white w-full flex items-center justify-between h-14 px-6 py-2 rounded-b-xl">
                <p className="text-md font-medium">{card.name}</p>
                <button
                    onClick={onRemove}
                    className="text-[#e75480] text-2xl"
                >
                    <FaTrash />
                </button>
            </div>
        </div>
    );
};

export default Card;
