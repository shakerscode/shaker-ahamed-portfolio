import React from 'react';
 
const ComponentsHeader = ({componentTittle, componentNumber}) => {
    return ( 
            <div className='border-2 border-dotted border-gray-300 my-3 mx-auto relative flex justify-between items-center'>
                <div className='absolute left-0 bg-white px-3 ml-[-5px]'>
                    <h1 className='text-3xl font-bold text-black'>{componentTittle}</h1>
                </div>
                <div className='absolute right-0 bg-white px-3 mr-[-5px]'>
                    <p className='font-semibold'>{componentNumber}</p>
                </div>
            </div>  
    );
};

export default ComponentsHeader;