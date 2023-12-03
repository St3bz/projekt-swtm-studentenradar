import Settings from '../images/settings.png';
import Info from '../images/Info1.png';
import profileIcon from '../images/profile_icon.png';
import '../style/App.css';



const addStudent = () => {
    return (
      <div className="addStudent">
      <header className="Homepage-header">    
        {/* <img src={Menu} className="Menu" alt="menu" />   */}
        <img src={Info} className="Info" alt="info" />
        <img src={Settings} className="Settings" alt="settings" />
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

              </div>
              <div className="field-third-b">

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

            </div>
          </div>
        </div>
      
        <div className="add-button">
        <b>Hinzufügen</b>
      </div>
    </div>



  </div>
  );
};

export default addStudent;