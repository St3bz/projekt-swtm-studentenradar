import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import '../style/Sidebar.css';

export default props => {
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
    </Menu>
  );
};