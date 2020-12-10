import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SingIn from '../pages/SingIn/index';
// import Repository from '../pages/Repository/index';
// Switch vai garantir que apenas uma rota seja visivel
const Routes: React.FC = () => (
    <Switch>
        <Route path="/" exact component={SingIn} />
    </Switch>
);

export default Routes;
