// import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';

const Navbar = () => {
    const history = useHistory();
    const navigateToGameScreen = () => {
        history.push('/');
    };
    return (
        <div className="bg-[#e75480] flex justify-between items-center h-24  w-full mx-auto px-4 text-white">
            <h1
                className="text-2xl font-bold font-poppins text-white pt-2 pt-10 cursor-pointer"
                onClick={navigateToGameScreen}
            >
                CraveMatch
            </h1>

        </div>
    )

}
export default Navbar