import React from 'react';

const Instructions = () => {
    return (
        <div className="bg-white rounded-lg p-6 max-w-md mx-auto">
            <h2 className="text-[#e75480] text-3xl font-bold mb-4 mt-4 text-center">
                Instructions
            </h2>
            <style>
                {`
                    .custom-bullet li::marker {
                        color: #e75480;
                    }
                `}
            </style>
            <div className="mx-auto text-center w-full mt-10">
                <div className="mx-auto text-left w-full">
                    <ul className="list-disc list-inside space-y-2 custom-bullet text-black px-0">
                        <li className="text-xl mb-6">
                            Click "Play Now" to begin your food discovery journey.
                        </li>
                        <li className="text-xl mb-6">
                            Tap the trash icon on an item you're not in the mood for or prefer less than the other option.
                        </li>
                        <li className="text-xl mb-6">
                            Continue playing until the game concludes.
                        </li>
                        <li className="text-xl mb-6">
                            By the end of the game, your true food craving will be revealed!
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Instructions;
