import { useNavigate, useLocation, BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Keycloak from "keycloak-js";
import React, { useEffect } from 'react';
/* import Studentenliste from "./pages/Studentenliste"; // Import der neuen Seite
import HomepageAdmin from "./pages/Homepage1.js";
import HomepageIt from "./pages/Homepage2.js";
import StudentenlisteEdit from "./pages/Studentenliste-edit"; */
/* import Team1 from "./pages/team1.js";
import Team2 from "./pages/team2.js";
import Team3 from "./pages/team3.js";
import Team4 from "./pages/team4.js";
import Team5 from "./pages/team5.js";
import Team6 from "./pages/team6.js"; */
import Sidebar from "./pages/Sidebar.js";
import Navbar from './pages/Navbar';
import Profile from "./pages/profile.js";
import AddStudent from './pages/AddStudent'
import Hardware from './pages/Hardware'
import HardwareEdit from './pages/HardwareEdit'
import StudentsEdit from './pages/StudentsEdit';
import Students from './pages/Students.js';
import Home from './pages/Home';
import Log from './images/logout.png';
import Team from './pages/Team.js';
import ShowTeam from './pages/ShowTeam.js';

const keycloak = new Keycloak({
  url: "http://localhost:8080",
  realm: "Studentenradar",
  clientId: "Studentenradar-Client",
  redirectUri: "http://localhost:3000"
});

const authenticated = await keycloak.init({
  onLoad: "login-required",
  checkLoginIframe: true
});

const handleLogout = () => {
  keycloak.logout({ redirectUri: "http://localhost:3000/" });
};
function App() {
  const navigate = useNavigate();
  const location = useLocation();

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
        fetch(url, {    // authorisierung vom backend
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${keycloak.token}`,
          },
        })
          .then((response) => response.status)
          .then((data) => {
            if (data === 200 && location.pathname === "/") {
              navigate(`/${roles}`);
            }
            else {
              console.log(data);
            }
          }); 
      } 
    }, [navigate, location]);


  return (
    <div className="App">
      <Sidebar pageWrapId={"page-wrap"} outerContainerId={"outer-container"}/>
      <Navbar />
      <div className="content">
        <Routes>
          <Route index element={<Home />} />
          <Route path="/Administration" element={<Home />} />
          {/* <Route path="/It" element={<HomepageIt />} /> */}
          <Route path="/Students" element={<Students />} />
          <Route path="/StudentsEdit" element={<StudentsEdit />} />
          <Route path="/HardwareEdit" element={<HardwareEdit />} />
          <Route path="/Hardware" element={<Hardware />} />
          <Route path="/add" element={<AddStudent />} />
          <Route path="/teams" element={<Team />} />
          <Route path="/teams/:id" element={<ShowTeam />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
