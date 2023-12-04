//import logo from './images/logo.svg';

import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import Keycloak from "keycloak-js";
import { useEffect } from 'react';



import Studentenliste from './pages/Studentenliste'; // Import der neuen Seite
import HomepageAdmin from './pages/Homepage1.js';
import HomepageIt from './pages/Homepage2.js';
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

const keycloak = new Keycloak({
  url: "http://localhost:8080",
  realm: "Studentenradar",
  clientId: "Studentenradar-Client",
});

const authenticated = await keycloak.init({
  onLoad: "login-required",
  checkLoginIframe: true,
});

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!authenticated) {
      keycloak.login();
    } else {
      let roles = "";
      if (
        keycloak.tokenParsed.resource_access["Studentenradar-Client"] != null
      ) {
        roles =
          keycloak.tokenParsed.resource_access["Studentenradar-Client"].roles;
      }
      const url = `http://localhost:8081/test/${roles}`;
      fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${keycloak.token}`,
        },
      })
        .then((response) => response.status)
        .then((data) => {
          if (data === 200) {
            navigate(`/${roles}`);
          }
        });
    }
  }, [navigate]);

  const handleLogout = () => {
    keycloak.logout({ redirectUri: "http://localhost:3000/" });
  };


  return (
    <div className="App">
      <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />

  
        <Routes>
          <Route index element={<HomepageAdmin />} />
          <Route path="/Administration" element={<HomepageAdmin />} />
          <Route path="/It" element={<HomepageIt />} />
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
        
      <div>
        <button onClick={handleLogout}>Logout</button>
      </div>
     
    </div>
    
  );
}

export default App;
