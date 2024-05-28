import React from 'react';
import Notifications from '../Notifications/Notifications';
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import PropTypes from 'prop-types';
import CourseList from '../CourseList/CourseList';

const listCourses = [
  { id: 1, name: 'ES6', credit: 60 },
  { id: 2, name: 'Webpack', credit: 20 },
  { id: 3, name: 'React', credit: 40 },
];

function App({isLoggedIn}) {
  return (
    <React.Fragment>
      <Notifications />
      <div className="App">
	<Header />
	<>
	{ isLoggedIn ? <Login /> : <CourseList listCourses={listCourses} /> }
	</>
	<Footer />
      </div>
    </React.Fragment>
  );
}

App.defaultProps = {
  isLoggedIn: false,
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

export default App;
