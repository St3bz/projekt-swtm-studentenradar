import search from './images/search_icon.svg';
import Menu from './images/Menu.svg';
import Einstellung from './images/Einstellungen.png';
import Info from './images/Info.png';
import './App.css';

function Homepage() {
  return (
    <div className="Homepage">
      
      <header className="App-header">    
      <img src={Menu} className="Menu" alt="logo" />  
      <img src={Info} className="Info" alt="logo" />
  
      <img src={Einstellung} className="Einstellung" alt="logo" />
      </header>
      <div className="greeting-text">
         <b>Willkommen Max Mustermann</b>
      </div>
      <div className="search-bar">
         <img src={search} className="search-icon" alt="logo" />
      </div>
      <div className="box-field">
        
      
         <div className="box1">
         </div>
        <div className="box2">
         </div>
         <div className="box3">
         </div>
      
      </div>

    </div>
    
  );
}

export default Homepage;
