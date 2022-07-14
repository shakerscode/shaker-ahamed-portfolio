import React, { useState } from 'react';
import ComponentsHeader from '../../../SharedComponent/ComponentsHeader/ComponentsHeader';
import Project from './Project/Project';
import imageOne from '../../../assets/images/Projects/torq-bicycle.png';
import imageTwo from '../../../assets/images/Projects/find-tutor-home.png';
import imageThree from '../../../assets/images/Projects/fruit-fest.png';
import Modal from './Project/Modal/Modal';

const Projects = () => {
    const [modal, setModal] = useState(false);
    const projects = [
        {
            id: 1, 
            tittle: 'Torq Bicycle', 
            desc: 'Torq Bicycle is a manufacturer company website that makes different parts of a bicycle and sells them worldwide.', 
            Image: imageOne,
            keyPart: 'Students can create their profile and they can find the best tutor for them. Teachers can create their profile and able to add their tutor service. Users can log in/sign in here. Log in/ sign in system implemented with firebase authentication system.',
            usedTech: [
                {techOne: 'MERN technology'},
                {techTwo: 'Javascript'},
                {techThree: 'JWT'},
                {techFour: 'HTML'},
                {techFive: 'Tailwind CSS'},
                {techSix: 'DaisyUI,'},
                {techSeven: 'Firebase'},
                {techNine: 'Toastify'},
                {techTen: 'AOS Animation'},
                {techEleven: 'Heroku'},
            ], 
            gitClient:' https://github.com/shakerscode/torq-bicycle-client-site', 
            gitServer: 'https://github.com/shakerscode/torq-bicycle-server', 
            liveLink: 'https://torq-bicycle.web.app/',
        },
        {
            id: 2, 
            tittle: 'Torq Bicycle', 
            desc: 'Torq Bicycle is a manufacturer company website that makes different parts of a bicycle and sells them worldwide.', 
            Image: imageTwo,
            keyPart: 'Students can create their profile and they can find the best tutor for them. Teachers can create their profile and able to add their tutor service. Users can log in/sign in here. Log in/ sign in system implemented with firebase authentication system.',
            usedTech: [
                {techOne: 'MERN technology'},
                {techTwo: 'Javascript'},
                {techThree: 'JWT'},
                {techFour: 'HTML'},
                {techFive: 'Tailwind CSS'},
                {techSix: 'DaisyUI,'},
                {techSeven: 'Firebase'},
                {techNine: 'Toastify'},
                {techTen: 'AOS Animation'},
                {techEleven: 'Heroku'},
            ], 
            gitClient:' https://github.com/shakerscode/torq-bicycle-client-site', 
            gitServer: 'https://github.com/shakerscode/torq-bicycle-server', 
            liveLink: 'https://torq-bicycle.web.app/',
        },
        {
            id: 3, 
            tittle: 'Torq Bicycle', 
            desc: 'Torq Bicycle is a manufacturer company website that makes different parts of a bicycle and sells them worldwide.', 
            Image: imageThree,
            keyPart: 'Students can create their profile and they can find the best tutor for them. Teachers can create their profile and able to add their tutor service. Users can log in/sign in here. Log in/ sign in system implemented with firebase authentication system.',
            usedTech: [
                {techOne: 'MERN technology'},
                {techTwo: 'Javascript'},
                {techThree: 'JWT'},
                {techFour: 'HTML'},
                {techFive: 'Tailwind CSS'},
                {techSix: 'DaisyUI,'},
                {techSeven: 'Firebase'},
                {techNine: 'Toastify'},
                {techTen: 'AOS Animation'},
                {techEleven: 'Heroku'},
            ], 
            gitClient:' https://github.com/shakerscode/torq-bicycle-client-site', 
            gitServer: 'https://github.com/shakerscode/torq-bicycle-server', 
            liveLink: 'https://torq-bicycle.web.app/',
        }
    ]

    const handleModal = (p)=> {
        setModal(p);
    }
    return (
        <div className='mt-12' id='projects'>
            <ComponentsHeader componentTittle={'Projects'} componentNumber={'04'}></ComponentsHeader>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 w-[90%] md:mx-auto mt-12'>
                {
                    projects.map(p => <Project key={p.id} project={p} handleModal={handleModal}></Project>)
                }
            </div>
            {
                modal && <Modal setModal={setModal} modal={modal}></Modal>
            }
        </div>
    );
};

export default Projects;