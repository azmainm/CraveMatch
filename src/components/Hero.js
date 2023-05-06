import React from 'react';
import { useHistory } from 'react-router-dom';

const Hero = () => {
    const history = useHistory();

    // const navigateToGameScreen = () => {
    //     history.push('/');
    // };

    const navigateToGame = () => {
        history.push('/GameScreen');
    };

    return (
        <>
            <div className="bg-[#e75480] text-white flex justify-between items-center">
                <div className="max-w-[800px] mt-[96px] w-full pb-32 mx-auto text-center flex flex-col">
                    <p className="text-[#FFFFFF] font-bold text-xl">Can't decide what to eat?</p>
                    <h1 className="md:text-8xl sm:text-6xl text-6xl font-bold md:py-2">CraveMatch</h1>
                    <button
                        onClick={navigateToGame}
                        className="bg-[#FFFFFF] w-[180px] rounded-md font-medium text-lg my-8 mx-auto py-2 text-[#e75480] hover:scale-105 duration-300 hover:bg-black hover:text-[#e75480]"
                    >
                        Play Now
                    </button>
                </div>
            </div>
        </>
    );
};

export default Hero;
