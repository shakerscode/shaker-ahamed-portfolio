import React from 'react';
import node from '../../../../assets/images/Skills/Comfortable/nodejs.png'
import mongodb from '../../../../assets/images/Skills/Comfortable/mongodb.png'
import jwt from '../../../../assets/images/Skills/Comfortable/jwt.png'
import wordpress from '../../../../assets/images/Skills/Comfortable/wordpress.png'
import elementor from '../../../../assets/images/Skills/Comfortable/elementor.png'
import express from '../../../../assets/images/Skills/Comfortable/expressjs.png'
import SkillItem from '../../../../SharedComponent/SkillItem/SkillItem';

const Comfortable = () => {
    const comfortable = [
        { id: 1, tittle: 'Node js', value: "80", comImg: node },
        { id: 2, tittle: 'MongoDB', value: '90', comImg: mongodb },
        { id: 3, tittle: 'Express Js', value: '90', comImg: express },
        { id: 4, tittle: 'JSON Web Token(JWT)', value: '80', comImg: jwt },
        { id: 5, tittle: 'WordPress', value: '90', comImg: wordpress },
        { id: 6, tittle: 'Elementor', value: '90', comImg: elementor }
    ]
    return (
        <div className='custom-shadow custom-radius p-5 w-[90%] mx-auto mt-10'>
            <div className='py-5 mb-5 custom-shadow custom-radius'>
                <h1 className='uppercase text-center text-2xl font-semibold'>My Comfort Zone</h1>
            </div>
            <div className='grid grid-cols-3 gap-5 w-[90%] mx-auto mt-10'>
                {
                    comfortable.map(com => <SkillItem key={com.id} tittle={com.tittle} pic={com.comImg} v={com.value}></SkillItem>)
                }
            </div>
        </div>
    );
};

export default Comfortable;