import React, { useState } from 'react';
import { IoSend } from 'react-icons/io5';
import {CgMenuRound } from 'react-icons/cg';
import {TiDeleteOutline } from 'react-icons/ti';

const Navbar = () => {
    const [open, setOpen] = useState(false)
    console.log(open);
    const handleOpen = () =>{
        setOpen(!open)
    }
    return (
        <div className='flex justify-between items-center md:px-12 px-5 py-4  h-20 rounded-xl w-[98%] mx-auto custom-shadow z-50 sticky top-0 w-sticky bg-white'>
            <div>
                <h1 className='text-xl md:text-3xl font-bold'>Shaker <span className='text-primary'>A.</span></h1>
            </div>
            {
                open && <nav className='p-12 block md:hidden bg-white absolute left-0 top-0 right-0'>
                    <div className='flex justify-end  text-red-500 '>
                        <TiDeleteOutline onClick={() => setOpen(false)}  className='text-5xl'></TiDeleteOutline>
                    </div>
                    <ul className='  text-center  text-md font-semibold '>
                        <li className='ml-7 py-2'><a href='/'>Home</a></li>
                        <li className='ml-7 py-2'><a href='#about'>About</a></li>
                        <li className='ml-7 py-2'><a href='#services'>Services</a></li>
                        <li className='ml-7 py-2'><a href='#skills'>Skills</a></li>
                        <li className='ml-7 py-2'><a href='#projects'>Projects</a></li>
                        <li className='ml-7 py-2'><a href='#contact'>Contact Me</a></li>
                    </ul>
                    <label data-toggle-theme="light, dark" class=" swap swap-rotate ml-[9rem]">

                    <input type="checkbox" />


                    <svg class="swap-on fill-current w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>


                    <svg class="swap-off fill-current w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                </label>
                <a className=' md:ml-0' href="#contact">
                    <button className='flex justify-around items-center bg-primary text-white ml-[6rem] mt-2 px-4 py-2 text-sm  rounded-full font-semibold hover:border-2 hover:border-primary hover:bg-white hover:text-black transition-all duration-1000 ease-in-out '>Contact Me<IoSend className='md:ml-3 ml-2'></IoSend>
                    </button>
                </a>
                </nav>
            }
            <nav>
                <ul className='hidden md:flex md:justify-center md:items-center text-md font-semibold'>
                    <li className='ml-7'><a href='/'>Home</a></li>
                    <li className='ml-7'><a href='#about'>About</a></li>
                    <li className='ml-7'><a href='#services'>Services</a></li>
                    <li className='ml-7'><a href='#skills'>Skills</a></li>
                    <li className='ml-7'><a href='#projects'>Projects</a></li>
                    <li className='ml-7'><a href='#contact'>Contact Me</a></li>
                </ul>
            </nav>
            <div className='flex justify-center items-center'>
                <a href="#contact">
                    <button className='hidden md:flex justify-around items-center bg-primary text-white md:px-10 md:py-2 px-4 py-2 text-sm md:text-md rounded-full font-semibold hover:border-2 hover:border-primary hover:bg-white hover:text-black transition-all duration-1000 ease-in-out '>Contact Me<IoSend className='md:ml-3 ml-2'></IoSend>
                    </button>
                </a>
                <CgMenuRound onClick={() => setOpen(!open)} className='text-4xl ml-4 text-primary md:hidden block'></CgMenuRound>
                <label data-toggle-theme="light, dark" class="hidden md:swap md:swap-rotate md:ml-5">

                    <input type="checkbox" />


                    <svg class="swap-on fill-current w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>


                    <svg class="swap-off fill-current w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                </label>
            </div>
        </div>
    );
};

export default Navbar;