//import logo from './images/logo.svg';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Studentenliste from './pages/Studentenliste'; // Import der neuen Seite
import Homepage from './pages/Homepage1.js';
import StudentenlisteEdit from './pages/Studentenliste-edit';
import Add from './pages/add';
import Teams from './pages/teams.js'; // Import der neuen Seite
import Team1 from './pages/team1.js';
import Team2 from './pages/team2.js';
import Team3 from './pages/team3.js';
import Team4 from './pages/team4.js';
import Team5 from './pages/team5.js';
import Team6 from './pages/team6.js';
import Sidebar from './pages/Sidebar.js';
import Profile from './pages/profile.js';


function App() {
  return (
    <div className="App">
      <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="/Homepage" element={<Homepage />} />
          <Route path="/Studentenliste" element={<Studentenliste />} />
          <Route path="/Studentenliste-edit" element={<StudentenlisteEdit />} />
          <Route path="/add" element={<Add />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/team1" element={<Team1 />} />
          <Route path="/team2" element={<Team2 />} />
          <Route path="/team3" element={<Team3 />} />
          <Route path="/team4" element={<Team4 />} />
          <Route path="/team5" element={<Team5 />} />
          <Route path="/team6" element={<Team6 />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        
        </BrowserRouter>
     
    </div>
    
  );
}

export default App;
