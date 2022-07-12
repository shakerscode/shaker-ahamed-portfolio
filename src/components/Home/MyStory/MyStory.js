import React from 'react';
import {CgQuote} from 'react-icons/cg'
import ComponentsHeader from '../../../SharedComponent/ComponentsHeader/ComponentsHeader';

const MyStory = () => { 
    return (
        <div className='mb-10'>
            <ComponentsHeader componentTittle={'My Story'}  componentNumber={'01'}></ComponentsHeader>
            <div className='mt-12 w-[80%] mx-auto custom-shadow custom-radius p-10 relative text-justify'>
             <CgQuote className='text-4xl text-primary absolute top-0 left-7'></CgQuote>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat eius vitae quaerat perferendis facilis vel natus deleniti quam reprehenderit id?</p>
                <CgQuote className='text-4xl text-primary absolute bottom-0 right-7'></CgQuote>
            </div>
        </div>
    );
};

export default MyStory;