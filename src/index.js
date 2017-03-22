import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import App from './App';
import './index.css';

const Root = () => (
  <Router>
    <div>
      
      <Route path='/' exact component={App} />
      <Route path='/store/:slug?' render={({match, location})=>(<div>Store {match.params.slug}</div>)} />
      <Route path='/blog/:slug?' render={({match, location})=>(<div>Store {match.params.slug}</div>)} />
      <Route path='/about' component={()=>(<div>About</div>)} />
    </div>
  </Router>
)

ReactDOM.render(
  <Root />,
  document.getElementById('root')
);
