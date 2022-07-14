import React, { useState } from 'react';
import ComponentsHeader from '../../../SharedComponent/ComponentsHeader/ComponentsHeader';
import SkillMenu from '../../../SharedComponent/SkillsMenu/SkillMenu';
import Basic from './Basic/Basic';
import Comfortable from './Comfortable/Comfortable';
import Expertise from './Expertise/Expertise';
import Tools from './Tools/Tools';

const Skills = () => {
    const [expertise, setExpertise] = useState(true)
    const [comfortable, setComfortable] = useState(false)
    const [basic, setBasic] = useState(false)
    const [tools, setTools] = useState(false)

    const handleExpertise = ()=>{
        setExpertise(true)
        setComfortable(false)
        setBasic(false)
        setTools(false)
    }
    const handleComfortable = ()=>{
        setExpertise(false)
        setComfortable(true)
        setBasic(false)
        setTools(false)
    }
    const handleBasic = ()=>{
        setExpertise(false)
        setComfortable(false)
        setBasic(true)
        setTools(false)
    }
    const handleTools = ()=>{
        setExpertise(false)
        setComfortable(false)
        setBasic(false)
        setTools(true)
    }
    const handlingSkills = [
        {id: 1, handleClick: handleExpertise, tittle: 'Expertise' },
        {id: 2, handleClick: handleComfortable, tittle: 'Comfortable' },
        {id: 3, handleClick: handleBasic, tittle: 'Very Basic' },
        {id: 4, handleClick: handleTools, tittle: 'Tools' },
    ]
    return (
        <div className='mt-12' id='skills'>
            <ComponentsHeader componentTittle={'Skills'} componentNumber={'03'}></ComponentsHeader>
            <div className='flex flex-wrap justify-center items-center my-5'>
                {
                    handlingSkills.map(hs=> 
                    <SkillMenu 
                    key={hs.id} 
                    skill={hs} ></SkillMenu>)
                }
            </div>
            <div>
            {
                expertise && <Expertise></Expertise>
            }
            </div>
            <div>
            {
                comfortable && <Comfortable></Comfortable>
            }
            </div>
            <div>
            {
                basic && <Basic></Basic>
            }
            </div>
            <div>
            {
                tools && <Tools></Tools>
            }
            </div>

        </div>
    );
};

export default Skills;