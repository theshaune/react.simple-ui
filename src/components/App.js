import React from 'react';
import shortid from 'shortid';
import logo from '../assets/logo.svg';
import '../assets/app.css';
// import Header from './Header';
import Header from '../containers/Header';

const navItems = [
  {
    id: shortid.generate(),
    name: 'Home',
    link: '/'
  },
  {
    id: shortid.generate(),
    name: 'About',
    link: '/about'
  },
  {
    id: shortid.generate(),
    name: 'Store',
    link: '/store/cat'
  }
];

const App = () => <Header logo={logo} nav={navItems} />;

export default App;
