import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from './Components/Home';
import Halo from './Components/Halo';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/halo" component={Halo}/>
        </Switch>
    </BrowserRouter>
);

export default Routes;