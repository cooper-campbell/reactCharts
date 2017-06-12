import React from 'react';
import { IndexRoute, Route } from 'react-router';
import App from './components/App';
import Charts from './components/pages/Charts';
import NotFoundPage from './components/pages/NotFound';

export const routes = (
    <Route onUpdate={() => window.scrollTo(0, 0)} path="/" component={App}>
        <IndexRoute component={Charts}/>
        <Route path="/test" component={Charts}/>
        <Route path="*" component={NotFoundPage}/>
    </Route>
);

export default routes;
