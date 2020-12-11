import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SingUp from '../pages/SingUp/index';
// import Repository from '../pages/Repository/index';
// Switch vai garantir que apenas uma rota seja visivel
const Routes: React.FC = () => (
    <Switch>
        <Route path="/" exact component={SingUp} />
    </Switch>
);

export default Routes;
