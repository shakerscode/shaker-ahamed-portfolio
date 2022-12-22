import React, { useState } from 'react';
import ComponentsHeader from '../../../SharedComponent/ComponentsHeader/ComponentsHeader';
import Project from './Project/Project';
import imageOne from '../../../assets/images/Projects/torq-bicycle.png';
import imageTwo from '../../../assets/images/Projects/find-tutor-home.png';
import imageThree from '../../../assets/images/Projects/imageThree.png';
import imageFour from '../../../assets/images/Projects/ExpentionMartBlog.png';
import imageFive from '../../../assets/images/Projects/fruit-fest.png';
import Modal from './Project/Modal/Modal';

const Projects = () => {
    const [modal, setModal] = useState(false);
    const projects = [
        {
            id: 1, 
            tittle: 'Torq Bicycle', 
            desc: 'Torq Bicycle is a manufacturer company website that makes different parts of a bicycle and sells them worldwide.', 
            Image: imageOne,
            keyPart: 'Users can order products, cancel ordered products, and can complete the payment process with Stripe. Also, they can give a review. Admin can add or delete products, cancel users orders, able to make a user admin, and can confirm an order. Users and admins have a different dashboard and firebase login/sign-in authentication implemented.',
            usedTech: [
                {techOne: 'MERN technology'},
                {techTwo: 'Javascript'},
                {techThree: 'JWT'},
                {techFour: 'HTML'},
                {techFive: 'CSS'},
                {techSix: 'Tailwind CSS'},
                {techSeven: 'DaisyUI,'},
                {techEight: 'Firebase'},
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
            tittle: 'Find Tutors', 
            desc: 'Find Tutor is a website that will help the students to find a perfect tutor for him/her. Also teachers can create their profile and add their teaching service.', 
            Image: imageTwo,
            keyPart: 'Users can log in/sign in here. Log in/ sign in system implemented with firebase authentication system.  Custom design.',
            usedTech: [
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
            gitClient:' https://github.com/shakerscode/find-tutor-website', 
            gitServer: 'https://github.com/shakerscode', 
            liveLink: 'https://find-tutor-e9b12.web.app/',
        },
        {
            id: 3, 
            tittle: 'ExpansionMart', 
            desc: 'ExpansionMart is an e-commerce website that will help you to buy products. This website is still under construction. I am building is by myself.', 
            Image: imageThree,
            keyPart: 'A pure design and functionality made with react and tailwind css',
            usedTech: [
                {techTwo: 'Javascript'}, 
                {techFour: 'HTML'},
                {techFive: 'Tailwind CSS'}, 
                {techSeven: 'Firebase'},
                {techNine: 'Toastify'},  
            ], 
            gitClient:' https://github.com/shakerscode/expansion-mart-e-commerce', 
            gitServer: 'https://github.com/shakerscode/expansion-mart-e-commerce', 
            liveLink: 'https://expansionmart.netlify.app/',
        },
        {
            id: 4, 
            tittle: 'ExpansionMart Blog', 
            desc: 'ExpansionMart Blog is an e-commerce health related blog website that will help you to get knowledge about healthy food. This website is still under construction. I am building is by myself.', 
            Image: imageFour,
            keyPart: 'A pure design and functionality made with react and tailwind css',
            usedTech: [
                {techTwo: 'Javascript'}, 
                {techFour: 'HTML'},
                {techFive: 'Tailwind CSS'}, 
                {techSeven: 'Firebase'},
                {techNine: 'Toastify'},  
            ], 
            gitClient:' https://github.com/shakerscode/e-blog-client', 
            gitServer: 'https://github.com/shakerscode/expansion-mart-e-commerce', 
            liveLink: 'https://expention-mart-blog.netlify.app/',
        },
        {
            id: 5, 
            tittle: 'Fruit Fest', 
            desc: 'Fruit Fest is a web warehouse website that contains different kinds of fruits. They stock and restock their fruits and are able to deliver them.', 
            Image: imageFive,
            keyPart: 'An admin can deliver and restock their products. Admin can manage, and be able to delete a product. Admin can add a new item in their inventory. Users can log in/sign in here. Log in/ sign in system implemented with firebase authentication system.',
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
            gitClient:' https://github.com/shakerscode/fruit-fest-web-app', 
            gitServer: 'https://github.com/shakerscode/fruit-fest-web-app-server-site', 
            liveLink: 'https://fruit-fest.web.app/',
        }
    ]

    const handleModal = (p)=> {
        setModal(p);
    }
    return (
        <div className='mt-12' id='projects'>
            <ComponentsHeader componentTittle={'Best Projects'} componentNumber={'04'}></ComponentsHeader>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 md:w-[90%] w-full mx-auto mt-12'>
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