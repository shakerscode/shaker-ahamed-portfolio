import React from 'react';
import { FaLinkedin } from 'react-icons/fa'
import { FaFacebookSquare } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'

const UserInfo = () => {
    return (
        <div className='my-profile'>
            <div className='flex justify-center items-center p-10'>
                <div class="avatar online ">
                    <div class="w-28 rounded-full">
                        <img src="https://i.ibb.co/7CFJ3K0/IMG-20220529-201025.jpg" alt='pic' />
                    </div>
                </div>
            </div>
            <div className='text-center'>
                <h2 className='text-2xl font-bold'>Shaker Ahamed</h2>
                <p className='uppercase text-sm'>I`M DREAMER</p>
                <p className='uppercase text-sm'>I`M WEB DEVELOPER</p>
                <p className='uppercase text-sm'>I`M Front-end web DEVELOPER</p>
                <p className='uppercase text-sm'>I`M MERN Stack Developer</p>
            </div>
            <div className='flex justify-center items-center my-10 border-y-2 border-dotted border-gray-400 w-[80%] mx-auto'>
                <FaLinkedin className='ml-5 h-20 w-5 hover:text-primary'></FaLinkedin>
                <FaFacebookSquare className='ml-5 h-20 w-5 hover:text-primary'></FaFacebookSquare>
                <FaGithub className='ml-5 h-20 w-5 hover:text-primary'></FaGithub>
                <FaTwitter className='ml-5 h-20 w-5 hover:text-primary'></FaTwitter>
            </div>
            <div className='flex justify-between items-center px-4'>
                <div className='text-sm font-semibold'>
                    <h4>RESIDENCE:</h4>
                    <p>CITY:</p>
                    <p>AGE:</p>
                </div>
                <div className='text-sm'>
                    <h4>Bangladesh</h4>
                    <p>Dhaka</p>
                    <p>22</p>
                </div>
            </div>
        </div>
    );
};

export default UserInfo;