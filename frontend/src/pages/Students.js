import React, {useState, useEffect} from 'react';
import sort from '../images/sort.png';
import selection from '../images/selection.png';
import Searchbar from './Searchbar';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import useFetch from './useFetch';

const Students = () => {
  const { id } = useParams();
  /*const { data: students, error, isPending } = useFetch('http://localhost:8081/api/v1/students' + id);
  console.log(students);*/
  const [students, setStudents] = useState([])
  const fetchStudentData = () => {
        fetch('http://localhost:8081/api/v1/students', {
            method: 'GET',
        })
        .then(response => {
            return response.json()
        })
        .then(data => {
            setStudents(data);
            console.log('zuweisung');
            console.log(data)
        })
    }
    useEffect(() => {
        fetchStudentData();
        /* fetchStudentData() */
    }, [])

  return (
    <div>
      <div className="title">
        <b>Studenten</b>
      </div>
      <Searchbar />
      <div className="auswahl">
        <img src={sort} className="sort" alt="logo" />
        <Link to="/StudentsEdit">
          <img src={selection} className="selection" alt="logo" />
        </Link>
      </div>
      
      {students && (
        <div>
          <div className="table-box">
            <table className="table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Vorname</th>
                  <th>Projekt</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student) => (
                  <tr key={student.id}>
                    <td>{student.lastName}</td>
                    <td>{student.firstName}</td>
                    <td>-</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default Students;
