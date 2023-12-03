import Menu from './images/Menu.svg';
import Einstellung from './images/Einstellungen.png';
import Info from './images/Info.png';
import Profile from './images/profile.png';
import './App.css';



const addStudent = () => {
    return (
      <div className="addStudent">
      <header className="App-header">    
      <img src={Menu} className="Menu" alt="logo" />  
      <img src={Info} className="Info" alt="logo" />
  
      <img src={Einstellung} className="Einstellung" alt="logo" />
      </header>

      <div className="Headline">
        <p>Student hinzufügen</p>  
      </div>

      <div className="table-box-add">
         <img src={Profile} className="profile-icon" alt="logo" />
      <div className="first-row">
        <div className="first-row-a">
        <p>Name</p>
         <div className="field-first-a"></div>
        </div>
        <div className="first-row-b">
        <p>Universität/Hochschule</p>
         <div className="field-first-b"></div>
        </div>
      </div>

      <div className="second-row">
        <div className="second-row-a">
        <p>Vorname</p>
         <div className="field-second-a"></div>
        </div>
        <div className="second-row-b">
        <p>Studiengang</p>
         <div className="field-second-b"></div>
        </div>
      </div>

      <div className="third-row">
        <div className="third-row-a">
        <p>Zeitraum</p>
        <div className="field-third-a"></div>
        <div className="field-third-b"></div>
        </div>
        <div className="third-row-b">
        <p>Semester</p>
         <div className="field-third-c"></div>
        </div>
      </div>

      <div className="third-row">
        <div className="fourth-row-a">
        <p>Vertragsstatus</p>
        <div className="field-fourth-a"></div>
        </div>
        <div className="fourth-row-b">
        <p>Aktueller Notenschnitt</p>
         <div className="field-fourth-c"></div>
        </div>
        </div>

        <div className="third-row">
        <div className="fifth-row-a">
        <p>Status</p></div>
        <div className="field-fifth-a"></div>
        </div>
      
      

        <div className="add-button">
        <p>Hinzufügen</p>
        </div>
      </div>



      </div>
      );
    };
    
    export default addStudent;