import React from 'react';
import './Student.css';

const Student = ( props ) => {
  const { index, student } = props;
  const { email, company, skill, firstName, lastName, grades, pic } = student;
  const intGrades = grades.map((grade) => parseInt(grade, 10));
  const sum = intGrades.reduce((prevVal, currentVal) => prevVal + currentVal);
  const average = (sum / grades.length);

  return (      
      <tr className={`student-body ${index !== 0 ? 'border-top' : ''}`}>
          <td className="image-div">
            <img src={pic} className="image" alt="profile pic"/>
          </td>
          <td className="text-div">
            <h2 className="name-heading">{ firstName + " " + lastName }</h2>
            <p className="sub-description">{ email }</p>
            <p className="sub-description">{ average }</p>
          </td>
      </tr>
  );
}

export default Student;