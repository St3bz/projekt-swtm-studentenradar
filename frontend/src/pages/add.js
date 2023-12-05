import Settings from '../images/settings.png';
import Info from '../images/Info1.png';
import profileIcon from '../images/profile_icon.png';
import timetable from '../images/timetable.png';
import arrow from '../images/arrow.png';
import '../style/App.css';

const addStudent = () => {
    return (
      <div className="addStudent">
      <header className="Homepage-header">    
        {/* <img src={Menu} className="Menu" alt="menu" />   */}
        <div className='headerData'>
          <img src={Info} className="Info" alt="info" />
          <img src={Settings} className="Settings" alt="settings" />
        </div>
      </header>

      <div className="title">
        <b>Student hinzufügen</b>  
      </div>

      <div className="table-box-add">
        <img src={profileIcon} className='profile-icon' alt='profile'/>
        
        <div className='table-add-data'>

          <div className="first-row">
            <div className="first-row-a">
              <p>Name</p>
              <div className="field-first-a">

              </div>
            </div>
            <div className="first-row-b">
              <p>Universität/Hochschule</p>
              <div className="field-first-b">

              </div>
            </div>
          </div>

          <div className="second-row">
            <div className="second-row-a">
            <p>Vorname</p>
            <div className="field-second-a">

            </div>
            </div>
            <div className="second-row-b">
              <p>Studiengang</p>
              <div className="field-second-b">

              </div>
            </div>
          </div>

          <div className="third-row">
            <div className="third-row-a">
              <p>Zeitraum</p>
              <div className="field-third-a">
                <div className="date">
                  <p>Von - </p>
                  <img src={timetable} className='timetable' alt='profile'/>
                </div>

              </div>
              <div className="field-third-b">
                <div className="date">
                  <p>Bis - </p>
                  <img src={timetable} className='timetable' alt='profile'/>

                </div>

              </div>
            </div>
            <div className="third-row-b">
              <p>Semester</p>
              <div className="field-third-c">

              </div>
            </div>
          </div>

          <div className="third-row">
            <div className="fourth-row-a">
              <p>Vertragsstatus</p>
              <div className="field-fourth-a">
              <div className="arrow-field">
              <img src={arrow} className='arrow' alt='profile'/>
              </div>

              </div>
            </div>
            <div className="fourth-row-b">
              <p>Aktueller Notenschnitt</p>
              <div className="field-fourth-c">

              </div>
            </div>
          </div>

          <div className="third-row">
            <div className="fifth-row-a">
              <p>Status</p>
            </div>
            <div className="field-fifth-a">
            <div className="arrow-field">
            <img src={arrow} className='arrow' alt='profile'/>
            </div>

            </div>
          </div>
        </div>
      
        <div className="add-button">
          <div className='adding'>
            <b>Hinzufügen</b>
          </div>
      </div>
    </div>



  </div>
  );
};

export default addStudent;