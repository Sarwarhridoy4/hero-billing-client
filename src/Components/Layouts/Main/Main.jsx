import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../Pages/Shared/Header/Header';
import Nav from '../../Pages/Shared/Nav/Nav';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Nav></Nav>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;