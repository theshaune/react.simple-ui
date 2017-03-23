import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './Routes';

const Root = () => <Router><Routes /></Router>;

ReactDOM.render(<Root />, document.getElementById('root'));

export default Root;
