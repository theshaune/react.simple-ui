import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';

const navItems = [
  {
    name: 'Home',
    link: '/'
  },
  {
    name: 'About',
    link: 'about'
  },
  {
    name: 'Store',
    link: 'store/cat'
  }
];

const App = () => (
  <Header logo={logo} nav={navItems} />
);

export default App;
