import React, {useState, useEffect} from 'react';
import sort from '../images/sort.png';
import selection from '../images/selection.png';
import Searchbar from './Searchbar';

const Hardware = () => {

  const [hardware, setHardware] = useState([])
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

    
    return ( 
        <div>
          <div className="title">
            <b>Hardware</b>
            </div>
          <Searchbar />
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