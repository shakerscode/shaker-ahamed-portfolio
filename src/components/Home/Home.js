import React from 'react';
import UserInfo from './UserInfo/UserInfo';
import UserMain from './UserMain/UserMain';

const Home = () => {
    return (
        <div className='home-bg relative'>
            <div className=' flex justify-center mt-20 absolute left-24 '> 
                <UserInfo></UserInfo>
                <UserMain ></UserMain>
            </div>
        </div>
    );
};

export default Home;