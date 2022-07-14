import React from 'react';
import { IoCloseCircleOutline } from 'react-icons/io5'
import CustomBtn from '../../../../../SharedComponent/CustomBtn/CustomBtn';
import UsedTech from './UsedTech/UsedTech';

const Modal = ({ setModal, modal }) => {
    const {tittle, desc, Image, usedTech, keyPart, gitClient, gitServer, liveLink} = modal;
    return (
        <div>
            <input type="checkbox" id="my-modal-6" class="modal-toggle" />

            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box relative">
                    <IoCloseCircleOutline onClick={() => setModal(false)} className='text-primary text-4xl absolute right-8 cursor-pointer hover:text-red-500'></IoCloseCircleOutline>
                    <div className='mt-14'>
                        <img className='mx-auto p-2 custom-radius shadow' src={Image} alt="" />
                    <h3 class="font-bold text-xl mt-5">{tittle}</h3>
                    <p class="py-4 text-lg">{desc}</p>
                    <h4 className='text-lg font-semibold'>Key Parts:</h4>
                    <p className='pb-3'>
                        {keyPart}
                    </p>
                    <h2 className='text-lg font-semibold pb-3'>Used Technology: </h2>
                    <div className='grid grid-cols-3 gap-2'>
                       
                        {
                            usedTech.map((uT, index) => <UsedTech key={index} tech={uT}></UsedTech>)
                        }
                    </div>
                    </div>
                    <div class="grid grid-cols-2 gap-5 w-[95%] mx-auto mt-10">
                        <CustomBtn><a href={liveLink}>Live Site</a></CustomBtn> 
                        <CustomBtn><a href={gitClient}>GitHub Client</a></CustomBtn> 
                        <CustomBtn><a href={gitServer}>GitHub Server</a></CustomBtn> 
                        <button onClick={() => setModal(false)} for="my-modal-6" className='px-3 py-2 close-btn rounded-full ml-2 font-semibold '>Close</button>   
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;