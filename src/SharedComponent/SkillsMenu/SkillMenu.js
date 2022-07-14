import React, { useState } from 'react';

const SkillMenu = ({skill}) => { 
    const {handleClick, tittle} = skill;
    return (
        <div onClick={handleClick} className='custom-shadow custom-radius  px-4 py-2 ml-5 cursor-pointer'>
            
            <h2 className='font-semibold '>{tittle}</h2></div>
    );
};

export default SkillMenu;