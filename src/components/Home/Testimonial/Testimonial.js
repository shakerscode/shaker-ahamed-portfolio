import React from 'react';

const Testimonial = ({t}) => {
    const {number, plus, text } = t;
    return (
        <div className='bg-white nav-shadow rounded-lg'>
            <h3 className='my-5 p-4 text-3xl font-bold'>{number} <span className='text-primary'>{plus}</span></h3>
            <div className='border-2 border-dotted border-gray-400 w-[70%] mx-auto mb-4'></div>
            <p className='text-sm font-semibold p-4'>{text}</p>
        </div>
    );
};

export default Testimonial;