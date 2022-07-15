import React from 'react';
import ComponentsHeader from '../../../SharedComponent/ComponentsHeader/ComponentsHeader';
import emailjs from 'emailjs-com'
import { IoSend } from 'react-icons/io5'
import toast from 'react-hot-toast';
import { FiPhoneCall } from 'react-icons/fi'
import { RiMailSendFill } from 'react-icons/ri'

const ContactMe = () => {
    
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_jy1az2q', 'template_v558y3n', e.target, 'sw6wbCun_nY_xEG9a')
            .then(res => {
                console.log(res);
                toast.success('Successfully sent!')
                e.target.reset();
            }).catch(err => {
                console.log(err);
                toast.error('An error occurred')
            })
    }
    return (
        <div className='mt-12' id='contact'>
            <ComponentsHeader componentTittle={'Contact Me'} componentNumber={'06'}></ComponentsHeader>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 w-[80%] mx-auto mt-12'>
                <div className='custom-shadow custom-radius p-8 hover:bg-primary hover:text-white cursor-pointer transition-all duration-1000 ease-in-out'>
                    <div className='mb-3'>
                        <FiPhoneCall className='text-4xl '></FiPhoneCall>
                    </div>
                    <h1 className='text-2xl font-bold py-2'>Call</h1>
                    <p><span className='font-semibold'>Personal:</span> +880 1810679449</p>
                    <p> <span className='font-semibold'>Whatsapp:</span> +880 01766339710</p>
                </div>
                <div className='custom-shadow custom-radius p-8 hover:bg-primary hover:text-white cursor-pointer transition-all duration-1000 ease-in-out'>
                    <div className='mb-3'>
                        <RiMailSendFill className='text-4xl '></RiMailSendFill>
                    </div>
                    <h1 className='text-2xl font-bold py-2'>Work</h1>
                    <p><span className='font-semibold'>Email:</span> dev.shakerahamed@gmail.com</p>
                    <p><span className='font-semibold'>Instagram:</span> @shakerahamedtasfi</p>
                </div>
            </div>
            <div className='bg-white custom-shadow md:w-[80%] mx-auto mt-14 custom-radius'>
                <h1 className='md:text-3xl text-xl text-center font-bold text-primary pt-5'>Knock Me!</h1>
                <form className='flex flex-col justify-center items-center md:p-10 p-5' onSubmit={sendEmail}>
                    <input type="text" placeholder="Name" name='name' className="w-full outline-none h-14 my-3 custom-radius pl-5 text-gray-500 bg-gray-100" />
                    <input required type="email" placeholder="Email" name='user_email' className="w-full outline-none h-14 my-3 custom-radius pl-5 text-gray-500 bg-gray-100" />
                    <textarea required name='message' className="w-full outline-none h-14 my-3 custom-radius pl-5 pt-4 bg-gray-100 text-gray-500" placeholder="Message"></textarea>
                    <div className='flex flex-col justify-between items-center'> 
                    <button className='flex justify-around items-center bg-primary text-white md:px-10 px-5 py-2 md:py-3 mt-2 md:text-lg text-md rounded-full font-semibold hover:border-2 hover:border-primary hover:bg-white hover:text-black transition-all duration-1000 ease-in-out'><span>Send</span> <IoSend className='ml-3'></IoSend> </button>
                    <p className='text-sm mt-3 text-center'>* I promise the confidentiality of your personal information</p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactMe;