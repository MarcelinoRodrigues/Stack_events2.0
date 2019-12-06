import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Primary from './Components/Primary';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Primary}/>
        </Switch>
    </BrowserRouter>
);

export default Routes;