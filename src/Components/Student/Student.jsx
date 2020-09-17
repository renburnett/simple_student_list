import React, { useState } from 'react';
import './Student.css';
import TagForm from '../TagForm/TagForm';
import Tag from '../Tag/Tag';

const Student = ( props ) => {
  const [gradesShowing, setGradesShowing] = useState(false);
  const [newTag, setNewTag] = useState('');

  const { index, student, students, setStudents } = props;
  const { email, company, skill, firstName, lastName, grades, pic, tags, id } = student;
  const intGrades = grades.map((grade) => parseInt(grade, 10));
  const sum = intGrades.reduce((prevVal, currentVal) => prevVal + currentVal);
  const average = (sum / grades.length);

  const gradeElements = () => {
    return grades.map((grade, idx) => <p className="sub-description" key={idx}>{ `Test ${idx + 1}: ` + grade + "%"}</p>)
  }

  const renderTags = () => {
    return tags.map((tag, idx) => <Tag tag={tag} key={idx} />)
  }

  const addNewTag = (event) => {
    event.preventDefault();

    const updatedStudents = students.map((student) => {
      if (student.id === id && newTag !== '') {
        student.tags.push(newTag)
      }
      return student;
    })

    setStudents(updatedStudents);
}


  return (      
      <tr className={`student-body ${index !== 0 ? 'border-top' : ''}`}>
          <td className="image-div">
            <img src={pic} className="image" alt="profile pic"/>
          </td>
          <td className="text-div">
            <h2 className="name-heading">{ firstName + " " + lastName }</h2>
            <p className="sub-description">{ "Email: " + email }</p>
            <p className="sub-description">{ "Company: " + company }</p>
            <p className="sub-description">{ "Skill: " + skill }</p>
            <p className="sub-description">{ "Average: " + average + "%"}</p>
            {gradesShowing && gradeElements()}
            <div className="tags-container"> {gradesShowing && renderTags()} </div>
            {gradesShowing && <TagForm setNewTag={setNewTag} addNewTag={addNewTag}/>}
          </td>
          <td className="expand-btn">
            <button onClick={() => setGradesShowing(!gradesShowing)}>{ gradesShowing ? "-" : "+"}</button>
          </td>
      </tr>
  );
}

export default Student;