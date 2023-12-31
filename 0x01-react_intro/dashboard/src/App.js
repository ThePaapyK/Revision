import logo from './eff_ann.png';
import './App.css';
import { getFullYear, getFooterCopy } from './utils';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Innovation at its peak
        </h1>
      </header>
      <body className="App-body">
	<p>
	  Login to access full dashboard
	</p>
	  <label htmlFor="email">Email:</label>
	  <input type="email" id="email" placeholder="Enter your email" />
	  <label htmlFor="password">Password:</label>
	  <input type="password" id="password" placeholder="Enter your password" />
	  <button className="OK">OK</button>
      </body>
      <footer className="App-footer">
	<p>
	  Copyright {getFullYear()} - {getFooterCopy(true)}
	</p>
      </footer>
    </div>
  );
}

export default App;
