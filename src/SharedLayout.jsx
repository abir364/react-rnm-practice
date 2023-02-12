import React from 'react';
import { Outlet } from "react-router-dom";
import { Link } from 'react-router-dom';

import './App.css';

const SharedLayout = () => {
    return (
        <div className='shared'>
            <Link to="/"><h1>rNm</h1></Link>
            <Outlet />
        </div>
    );
}

export default SharedLayout;