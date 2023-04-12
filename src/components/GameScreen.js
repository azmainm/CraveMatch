import React from 'react';
import Header from './Header';
import CardStack from './CardStack';

const GameScreen = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <CardStack />
        </div>
    );
};

export default GameScreen;
