import React from 'react';
import ComponentsHeader from '../../../SharedComponent/ComponentsHeader/ComponentsHeader';
import frontEnd from '../../../assets/images/Services-Image/web-design.png';
import MERN from '../../../assets/images/Services-Image/web-programming.png';
import webDevelopment from '../../../assets/images/Services-Image/web-programming.png';
import Service from '../../../SharedComponent/Service/Service';

const Services = () => {
    const services = [
        {id : 1, tittle: 'Front-end Web Developer', desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat eius vitae quaerat perferendis', image: frontEnd },
        {id : 1, tittle: 'MERN Stack Web Developer', desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat eius vitae quaerat perferendis', image: MERN},
        {id : 1, tittle: 'Web Developer', desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat eius vitae quaerat perferendis', image: webDevelopment},
    ]
    return (
        <div id='services'>
            <ComponentsHeader componentTittle={'My Services'} componentNumber={'02'}></ComponentsHeader>
             
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 w-[90%] mx-auto '>
                    {
                        services.map(service => <Service key={service.id} service={service}></Service>)
                    }
                </div> 
        </div>
    );
};

export default Services;