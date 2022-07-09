import React from 'react';

const CustomBtn = ({children}) => {
    return (
         <button className='border-2 border-base-100 rounded-full px-4 py-2 hover:bg-primary hover:text-base-100 hover:border-none transition-all duration-1000 ease-in-out	'>{children}</button>
    );
};

export default CustomBtn;