import React from 'react';
import './Student.css';

const Student = ({student}) => {
  const {email, company, skill, firstName, lastName, grades, pic} = student;
  const intGrades = grades.map((grade) => parseInt(grade, 10));
  const sum = intGrades.reduce((prevVal, currentVal) => prevVal + currentVal);
  const avg = (sum / grades.length);

  return (
    <div className="student-body">
        <div className="image-div">
          <img src={pic} className="image" alt="profile pic"/>
        </div>
        <div className="text-div">
          <h3>{firstName + " " + lastName}</h3>
          <p>{email}</p>
          <p>{avg}</p>
        </div>
    </div>
  );
}

export default Student;