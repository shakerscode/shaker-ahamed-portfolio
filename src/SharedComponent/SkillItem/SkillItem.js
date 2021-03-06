import React from 'react';

const SkillItem = ({tittle, pic, v}) => {
    return (
        <div className='text-center '>
            <h3 className='custom-shadow my-2 custom-radius bg-primary text-white text-center text-sm md:text-md md:font-semibold'>{tittle}</h3>
            <img className='mx-auto custom-shadow p-5 custom-radius hover:border-primary hover:border-2 cursor-pointer' src={pic} alt="" width={'100px'} />
            <progress class="progress progress-warning md:w-24 w-20 mt-2" value={v} max="100"></progress>

        </div>
    );
};

export default SkillItem;