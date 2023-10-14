import React from 'react';
// import NavigationPage from '../../pages/shared/NavigationPage/NavigationPage';
import { Outlet } from 'react-router-dom';

const LogInLayout = () => {
    return (
        <div>
             <Outlet></Outlet>
        </div>
    );
};

export default LogInLayout;