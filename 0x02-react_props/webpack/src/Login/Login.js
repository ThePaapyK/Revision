import React from 'react';
import './Login.css';
export default function Login() {
  return (
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
  )
};
