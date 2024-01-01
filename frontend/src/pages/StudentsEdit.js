import React, {useState, useEffect} from 'react';
import sort from '../images/sort.png';
import goBackBtn from '../images/backButton.png';
import plus from '../images/plus.png';
import deletion from '../images/delete.png';
import checkbox from '../images/checkbox.png';
import Searchbar from './Searchbar';
import { Link } from 'react-router-dom';
import { useParams, useNavigate } from 'react-router-dom';

const StudentsEdit = () => {
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
                <a href="add"><img src={plus} className="plus" alt="logo" /></a>
                <img src={deletion} className="deletion" alt="logo" />
            </div>
      
      {students && (
        <div>
          <div className="table-box">
            <table className="table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Vorname</th>
                  <th>Projekt</th>
                  <th><input type="checkbox" id='checkAll' className='checkBox'/></th>
                </tr>
              </thead>
              <tbody>
                {students.map((student) => (
                  <tr key={student.id}>
                    <td>{student.id}</td>
                    <td>{student.lastName}</td>
                    <td>{student.firstName}</td>
                    <td>-</td>
                    <td><input type="checkbox" id='checkBox' className='checkBox'/></td>
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

 
export default StudentsEdit;