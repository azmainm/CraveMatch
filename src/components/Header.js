import React from 'react';
import { useHistory } from 'react-router-dom';

const Header = () => {
    const history = useHistory();

    const navigateToGameScreen = () => {
        history.push('/');
    };

    return (
        <header className="flex items-center justify-center relative bg-[#e75480] pb-3 mb-10">
            <h1
                className="text-2xl font-bold font-poppins text-white pt-2 pt-10 cursor-pointer"
                onClick={navigateToGameScreen}
            >
                CraveMatch
            </h1>
        </header>
    );
};

export default Header;
