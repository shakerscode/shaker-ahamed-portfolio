import React from 'react';
import ComponentsHeader from '../../../SharedComponent/ComponentsHeader/ComponentsHeader';
import TestimonialSlider from './TestimonialSlider/TestimonialSlider';

const Testimonials = () => {
    return (
        <div className='mt-12'>
            <ComponentsHeader componentTittle={'Testimonials'} componentNumber={'05'}></ComponentsHeader>
            <div className=''>
                <TestimonialSlider></TestimonialSlider>
            </div>
        </div>
    );
};

export default Testimonials;