import React, {useState, useEffect} from 'react';
import sort from '../images/sort.png';
import plus from '../images/plus.png';
import deletion from '../images/delete.png';
import checkbox from '../images/checkbox.png';
import Searchbar from './Searchbar';
import { useParams, useNavigate } from 'react-router-dom';
import goBackBtn from '../images/backButton.png';
import { Link } from 'react-router-dom';

const HardwareEdit = () => {
  const [selectedIds, setSelectedIds] = useState([]);
  const [hardware, setHardware] = useState([])

  const navigate = useNavigate();
	    const goBack = () => {
		navigate('/HardwareEdit', {replace: true});
	}
    
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
    const toggleCheckbox = (id) => {
    setSelectedIds(prevSelectedIds => {
      if (prevSelectedIds.includes(id)) {
       
        return prevSelectedIds.filter(selectedId => selectedId !== id);
      } else {
        return [...prevSelectedIds, id];
      }
    });
  };

  const handleDeleteSelected = () => {
    selectedIds.forEach((selectedIds) => {
    fetch(`http://localhost:8081/api/v1/hardware/${selectedIds}`, {
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
            <div className='goBackButton'>
                        <button onClick={goBack}>
                            <img src={goBackBtn} className="goBack" alt="goBack" />
                        </button>
                    </div>
            <b>Hardware</b>
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
        <div className="table-box">
        <table className="table">
          <thead>
                <tr>
                  <th>Gerät</th>
                  <th>Spezifikation</th>
                  <th>
                    <input
                      type="checkbox"
                      id='checkAll'
                      className='checkBox'
                      onChange={() => {
                        // Hier wird der Zustand aller Checkboxen aktualisiert
                        if (selectedIds.length === hardware.length) {
                          setSelectedIds([]);
                        } else {
                          setSelectedIds(hardware.map(hardware => hardware.id));
                        }
                      }}
                    />
                  </th>
                </tr>
              </thead>
              <tbody>
                {hardware.map((hardware) => (
                  <tr key={hardware.id}>
                    <td>{hardware.article}</td>
                    <td>{hardware.specifications}</td>
                    <td>
                      <input
                        type="checkbox"
                        id={`checkBox_${hardware.id}`}
                        className='checkBox'
                        checked={selectedIds.includes(hardware.id)}
                        onChange={() => toggleCheckbox(hardware.id)}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
        </table>
      </div>
      </div>
      </div>
     );
}


export default HardwareEdit;