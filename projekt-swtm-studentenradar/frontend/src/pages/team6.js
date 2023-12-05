import React from 'react';
import Settings from '../images/settings.png';
import Info from '../images/Info1.png';
import User from '../images/icon_user.png';
import Calendar from '../images/calendar.png';
import goBack from '../images/backButton.png';
import Add from '../images/add.png';
import '../style/App.css';
const Team1 = () => {
    return (
        <div className="Teams">
            <header className="Homepage-header">    
            <div className='headerData'>
                <img src={Info} className="Info" alt="info" />
                <img src={Settings} className="Settings" alt="settings" />
            </div>
            </header>
            <div className='goBackButton'>
                <a href='teams'>
                    <img src={goBack} className="goBack" alt="goBack" />
                </a>
            </div>
            <div className='project-field'>
                <div className='proj-name'>
                    <div className='projName'>
                        <b>Web-Entwicklung Blockchain</b>
                    </div>
                </div>
                <div className='proj-info'>
                    <div><img src={User} className="icons-team" alt="user" /> Ömer Haybat</div>
                    <div><img src={Calendar} className="icons-team" alt="calendar" /> Kein Zeitraum</div> 
                    <div><img src={Add} className="icons-team" alt="add" /></div>
                </div>
                <div className='boxes'>
                    <div className='proj-member'>
                        <table>
                            <tr>
                                <th>Vorname</th>
                                <th>Nachname</th>
                            </tr>
                            <tr>
                                <th>...</th>
                                <th>...</th>
                            </tr>
                            <tr>
                                <th>...</th>
                                <th>...</th>
                            </tr>
                            <tr>
                                <th>...</th>
                                <th>...</th>
                            </tr>
                        </table>
                    </div>
                    <div className='proj-details'>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team1;