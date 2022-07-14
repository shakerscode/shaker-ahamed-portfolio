import React from 'react';
import { FaLinkedin } from 'react-icons/fa'
import { FaFacebookSquare } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import Typewriter from 'typewriter-effect';


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
                <Typewriter
                    options={{
                        strings: ['I`m Dreamer', 'I`m Web Developer', 'I`m Front-end Web Developer', 'I`m MERN Stack Developer'],
                        autoStart: true,
                        loop: true,
                    }}
                />
            </div>
            <div className='flex justify-center items-center my-10 border-y-2 border-dotted border-gray-400 w-[80%] mx-auto'>
                <a target={'blank'} href="https://www.linkedin.com/in/shaker-ahamed/"><FaLinkedin className='ml-5 h-20 w-5 hover:text-primary'></FaLinkedin></a>
                <a target={'blank'} href="https://www.facebook.com/mdshaker.ahamed.1"><FaFacebookSquare className='ml-5 h-20 w-5 hover:text-primary'></FaFacebookSquare></a>
                <a target={'blank'} href="https://github.com/shakerscode"><FaGithub className='ml-5 h-20 w-5 hover:text-primary'></FaGithub></a>
                <a target={'blank'} href="https://twitter.com/ShakerAhamed7"><FaTwitter className='ml-5 h-20 w-5 hover:text-primary'></FaTwitter></a>
            </div>
            <div className='flex justify-between items-center px-4'>
                <div className='text-sm font-semibold'>
                    <h4>Residence:</h4>
                    <p>City:</p>
                    <p>Age:</p>
                    <p>Education:</p>
                    <p>Phone:</p>
                    <p>Email:</p>
                </div>
                <div className='text-sm text-right'>
                    <h4>Bangladesh</h4>
                    <p>Dhaka</p>
                    <p>22</p>
                    <p>B.Sc. (Hons.) in Zoology</p>
                    <p>(+880) 1766339710</p>
                    <p>dev.shakerahamed@gmail.com</p>
                </div>
            </div>
        </div>
    );
};

export default UserInfo;