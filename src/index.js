import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './routes';

const Root = () => <Router><Routes /></Router>;

ReactDOM.render(<Root />, document.getElementById('root'));
