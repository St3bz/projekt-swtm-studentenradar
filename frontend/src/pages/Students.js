import React, {useState, useEffect} from 'react';
import sort from '../images/sort.png';
import selection from '../images/selection.png';
import Searchbar from './StundentsSearchbar';
import { Link } from 'react-router-dom';
import { useParams, useNavigate } from 'react-router-dom';
import useFetch from './useFetch';

const Students = () => {
  const { id } = useParams();
  /*const { data: students, error, isPending } = useFetch('http://localhost:8081/api/v1/students' + id);
  console.log(students);*/
  const [students, setStudents] = useState([])
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

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

  const handleSearch = (searchTerm) => {
      setSearchTerm(searchTerm);

      if (searchTerm.trim() === '') {
          setFilteredStudents([]);
      return;
  }

  const filtered = students.filter(
    (student) =>
      student.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.lastName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredStudents(filtered);
  };

  const handleSearchSuggestions = (searchTerm) => {
    const suggestions = students.filter((student) =>
      student.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.lastName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredStudents(suggestions);
  };

  const renderResults = () => {
      if(!searchTerm) return null;
      if (filteredStudents.length === 0) {
          return <p>No matching teams found for "{searchTerm}".</p>;
      } else {
          return (
              <div>
                  <p>Matching teams for "{searchTerm}":</p>
                  <ul>
                      {filteredStudents.map((student) => (
                      <li key={student.id} onClick={() => navigate(`/profile/${student.id}`)} >
                          {student.firstName} {student.lastName}
                      </li>
                      ))}
                  </ul>
              </div>
          );
      }
  };

  return (
    <div>
      <div className="title">
        <b>Studenten</b>
      </div>
      <Searchbar handleSearch={handleSearch} handleSuggestions={handleSearchSuggestions}/>
      {renderResults()}
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
                    <td>
                      <Link to={`/profile/${student.id}`}>
                        {student.lastName}
                      </Link>
                    </td>
                    <td>
                      <Link to={`/profile/${student.id}`}>
                        {student.firstName}
                      </Link>
                    </td>
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
