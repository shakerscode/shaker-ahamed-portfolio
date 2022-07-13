import React from 'react';

const UsedTech = ({tech}) => {
    const {techOne, techTwo, techThree, techFour, techFive, techSix, techSeven, techEight, techNine, techTen, techEleven} = tech;
    return (
        <div className='custom-shadow text-center p-2 text-sm font-semibold rounded-md hover:bg-primary hover:text-white transition-all duration-1000 ease-in-out'>
            <p>{techOne}</p>
            <p>{techTwo}</p>
            <p>{techThree}</p>
            <p>{techFour}</p>
            <p>{techFive}</p>
            <p>{techSix}</p>
            <p>{techSeven}</p>
            <p>{techEight}</p>
            <p>{techNine}</p>
            <p>{techTen}</p>
            <p>{techEleven}</p>
        </div>
    );
};

export default UsedTech;