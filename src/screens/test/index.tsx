import React from 'react';

import { Switch, Route } from 'react-router-dom';
import { routes } from '../../utils';
import Test from './test'
//Add imports here

export default (): JSX.Element => ( 
 <Switch>
    <Route
       exact
       key='test'
       path={routes.test.root}
       component={Test}
    />
</Switch>
);
