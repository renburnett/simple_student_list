import React, { useState, useEffect } from 'react';
import './Classroom.css';
import Student from '../Student/Student';
import axios from 'axios';

const Classroom = () => {
  const [students, setStudents] = useState([]);
  
  useEffect(() => {
    const fetchStudents = async () => {
      const response = await axios.get('https://www.hatchways.io/api/assessment/students');
      setStudents(response.data.students);
    }

    fetchStudents();
  }, [])

  const renderStudents = (students) => {
    return students.map((student, idx) => {
      return <Student student={student} key={idx}/>
    })
  }

  return (
    <div className="classroom-body">
        {renderStudents(students)}
    </div>
  );
}

export default Classroom;