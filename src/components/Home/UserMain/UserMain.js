import React from 'react';
import CustomBtn from '../../../SharedComponent/CustomBtn/CustomBtn';
import ScrollBtn from '../../../SharedComponent/ScrollBtn/ScrollBtn';
   
const UserMain = () => {
    
    return ( 
         
           <div className='text-white info'>
            <div>
            <p>HI MY NEW FRIEND!</p>
            <h1 className='text-2xl md:text-4xl pb-3 font-bold uppercase py-5'>Discover my developing space!</h1>
            <CustomBtn> <a target={'blank'} href="https://drive.google.com/file/d/1dcr8-0TCQeS7zMJcyflRAtciwt18s4hH/view?usp=sharing">Download Resume</a></CustomBtn>
            </div>
            <ScrollBtn></ScrollBtn>
         </div>  
           
    );
};

export default UserMain;