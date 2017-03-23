import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Routes from './Routes';
import allReducers from './reducers';

const store = createStore(allReducers);

const Root = () => (
  <Provider store={store}>
    <Router>
      <Routes />
    </Router>
  </Provider>
);

ReactDOM.render(<Root />, document.getElementById('root'));

export default Root;
