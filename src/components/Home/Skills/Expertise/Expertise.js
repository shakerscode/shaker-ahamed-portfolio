import React from 'react';
import html from '../../../../assets/images/Skills/html-5.png';
import css from '../../../../assets/images/Skills/css-3.png';
import bootstrap from '../../../../assets/images/Skills/bootstrap-5-logo.png';
import tailwind from '../../../../assets/images/Skills/tailwind-css.png';
import daisyUI from '../../../../assets/images/Skills/daisy.png';
import JavaScript from '../../../../assets/images/Skills/js.png';
import reactjs from '../../../../assets/images/Skills/react.png';
import api from '../../../../assets/images/Skills/rest-api.png';
import json from '../../../../assets/images/Skills/json-file.png';
import firebase from '../../../../assets/images/Skills/google-firebase.png';
import SkillItem from '../../../../SharedComponent/SkillItem/SkillItem';

const Expertise = () => {
    const expertise = [
        { id: 1, tittle: 'HTML', value: '90', exImg: html },
        { id: 2, tittle: 'CSS', value: '90', exImg: css },
        { id: 3, tittle: 'Bootstrap', value: '90', exImg: bootstrap },
        { id: 4, tittle: 'Tailwind CSS', value: '80', exImg: tailwind },
        { id: 5, tittle: 'DaisyUI', value: '90', exImg: daisyUI },
        { id: 6, tittle: 'JavaScript', value: '80', exImg: JavaScript },
        { id: 7, tittle: 'React.JS', value: '80', exImg: reactjs },
        { id: 8, tittle: 'JSON', value: '70', exImg: json },
        { id: 9, tittle: 'REST API', value: '80', exImg: api },
        { id: 10, tittle: 'Firebase', value: '80', exImg: firebase }
    ]
    return (
        <div className='custom-shadow custom-radius p-5 w-[90%] mx-auto mt-10'> 
        <div className='py-5 mb-5 custom-shadow custom-radius'>
        <h1 className=' text-center text-2xl font-semibold'>My Expertise</h1>
        </div>

            <div className='grid grid-cols-3 md:grid-cols-4 gap-5 mt-7'>
                {
                    expertise.map(ex => <SkillItem key={ex.id} tittle={ex.tittle} pic={ex.exImg} v={ex.value}></SkillItem>)
                }
            </div>
            
        </div>
    );
};

export default Expertise;