import React from 'react';
import './CourseList.css';
import CourseListRow from './CourseListRow';
import CourseShape from './CourseShape';
import PropTypes from 'prop-types';

export default function CourseList({listCourses}) {
  return (
    <div className='area1'>	  
      <table id="CourseList">
        <thead>
          <CourseListRow textFirstCell="Available courses" isHeader={true} />
	  <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true} />
        </thead>
        <tbody>
	  { listCourses.length != 0 ? (
	    listCourses.map(course => (
	      <CourseListRow key={course.id} textFirstCell={course.name} textSecondCell={course.credit}  isHeader={false} />
	    ))
	  ) : (
	    <tr>No course available yet</tr>
	  )}
        </tbody>
      </table>
    </div>
  );
}

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape),
};

CourseList.defaultProps = {
  listCourses: [],
};
