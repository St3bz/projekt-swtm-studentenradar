import React from 'react';
import search from './images/search_icon.svg';
import Menu from './images/Menu.svg';
import Einstellung from './images/Einstellungen.png';
import Info from './images/Info.png';
import sort from './images/sort.png';
import deletion from './images/delete.png';
import plus from './images/plus.png';
import checkbox from './images/checkbox.png';


const StudentenlisteEdit = () => {
  return (
    <div className="Studentenliste">
      <header className="App-header">    
      <img src={Menu} className="Menu" alt="logo" />  
      <img src={Info} className="Info" alt="logo" />
  
      <img src={Einstellung} className="Einstellung" alt="logo" />
      </header>
      <div className="top">
      <div className="Headline">
        <p>Studenten</p>
        
      </div>
      <div className="search-bar2">
         <img src={search} className="search-icon" alt="logo" /></div>
      </div>
      <div className="auswahl">
      <img src={sort} className="sort" alt="logo" />  
      <a href="add">
      <img src={plus} className="plus" alt="logo" />
      </a>
      <img src={deletion} className="deletion" alt="logo" />
      </div>
      <div className="table-box">
      <table className="table">
  <tr>
    <th>Name</th>
    <th>Vorname</th>
    <th>Projekt</th>
    <th><img src={checkbox} className="checkbox" alt="logo" /></th>
  </tr>
  <tr>
    <td>Michl</td>
    <td>Nico</td>
    <td>Projekt A</td>
    <td><img src={checkbox} className="checkbox" alt="logo" /></td>
  </tr>
  <tr>
    <td>Rainer</td>
    <td>Zufall</td>
    <td>Projekt B</td>
    <td><img src={checkbox} className="checkbox" alt="logo" /></td>
  </tr>
</table>
      </div>
    </div>
  );
};

export default StudentenlisteEdit;
