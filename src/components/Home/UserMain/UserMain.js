import React from 'react';
import CustomBtn from '../../../SharedComponent/CustomBtn/CustomBtn';
import ScrollBtn from '../../../SharedComponent/ScrollBtn/ScrollBtn';
import Testimonial from '../Testimonial/Testimonial';
 
const UserMain = () => {
    const testimonial = [
        {id: 1, number: "74", plus: "+", text: "COMPLETED PROJECTS"},
        {id: 2, number: "50", plus: "+", text: "HAPPY CUSTOMERS"},
        {id: 3, number: "14", plus: "+", text: "HONORS AND AWARDS"},
    ]
    return (
      <div>
          <div className='text-white info p-2'>
            <div>
            <p>HI MY NEW FRIEND!</p>
            <h1 className='text-5xl pb-3 font-bold'>Discover my developing space!</h1>
            <CustomBtn>Download Resume</CustomBtn>
            </div>
            <ScrollBtn></ScrollBtn>
         </div>
        <div className='testimonial mt-24 text-center mx-auto'>
            {
                testimonial.map(t =>  
                        <Testimonial key={t.id} t={t}></Testimonial> 
                    )
            }
        </div>
      </div>
    );
};

export default UserMain;