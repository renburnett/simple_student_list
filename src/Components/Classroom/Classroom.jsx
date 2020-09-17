import React, { useState, useEffect } from 'react';
import './Classroom.css';
import Student from '../Student/Student';
import SearchBar from '../SearchBar/SearchBar';
import TagSearchBar from '../TagSearchBar/TagSearchBar';
import axios from 'axios';

const Classroom = () => {
  const [students, setStudents] = useState([]);
  const [studentsCopy, setStudentsCopy] = useState([]);
  
  useEffect(() => {
    const fetchStudents = async () => {
      const response = await axios.get('https://www.hatchways.io/api/assessment/students');
      const studentsArr = response.data.students;
      
      for (const st of studentsArr) {
        st.tags = ["cool"];
      }

      setStudents(studentsArr);
      setStudentsCopy(studentsArr);
    }

    fetchStudents();
  }, [])

  const renderStudents = () => {
    return studentsCopy.map((student, index) => {
      return <Student student={student} students={students} setStudents={setStudents} index={index} key={index}/>
    })
  }

  const filterByTag = (event) => {
    event.preventDefault();

    const { value } = event.target;
    const userString = value.toUpperCase();
    const allTags = [];

    students.forEach((student) => {
      const tags = student.tags;
      tags.forEach((tag) => {
        allTags.push([student, tag]);
      })
    })

    if (allTags.length === 0) {
      return;
    }

    const filteredStudents = allTags.filter((tag) => {
      let i = 0;
      while (i < userString.length) {
        if (userString.charAt(i) !== tag[1].toUpperCase().charAt(i)) {
          return false;
        }
        i++;
      }
      return true;
    });

    const multipleStudents = filteredStudents.map((student) => student[0]);
    //remove dupe students
    const studentSet = new Set(multipleStudents);
    setStudentsCopy(Array.from(studentSet))
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
      <TagSearchBar filterByTag={filterByTag}/>
      <table>
        <tbody>
          {renderStudents(students)}
        </tbody>
      </table>
    </div>
  );
}

export default Classroom;