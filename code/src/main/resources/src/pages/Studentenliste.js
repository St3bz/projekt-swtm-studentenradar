

import React from 'react';
import search from './images/search_icon.svg';
import Menu from './images/Menu.svg';
import Einstellung from './images/Einstellungen.png';
import Info from './images/Info.png';
import sort from './images/sort.png';
import selection from './images/selection.png';
import studentenlisteEdit from './Studentenliste-edit'

const Studentenliste = () => {
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
