import React from 'react';
import reactNative from './../../../../assets/images/Skills/Basic/physics.png';
import TypeScript from './../../../../assets/images/Skills/Basic/typescript.png';
import stripe from './../../../../assets/images/Skills/Basic/icons8-stripe-64.png';
import SkillItem from '../../../../SharedComponent/SkillItem/SkillItem';
const Basic = () => {
    const basic = [
        { id: 1, tittle: 'React Native', value: "60", Img: reactNative },
        { id: 2, tittle: 'TypeScript', value: '60', Img: TypeScript },
        { id: 3, tittle: 'Stripe', value: '70', Img: stripe }
    ]
    return (
        <div className='custom-shadow custom-radius p-5 w-[90%] mx-auto mt-10'>
            <div className='py-5 mb-5 custom-shadow custom-radius'>
                <h1 className='uppercase text-center text-2xl font-semibold'>Basic Understanding </h1>
            </div>
            <div className='grid grid-cols-3 gap-5 w-[90%] mx-auto mt-10'>
                {
                    basic.map(b => <SkillItem key={b.id} tittle={b.tittle} pic={b.Img} v={b.value}></SkillItem>)
                }
            </div>
        </div>
    );
};

export default Basic;