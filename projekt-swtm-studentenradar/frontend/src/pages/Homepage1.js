import search from '../images/search_icon.png';
import Settings from '../images/settings.png';
import Info from '../images/Info1.png';
import stud from '../images/shortcut-stud.png';
import team from '../images/shortcut-teams.png';
import ITLogo from '../images/IT-Designer.png';
import '../style/App.css';

function HomepageAdmin() {
  return (
    <div className="Homepage">
      <header className="Homepage-header">    
        {/* <img src={Menu} className="Menu" alt="menu" />   */}
        <div className='headerData'>
          <img src={Info} className="Info" alt="info" />
          <img src={Settings} className="Settings" alt="settings" />
        </div>
      </header>
      <div className="greeting-text">
         <b>Willkommen Verwaltung</b>
      </div>
      <div className="search-bar">
        <img src={search} className="search-icon" alt="search" />
      </div>
      <div className="box-field">
        <div className="box1">
          <div><a href="studentenliste"><img src={stud} className="Student" alt="student" />Studenten</a></div>
        </div>
        <div className="box2">
          <div><a href="teams"><img src={team} className="Team" alt="team" />Teams</a></div>
        </div>
        <div className="box3">
          <div><a href="https://it-designers-gruppe.de/" target="_blank"><img src={ITLogo} className="Logo" alt="logo" />Website</a></div>
        </div>
      </div>
    </div>
  );
}

export default HomepageAdmin;
