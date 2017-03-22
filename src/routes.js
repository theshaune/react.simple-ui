import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from './App';

const routes = () => (
  <div>
    <Route path="/" component={App} />
    <Switch>
      <Route
        path="/store/:slug?"
        render={({ match, location }) => <div>Store {match.params.slug}</div>}
      />
      <Route
        path="/blog/:slug?"
        render={({ match, location }) => <div>Store {match.params.slug}</div>}
      />
      <Route path="/about" component={() => <div>About</div>} />
    </Switch>
  </div>
);

export default routes;
