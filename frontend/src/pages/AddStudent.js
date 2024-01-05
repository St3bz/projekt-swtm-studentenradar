import React, { useState } from 'react';
import profileIcon from '../images/profile_icon.png';
import goBackBtn from '../images/backButton.png';
import 'dayjs/locale/de';
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useNavigate } from 'react-router-dom';

const AddStudent = () => {
  const navigate = useNavigate();
  const [newStudent, setNewStudent] = useState({
    lastName: '',
    firstName: '',
    startDatum: null,
    endDatum: null,
  });

  const goBack = () => {
    navigate('/StudentsEdit', { replace: true });
  };

  const handleInputChange = (field, value) => {
    setNewStudent((prevStudent) => ({
      ...prevStudent,
      [field]: value,
    }));
  };

  
  const handleAddStudent = () => {
    fetch('http://localhost:8081/api/v1/students', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newStudent),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        navigate('/Students', { replace: true });
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
        <b>Student hinzufügen</b>
      </div>
      <div className="table-box-add">
        <img src={profileIcon} className='profile-icon' alt='profile' />

        <div className='table-add-data'>

          <div className="first-row">
            <div className="first-row-a">
              <p>Name</p>
              <input
                type="text"
                id="field-first-a"
                className="q"
                value={newStudent.name}
                onChange={(e) => handleInputChange('lastName', e.target.value)}
              />
            </div>
            <div className="first-row-b">
              <p>Universität/Hochschule</p>
              <input type="text" id="field-first-b" className="q" />
            </div>
          </div>

          <div className="second-row">
            <div className="second-row-a">
            <p>Vorname</p>
            <input
                type="text"
                id="field-first-c"
                className="q"
                value={newStudent.name}
                onChange={(e) => handleInputChange('firstName', e.target.value)}
              />
            </div>
            <div className="second-row-b">
              <p>Studiengang</p>
              <input type="text" id="field-second-b" className="q" />
            </div>
          </div>

          <div className="third-row">
            <div className="third-row-a">
              <p>Zeitraum</p>
              <div className="field-third-a">
                <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="de" >
                  <DatePicker inputFormat="DD.MM.YYYY"/>
                </LocalizationProvider>
              </div>
              <p>-</p>
              <div className="field-third-b">
                <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="de" >
                  <DatePicker inputFormat="DD.MM.YYYY"/>
                </LocalizationProvider>
              </div>
            </div>
            <div className="third-row-b">
              <p>Semester</p>
              <input
                type="text"
                id="field-third-c"
                className="q"
                value={newStudent.name}
                onChange={(e) => handleInputChange('semester', e.target.value)}
              />
            </div>
          </div>

          <div className="third-row">
            <div className="fourth-row-a">
              <p>Vertragsstatus</p>
              <div className="field-fourth-a">
              <div className="arrow-field">
                <select>
                  <option value="verlaengerung">Verlängerung</option>
                  <option value="eingestellt">Eingestellt</option>
                  <option value="aufgeloest">Aufgelöst</option>
                  <option value="offen1">Offen</option>
                  <option value="verschickt">Vertrag verschickt</option>
                  <option value="vorbereitet">Vertrag vorbereitet</option>
                </select>
              </div>

              </div>
            </div>
            <div className="fourth-row-b">
              <p>Aktueller Notenschnitt</p>
              <input type="text" id="field-fourth-c" className="q" />
            </div>
          </div>

          <div className="third-row">
            <div className="fifth-row-a">
              <p>Status</p>
            </div>
            <div className="field-fifth-a">
            <div className="arrow-field">
              <select>
                <option value="offen2">Offen</option>
                <option value="zugesagt">Zugesagt</option>
                <option value="abgesagt">Abgesagt</option>
              </select>
            </div>

            </div>
          </div>
          <div className="add-button">
            <div className='adding'>
              <b onClick={handleAddStudent}>Hinzufügen</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddStudent;