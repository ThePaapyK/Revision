import React from 'react';
import logo from '../assets/eff_ann.png';
import './App.css';
import { getFullYear, getFooterCopy } from '../utils/utils';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Innovation at its peak
        </h1>
      </div>
      <div className="App-body">
	<p>
	  Login to access full dashboard
	</p>
	  <label htmlFor="email">Email:</label>
	  <input type="email" id="email" placeholder="Enter your email" />
	  <label htmlFor="password">Password:</label>
	  <input type="password" id="password" placeholder="Enter your password" />
	  <button className="OK">OK</button>
      </div>
      <div className="App-footer">
	<p>
	  Copyright {getFullYear()} - {getFooterCopy(true)}
	</p>
      </div>
    </div>
  );
}

export default App;
