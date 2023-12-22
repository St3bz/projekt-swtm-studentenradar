import search from '../images/search_icon.png';
import stud from '../images/shortcut-stud.png';
import team from '../images/shortcut-teams.png';
import ITLogo from '../images/IT-Designer.png';

function HomepageIt() {
  return (
    <div className="Homepage">
      <div className="greeting-text">
         <b>Willkommen It</b>
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

export default HomepageIt;
