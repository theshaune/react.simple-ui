import React from 'react';
import shortid from 'shortid';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';


const navItems = [
  {
    id: shortid.generate(),
    name: 'Home',
    link: '/'
  },
  {
    id: shortid.generate(),
    name: 'About',
    link: 'about'
  },
  {
    id: shortid.generate(),
    name: 'Store',
    link: 'store/cat'
  }
];

const App = () => <Header logo={logo} nav={navItems} />;

export default App;
