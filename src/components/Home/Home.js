import React from 'react';
import MyStory from './MyStory/MyStory';
import Services from './Services/Services';
import Skills from './Skills/Skills';
 import Testimonial from './Testimonial/Testimonial';
import UserInfo from './UserInfo/UserInfo';
import UserMain from './UserMain/UserMain';
const Home = () => {
    const testimonial = [
        { id: 1, number: "74", plus: "+", text: "COMPLETED PROJECTS" },
        { id: 2, number: "50", plus: "+", text: "HAPPY CUSTOMERS" },
        { id: 3, number: "14", plus: "+", text: "HONORS AND AWARDS" },
    ]
    return (

        <div className=''>
            <div className='hero-box'>
                <div className='ml-10 mt-10 h-full z-40'>
                    <UserInfo></UserInfo>
                </div>
                <div>
                   <div className='custom-shadow custom-radius w-[80%] h-[400px] mx-auto mt-12 home-bg'>
                   <UserMain></UserMain>
                   </div>
                    <div className='grid grid-cols-3 gap-10 w-[70%] h-[300px] mx-auto mt-[-8rem] justify-center items-center'>
                        {
                            testimonial.map(t=> <Testimonial key={t.id} t={t}></Testimonial>)
                        }
                    </div>
                    <MyStory></MyStory>
                    <Services></Services>
                    <Skills></Skills>
                </div>
            </div>
        </div>
    );
};

export default Home;