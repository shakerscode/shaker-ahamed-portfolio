import React from 'react';

const Footer = () => {
    return (
        <div className='flex flex-wrap justify-between items-center p-5 md:w-[95%] mx-auto mt-5 custom-radius custom-shadow text-sm text-gray-600'> 
            <h5> &copy; {new Date().getFullYear()} - All right reserved by <a className='text-primary font-semibold' href="https://www.linkedin.com/in/shaker-ahamed/">Shaker Ahamed</a> </h5>
            <p className='text-center '>Email: dev.shakerahamed@gmail.com</p>
        </div>
    );
};

export default Footer;