import React, { useState, useEffect } from 'react';
import './Classroom.css';
import Student from '../Student/Student';
import SearchBar from '../SearchBar/SearchBar';
import axios from 'axios';

const Classroom = () => {
  const [students, setStudents] = useState([]);
  const [studentsCopy, setStudentsCopy] = useState([]);
  
  useEffect(() => {
    const fetchStudents = async () => {
      const response = await axios.get('https://www.hatchways.io/api/assessment/students');
      setStudents(response.data.students);
      setStudentsCopy(response.data.students);
    }

    fetchStudents();
  }, [])

  const renderStudents = () => {
    return studentsCopy.map((student, index) => {
      return <Student student={student} index={index} key={index}/>
    })
  }

  const filterByFirstName = (event) => {
    event.preventDefault();

    const { value } = event.target;
    const userString = value.toUpperCase();

    const filteredStudents = students.filter((student) => {
        let i = 0;
        while (i < userString.length) {
          if (userString.charAt(i) !== student.firstName.toUpperCase().charAt(i)) {
            return false;
          }
          i++;
        }
        return true;
    });

    setStudentsCopy(filteredStudents);
  }

  return (
    <div className="classroom-body">
      <SearchBar filterByFirstName={filterByFirstName}/>
      <table>
        <tbody>
          {renderStudents(students)}
        </tbody>
      </table>
    </div>
  );
}

export default Classroom;