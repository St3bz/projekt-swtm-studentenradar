import React, {useState, useEffect} from 'react';
import sort from '../images/sort.png';
import selection from '../images/selection.png';
import Searchbar from './HardwareSearchbar';
import { useNavigate } from 'react-router-dom';

const Hardware = () => {

  const [hardware, setHardware] = useState([])
  const [filteredHardware, setFilteredHardware] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const fetchHardwareData = () => {
        fetch('http://localhost:8081/api/v1/hardware', {
            method: 'GET',
        })
        .then(response => {
            return response.json()
        })
        .then(data => {
            setHardware(data);
            console.log('zuweisung');
            console.log(data)
        })
    }
    useEffect(() => {
        fetchHardwareData();
        /* fetchStudentData() */
    }, [])

    const handleSearch = (searchTerm) => {
      setSearchTerm(searchTerm);

      if (searchTerm.trim() === '') {
          setFilteredHardware([]);
      return;
    }

    const filtered = hardware.filter(
      (hardware) => hardware.article.toLowerCase().includes(searchTerm.toLowerCase()));
      setFilteredHardware(filtered);
    };

    const handleSearchSuggestions = (searchTerm) => {
  
      const suggestions = hardware.filter(
      (hardware) => hardware.article.toLowerCase().includes(searchTerm.toLowerCase()));
      setFilteredHardware(suggestions);
    };

    const renderResults = () => {
      if(!searchTerm) return null;
      if (filteredHardware.length === 0) {
          return <p>No matching teams found for "{searchTerm}".</p>;
      } else {
          return (
              <div>
                  <p>Matching teams for "{searchTerm}":</p>
                  <ul>
                      {filteredHardware.map((hardware) => (
                      <li key={hardware.id} onClick={() => navigate(`/hardware/${hardware.id}`)} >
                          {hardware.article}
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
            <b>Hardware</b>
            </div>
          <Searchbar handleSearch={handleSearch} handleSuggestions={handleSearchSuggestions}/>
          {renderResults()}
        <div className="auswahl">
        <img src={sort} className="sort" alt="logo" />  
        <a href="HardwareEdit">
        <img src={selection} className="selection" alt="logo" />
        </a>
      </div>
        <div className="table-box">
        <table className="table">
          <thead>
                <tr>
                  <th>Gerät</th>
                  <th>Spezifikation</th>
                  <th>Verfügbarkeit</th>
                </tr>
              </thead>
              <tbody>
                {hardware.map((hardware) => (
                  <tr key={hardware.id}>
                    <td>{hardware.article}</td>
                    <td>{hardware.specifications}</td>
                    <td>{hardware.availability}</td>
                  </tr>
                ))}
              </tbody>
        </table>
      </div>
      </div>
     );
}
 
export default Hardware;