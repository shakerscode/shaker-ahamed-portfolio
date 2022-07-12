import React from 'react';

const Service = ({service}) => {
    const {tittle, desc, image} = service;
    return (
        <div className='custom-shadow custom-radius p-5'>
            <img className='mx-auto' src={image} alt="" width={'70px'}  />
            <h1 className='text-center text-xl font-semibold text-black py-4 '>{tittle}</h1>
            <p className='text-center'>{desc}</p>
            
        </div>
    );
};

export default Service;