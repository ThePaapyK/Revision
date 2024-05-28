import React from 'react';
import logo from '../assets/eff_ann.png';
import './Header.css';

export default function Header() {
  return (
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>
        Innovation at its peak
      </h1>
    </div>
  )
};
