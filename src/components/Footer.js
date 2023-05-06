import React from "react";
import { FaLinkedin, FaEnvelope, FaFacebook, FaInstagram } from "react-icons/fa";
// import LogoBalt from '../images/logoBalt.png'
import { useHistory } from 'react-router-dom';

const Footer = () => {
    const history = useHistory();
    const navigateToGameScreen = () => {
        history.push('/');

    };
    return (
        <div className="bg-[#e75480] mt-[60px] w-full mx-auto text-center mb-0">
            <h1
                className="text-2xl font-bold font-poppins text-white pt-10 cursor-pointer mb-6"
                onClick={navigateToGameScreen}
            >
                CraveMatch
            </h1>
            <div className="bg-#e75480 flex justify-center mt-0 mb-10">
                <a href="https://www.facebook.com/azmainm/" target="_blank" rel="noopener noreferrer">
                    <FaFacebook
                        size={30}
                        className="fill-white hover:scale-105  duration-10 mx-2  hover:fill-blue-500"
                    />
                </a>
                <a href="https://www.instagram.com/azmainmd__/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram
                        size={30}
                        className="fill-white hover:scale-105  duration-10 mx-2 hover:fill-orange-500"
                    />
                </a>
                <a href="https://www.linkedin.com/in/azmain-morshed/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin
                        size={30}
                        className="fill-white hover:scale-105  duration-10 mx-2 hover:fill-blue-500"
                    />
                </a>
                <a href="mailto:azmainmorshed03@gmail.com" target="_blank" rel="noopener noreferrer">
                    <FaEnvelope
                        size={30}
                        className="fill-white hover:scale-105 duration-10 mx-2 hover:fill-orange-500"
                    />
                </a>
            </div>
            <h1 className="bg-#e75480 w-full text-sm text-white mb-0 pb-10 pt-0">
                © Azmain Morshed 2023. All rights reserved.
            </h1>
        </div>
    );
};

export default Footer;
