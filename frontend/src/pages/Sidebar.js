import React, { useEffect } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import { slide as Menu } from 'react-burger-menu';
import '../style/Sidebar.css';
import Log from '../images/logout.png';
import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
  url: "http://localhost:8080",
  realm: "Studentenradar",
  clientId: "Studentenradar-Client",
});
const handleLogout = () => {
  keycloak.logout({ redirectUri: "http://localhost:3000/" });
};

const authenticated = await keycloak.init({
  onLoad: "login-required",
  checkLoginIframe: true
});

export default props => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    console.log("Hass")
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
          }); 
      } 
    }, [navigate, location]);

  return (
    <Menu>
      <a className="menu-item" href="/">
        Home
      </a>
      <a className="menu-item" href="/studentenliste">
        Studenten
      </a>
      <a className="menu-item" href="/teams">
        Teams
      </a>
      <div className='LogOut'>
        <button onClick={handleLogout}>
          <img src={Log} className='logoutIcon' alt='logout'/>
        </button>
      </div>
    </Menu>
  );
};
