import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home/Home';
import Evento from './pages/Evento/Evento';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/pages/Evento/Evento.js" component={Evento} />
        </Switch>
    </BrowserRouter>
);

export default Routes;