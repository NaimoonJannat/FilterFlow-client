import React from 'react';
import Header from './components/Shared/Header';
import Footer from './components/Shared/Footer';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div>
            <Header></Header>
            <div className='w-full md:w-11/12 lg:w-4/5 mx-auto'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;