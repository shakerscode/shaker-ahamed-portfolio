import React from 'react';
import {CgQuote} from 'react-icons/cg'
import ComponentsHeader from '../../../SharedComponent/ComponentsHeader/ComponentsHeader';

const MyStory = () => { 
    return (
        <div className='mb-10' id='about'>
            <ComponentsHeader componentTittle={'My Story'}  componentNumber={'01'}></ComponentsHeader>
            <div className='mt-12 md:w-[80%] w-[90%] m-auto md:mx-auto custom-shadow custom-radius p-10 relative text-justify hover:bg-primary hover:text-white cursor-pointer transition-all duration-1000 ease-in-out'>
             <CgQuote className='text-4xl text-primary absolute top-0 left-7'></CgQuote>
                <p className='md:text-md text-sm leading-relaxed'>I'm Shaker Ahamed. I'm a full-time MARN stack Developer, who has pretty much experience in developing a web app with React.js, Node.js, MongoDB, Express.js, Jwt, etc. I've enough knowledge about JavaScript, Html, html5, CSS, CSS3. For CSS framework, I have a strong understanding of tailwind and bootstrap. DaisyUi is one of the best tailwind component libraries for styling and making an outstanding response website. I'm experienced on firebase and firebase github hook for creating an account, logging in, and Google, Facebook, and GitHub login for a website.</p>
                <CgQuote className='text-4xl text-primary absolute bottom-0 right-7'></CgQuote>
            </div>
        </div>
    );
};

export default MyStory;