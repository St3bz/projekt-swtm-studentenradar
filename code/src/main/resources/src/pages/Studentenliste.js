

import React from 'react';
import search from '../images/search_icon.png';
import Settings from '../images/settings.png';
import Info from '../images/Info1.png';
import sort from '../images/sort.png';
import selection from '../images/selection.png';
import '../style/App.css';
/* import StudentenlisteEdit from './Studentenliste-edit' */

const Studentenliste = () => {
  return (
    <div className="Studentenliste">
      <header className="Homepage-header">    
        <div className='headerData'>
          <img src={Info} className="Info" alt="info" />
          <img src={Settings} className="Settings" alt="settings" />
        </div>
      </header>
      <div className="title">
        <b>Studenten</b>
      </div>
      <div className="search-bar">
        <img src={search} className="search-icon" alt="search" />
      </div>
      <div className="auswahl">
        <img src={sort} className="sort" alt="logo" />  
        <a href="Studentenliste-edit">
        <img src={selection} className="selection" alt="logo" />
        </a>
      </div>
      <div className="table-box">
        <table className="table">
          <tr>
            <th>Name</th>
            <th>Vorname</th>
            <th>Projekt</th>
          </tr>
          <tr>
            <td>Michl</td>
            <td>Nico</td>
            <td>Projekt A</td>
          </tr>
          <tr>
            <td>Rainer</td>
            <td>Zufall</td>
            <td>Projekt B</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Studentenliste;
