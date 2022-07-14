import React from 'react';
import ContactMe from './ContactMe/ContactMe';
import Footer from './Footer/Footer';
import MyStory from './MyStory/MyStory';
import Projects from './Projects/Projects';
import Services from './Services/Services';
import Skills from './Skills/Skills';
 import Testimonial from './Testimonial/Testimonial';
import Testimonials from './Testimonials/Testimonials';
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
                <div className='md:ml-10 ml-1 md:mt-10 h-full z-40'>
                    <UserInfo></UserInfo>
                </div>
                <div>
                   <div className='custom-shadow custom-radius w-[80%] h-[400px] md:mx-auto md:mt-12 mt-5 home-bg'>
                   <UserMain></UserMain>
                   </div>
                    <div className='grid grid-cols-1 md:grid-cols-3 md:gap-10 gap-5 w-[70%] md:h-[300px]  md:mt-[-8rem] mt-[-5rem] mx-auto justify-center positioning items-center'>
                        {
                            testimonial.map(t=> <Testimonial key={t.id} t={t}></Testimonial>)
                        }
                    </div>
                    <MyStory></MyStory>
                    <Services></Services>
                    <Skills></Skills>
                    <Projects></Projects>
                    <Testimonials></Testimonials>
                    <ContactMe></ContactMe>
                    <Footer></Footer>
                </div>
            </div>
        </div>
    );
};

export default Home;