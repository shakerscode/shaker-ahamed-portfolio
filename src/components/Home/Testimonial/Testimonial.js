import React from 'react';

const Testimonial = ({t}) => {
    const {number, plus, text } = t;
    return (
        <div id='testimonial' className='bg-white custom-shadow w-[200px] h-[200px] p-4 rounded-lg text-center'>
            <h3 className='my-5 text-3xl font-bold'>{number} <span className='text-primary'>{plus}</span></h3>
            <div className='border-2 border-dotted border-gray-400 w-[70%] mx-auto mb-4'></div>
            <p className='text-sm font-bold p-6'>{text}</p>
        </div>
    );
};

export default Testimonial;