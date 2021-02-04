import React from 'react';
// import { Switch, Route } from 'react-router-dom';

import GlobalStyle from '../styles/global';
import SignIn from '../pages/SingIn/index';
import AppProvider from '../hooks';

// import SingUp from '../pages/SingUp/index';
// import Repository from '../pages/Repository/index';
// Switch vai garantir que apenas uma rota seja visivel

const Routes: React.FC = () => (
    <>
        <AppProvider>
            <SignIn />
        </AppProvider>

        <GlobalStyle />
    </>
);

export default Routes;
