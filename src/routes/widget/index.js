import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import list from './list';
import view from './view';
import add from './add';

export default ({ match }) => (
    <Switch>
        <Redirect exact from={`${match.url}/`} to={`${match.url}/list`} />
        <Route path={`${match.url}/list`} component={list} />
        <Route path={`${match.url}/view/:widgetId`} component={view} />
        <Route path={`${match.url}/add`} component={add} />
        <Redirect to="/error" />
    </Switch>
);