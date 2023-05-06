import React from 'react';
import Header from './Header';

function DetailsScreen({ location }) {
    const { photoURL, name, restaurant, price } = location.state;

    return (
        <>
            <Header />
            <div className="container mx-auto">
                <h2 className="subheader text-center mt-8 mb-4 text-[#e75480] text-4xl font-bold">
                    You want to eat
                </h2>
                <div className="box w-1/2 mx-auto">
                    <img
                        src={photoURL}
                        alt={name}
                        className="w-full sm:h-80 object-contain rounded-md shadow-md mb-8"
                    />
                </div>

                <div className="deets text-center">
                    <p className="text-[#e75480] text-2xl font-bold mt-4">Item Name:</p>
                    <p className="text-lg mt-1">{name}</p>
                    <p className="text-[#e75480] text-2xl font-bold mt-4">Restaurant Name:</p>
                    <p className="text-lg mt-1">{restaurant}</p>
                    <p className="text-[#e75480] text-2xl font-bold mt-4">Item Price:</p>
                    <p className="text-lg mt-1">{price}</p>
                </div>
            </div>
        </>
    );
}

export default DetailsScreen;
