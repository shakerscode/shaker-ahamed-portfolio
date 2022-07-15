import React from 'react';
import ComponentsHeader from '../../../SharedComponent/ComponentsHeader/ComponentsHeader';
import frontEnd from '../../../assets/images/Services-Image/web-design.png';
import MERN from '../../../assets/images/Services-Image/web-programming.png';
import webDevelopment from '../../../assets/images/Services-Image/web-programming.png';
import Service from '../../../SharedComponent/Service/Service';

const Services = () => {
    const services = [
        {id : 1, tittle: 'Front-end Web Developer', desc: 'I like to code things from scratch, and enjoy bringing ideas to life in the browser.', image: frontEnd },
        {id : 1, tittle: 'MERN Stack Web Developer', desc: 'A perfect website where user can do anything with few easy steps or a website which need to manage data is easily possible with MERN technology.,', image: MERN},
        {id : 1, tittle: 'Web Developer', desc: 'My approach to website development is to create a website that strengthens your company’s brand while ensuring ease of use and simplicity for your audience.', image: webDevelopment},
    ]
    return (
        <div id='services'>
            <ComponentsHeader componentTittle={'My Services'} componentNumber={'02'}></ComponentsHeader>
             
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 md:w-[90%] mx-auto '>
                    {
                        services.map(service => <Service key={service.id} service={service}></Service>)
                    }
                </div> 
        </div>
    );
};

export default Services;