import { useNavigate, useLocation, Routes, Route} from "react-router-dom";
import Keycloak from "keycloak-js";
import React, { useEffect } from 'react';
import Sidebar from "./pages/Sidebar.js";
import Navbar from './pages/Navbar';
import Profile from "./pages/Profile.js";
import AddStudent from './pages/AddStudent'
import Hardware from './pages/Hardware'
import HardwareEdit from './pages/HardwareEdit'
import StudentsEdit from './pages/StudentsEdit';
import Students from './pages/Students.js';
import Home from './pages/Home';
import Log from './images/logout.png';
import Teams from './pages/Teams.js';
import Team from './pages/Team.js';
import AddTime from './pages/TimeMgmt.js';
import AddHardware from './pages/AddHardware.js';
import Time from './pages/TimeMgmtView.js';

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
    } 
    else {
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
      <Sidebar pageWrapId={"page-wrap"} outerContainerId={"outer-container"}>
        <div className='LogOut'>
          <button onClick={handleLogout}>
            <img src={Log} className='logoutIcon' alt='logout'/>
          </button>
        </div> 
      </Sidebar>
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
          <Route path="/AddHardware" element={<AddHardware />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/teams/:id" element={<Team />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="time/:id/addtime" element={<AddTime />} />
          <Route path="time/:id" element={<Time />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
