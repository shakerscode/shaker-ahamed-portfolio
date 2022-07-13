import React from 'react';

const Project = ({ project, handleModal }) => {
    const { tittle, desc, Image } = project;
    return (
        <div className='text-center custom-radius custom-shadow p-5'>
            <img className='custom-radius' src={Image} alt="" />
            <h1 className='text-2xl font-bold py-2'>{tittle}</h1>
            <p className='my-4'>{desc}</p>
            {/* <button onClick={() => handleModal(project)}  for="my-modal-6" className='border-2 border-primary px-4 py-2 mt-2 text-black rounded-full hover:bg-primary hover:text-white transition-all duration-1000 ease-in-out font-semibold '>Learn More</button> */}
            <label  onClick={() => handleModal(project)}  for="my-modal-6" className='border-2 border-primary px-4 py-2 mt-2 text-black rounded-full hover:bg-primary hover:text-white transition-all duration-1000 ease-in-out font-semibold cursor-pointer'>Learn More</label>

        </div>
    );
};

export default Project;