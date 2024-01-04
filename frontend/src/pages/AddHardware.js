import 'dayjs/locale/de';
import React, { useState } from 'react';
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useParams, useNavigate } from 'react-router-dom';
import goBackBtn from '../images/backButton.png';
import { Link } from 'react-router-dom';
import HardwareIcon from '../images/Hardware_Icon.png';

const AddHardware = () => {
  const navigate = useNavigate();
	    const goBack = () => {
		navigate('/HardwareEdit', {replace: true});
	}
  const [newHardware, setNewHardware] = useState({
    article: '',
    specification: '',
  });

  const handleInputChange = (field, value) => {
    setNewHardware((prevStudent) => ({
      ...prevStudent,
      [field]: value,
    }));
  };

  const handleAddHardware = () => {
    fetch('http://localhost:8081/api/v1/hardware', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newHardware),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        navigate('/Hardware', { replace: true });
      })
      .catch((error) => {
        console.error('Error:', error);
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
            <b>Hardware hinzufügen</b>
            </div>
        <div className="table-box-add-hardware">
        <img src={HardwareIcon} className='profile-icon' alt='profile'/>
        
        <div className='table-add-data'>

          <div className="first-row">
            <div className="first-row-a">
              <p>Gerät</p>
              <input
                type="text"
                id="field-first-a"
                className="q"
                value={newHardware.article}
                onChange={(e) => handleInputChange('article', e.target.value)}
              />
            </div>
            <div className="first-row-b">
              <p>Spezifikation</p>
              <input
                type="text"
                id="field-first-b"
                className="q"
                value={newHardware.specification}
                onChange={(e) => handleInputChange('specification', e.target.value)}
              />
            </div>
          </div>

        
          <div className="add-button">
            <div className='adding'>
              <b onClick={handleAddHardware}>Hinzufügen</b>
            </div>
          </div>
        </div>
      </div>
      </div>
     );
}
 
export default AddHardware;