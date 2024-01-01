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
  const [students, setStudents] = useState([]);
  const [selectedIds, setSelectedIds] = useState([]);
  
  const fetchStudentData = () => {
    fetch('http://localhost:8081/api/v1/students', {
      method: 'GET',
    })
    .then(response => response.json())
    .then(data => setStudents(data));
  }

  useEffect(() => {
    fetchStudentData();
  }, []);

  const toggleCheckbox = (id) => {
    setSelectedIds(prevSelectedIds => {
      if (prevSelectedIds.includes(id)) {
        // Wenn die ID bereits ausgewählt ist, entferne sie aus der Liste
        return prevSelectedIds.filter(selectedId => selectedId !== id);
      } else {
        // Wenn die ID nicht ausgewählt ist, füge sie zur Liste hinzu
        return [...prevSelectedIds, id];
      }
    });
  };

  const handleDeleteSelected = () => {
    selectedIds.forEach((selectedIds) => {
    fetch(`http://localhost:8081/api/v1/students/${selectedIds}`, {
      method: 'DELETE',
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      window.location.reload();
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  });
  };

  return (
    <div>
      <div className="title">
        <b>Studenten</b>
      </div>
      <Searchbar />
      <div className="auswahl">
        <img src={sort} className="sort" alt="logo" />
        <a href="add"><img src={plus} className="plus" alt="logo" /></a>
        <img
        src={deletion}
        className="deletion"
        alt="logo"
        onClick={handleDeleteSelected}
        style={{ cursor: 'pointer' }}
      />
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
                  <th>
                    <input
                      type="checkbox"
                      id='checkAll'
                      className='checkBox'
                      onChange={() => {
                        // Hier wird der Zustand aller Checkboxen aktualisiert
                        if (selectedIds.length === students.length) {
                          setSelectedIds([]);
                        } else {
                          setSelectedIds(students.map(student => student.id));
                        }
                      }}
                    />
                  </th>
                </tr>
              </thead>
              <tbody>
                {students.map((student) => (
                  <tr key={student.id}>
                    <td>{student.id}</td>
                    <td>{student.lastName}</td>
                    <td>{student.firstName}</td>
                    <td>-</td>
                    <td>
                      <input
                        type="checkbox"
                        id={`checkBox_${student.id}`}
                        className='checkBox'
                        checked={selectedIds.includes(student.id)}
                        onChange={() => toggleCheckbox(student.id)}
                      />
                    </td>
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