import React from 'react';
import github from '../../../../assets/images/Skills/Tools/github.png';
import vsCode from '../../../../assets/images/Skills/Tools/layers.png';
import devTool from '../../../../assets/images/Skills/Tools/crome.gif';
import heroku from '../../../../assets/images/Skills/Tools/heroku.png';
import netlify from '../../../../assets/images/Skills/Tools/netlify.png';
import photoshop from '../../../../assets/images/Skills/Tools/photoshop.png';
import figma from '../../../../assets/images/Skills/Tools/figma.png';
import SkillItem from '../../../../SharedComponent/SkillItem/SkillItem';

const Tools = () => {
    const tools = [
        {id: 1, tittle: 'Github', value: "90", Img: github},
        {id: 2, tittle: 'VS Code', value: '90', Img: vsCode},
        {id: 3, tittle: 'Chrome Dev Tools', value: '90', Img: devTool} ,
        {id: 4, tittle: 'Heroku', value: '90', Img: heroku} ,
        {id: 5, tittle: 'Netlify', value: '90', Img: netlify} ,
        {id: 6, tittle: 'Photoshop', value: '90', Img: photoshop} ,
        {id: 7, tittle: 'Figma,', value: '90', Img: figma} 
    ]
    return (
        <div className='grid grid-cols-3 gap-5 w-[90%] mx-auto mt-10'>
            {
                tools.map(t => <SkillItem key={t.id} tittle={t.tittle} pic={t.Img} v={t.value}></SkillItem>)
            }
        </div>
    );
};

export default Tools;