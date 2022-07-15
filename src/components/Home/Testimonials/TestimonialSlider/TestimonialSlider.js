import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper";
//import icon
import {AiFillStar} from 'react-icons/ai'

//client image
import clientOne from '../../../../assets/images/clients/client-1.png'
import clientTwo from '../../../../assets/images/clients/client-2.png'
import clientThree from '../../../../assets/images/clients/client-3.png'

const TestimonialSlider = () => {
    const clientTestimonial = [
        { id: 1, name: 'Tony Stark', company: "CEO, SAT Tech", review: "A men with honesty and very much passionate with his job. He don't compromise anything with his work. His work is so impassive. Recommended him for everyone.", clientImg: clientOne },
        { id: 2, name: 'Michael Jackson', company: "Sr Eng. Nuclear IT Solution", review: "It was my first time working with him. He did the job as expected and on time. He also charged reasonably. Great attitude too. I highly recommend him. Thanks a lot Shaker. Will be back soon with more projects. Take Care!", clientImg: clientTwo },
        { id: 3, name: 'Chris Hemsworth', company: "CEO, Galaxy Software", review: "Shaker, is an excellent frontend dev. He's the ability to understand all of your requirements and deliver a perfect code. Communication was good too.", clientImg: clientThree },
    ]
    return (
        <>
            <Swiper
                effect={"cards"}
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper mt-20 mb-4 "
            >
                {
                    clientTestimonial.map(ct =>
                        <SwiperSlide className='bg-white custom-shadow'>
                            <div className='flex justify-center items-center'>
                                <img className='custom-img shadow w-full' src={ct.clientImg} alt="" />
                            </div>
                            <div className='mt-12 p-8'>
                                
                                <div className='text-center'>
                                    <h4 className='text-black font-bold text-2xl'>{ct.name}</h4>
                                    <span className='text-black font-semibold text-sm'>{ct.company}</span>
                                </div>
                                <div className='text-yellow-400 flex justify-center items-center py-2'>
                                    <AiFillStar></AiFillStar>
                                    <AiFillStar></AiFillStar>
                                    <AiFillStar></AiFillStar>
                                    <AiFillStar></AiFillStar>
                                    <AiFillStar></AiFillStar>
                                </div>
                                <p className='text-gray-700 text-justify leading-6 tracking-tight py-5 md:py-0 text-sm md:text-md md:mt-5'>{ct.review}</p>
                            </div>
                        </SwiperSlide>)
                }

            </Swiper>
        </>
    );
};

export default TestimonialSlider;