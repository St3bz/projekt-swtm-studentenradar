import React from 'react';
import search from '../images/search_icon.png';
import Settings from '../images/settings.png';
import Info from '../images/Info1.png';
import User from '../images/icon_user.png'
import Calendar from '../images/calendar.png'
import Warn from '../images/warning.png'
import '../style/App.css';
const Teams = () => {
    return (
        <div className="Teams">
            <header className="Homepage-header">    
            <div className='headerData'>
                <img src={Info} className="Info" alt="info" />
                <img src={Settings} className="Settings" alt="settings" />
            </div>
            </header>
            <div className="title">
                <b>Teams</b>
            </div>
            <div className="search-bar">
                <img src={search} className="search-icon" alt="search" />
            </div>
            <div className="team-field">
                <div className="team">
                    <a href="team1">
                        <div className="group">
                            <div className='groupName'>
                                <b>Minispiel-Portal</b>
                            </div>
                        </div>
                        <div className="member">
                        </div>
                        <div className="Information">
                            <div><img src={User} className="icon_teams" alt="user" />   Sandra Wickner </div>
                            <div><img src={Calendar} className="icon_teams" alt="calendar" />   Kein Zeitraum </div>
                            <div><img src={Warn} className="icon_teams" alt="warn" />   Keine Auswahl</div>
                        </div> 
                    </a>
                </div>
                <div className="team">
                    <a href="team2">
                        <div className="group">
                            <div className='groupName'>
                                <b>Medizinisches Forschungsprojekt</b>
                            </div>
                        </div>
                        <div className="member">
                        </div>
                        <div className="Information">
                            <div><img src={User} className="icon_teams" alt="user" />   Sandra Wickner </div>
                            <div><img src={Calendar} className="icon_teams" alt="calendar" />   Kein Zeitraum </div>
                            <div><img src={Warn} className="icon_teams" alt="warn" />   Keine Auswahl</div>
                        </div> 
                    </a>
                </div>
                <div className="team">
                    <a href="team3">
                        <div className="group">
                            <div className='groupName'>
                                <b>Minispiel-Portal</b>
                            </div>
                        </div>
                        <div className="member">
                        </div>
                        <div className="Information">
                            <div><img src={User} className="icon_teams" alt="user" />   Michael Watzko </div>
                            <div><img src={Calendar} className="icon_teams" alt="calendar" />   Kein Zeitraum </div>
                            <div><img src={Warn} className="icon_teams" alt="warn" />   Keine Auswahl</div>
                        </div> 
                    </a> 
                </div>
                <div className="team">
                    <a href="team4">
                        <div className="group">
                            <div className='groupName'>                         
                                <b>Forschungsprojekt Verkehrmessung</b>
                            </div>
                        </div>
                        <div className="member">
                        </div>
                        <div className="Information">
                            <div><img src={User} className="icon_teams" alt="user" />   Michael Watzko </div>
                            <div><img src={Calendar} className="icon_teams" alt="calendar" />   Kein Zeitraum </div>
                            <div><img src={Warn} className="icon_teams" alt="warn" />   Keine Auswahl</div>
                        </div> 
                    </a>
                </div>
                <div className="team">
                    <a href="team5">
                        <div className="group">
                            <div className='groupName'>   
                                <b>Kubernetes i.d. Infrastrukturentw.</b>
                            </div>
                        </div>
                        <div className="member">
                        </div>
                        <div className="Information">
                            <div><img src={User} className="icon_teams" alt="user" />   Sandra Wickner </div>
                            <div><img src={Calendar} className="icon_teams" alt="calendar" />   Kein Zeitraum </div>
                            <div><img src={Warn} className="icon_teams" alt="warn" />   Keine Auswahl</div>
                        </div> 
                    </a>
                </div>
                <div className="team">
                    <a href="team6">
                        <div className="group">
                            <div className='groupName'>   
                                <b>Web-Entwicklung Blockchain</b>
                            </div>
                        </div>
                        <div className="member">
                        </div>
                        <div className="Information">
                            <div><img src={User} className="icon_teams" alt="user" />   Ömer Haybat </div>
                            <div><img src={Calendar} className="icon_teams" alt="calendar" />   Kein Zeitraum </div>
                            <div><img src={Warn} className="icon_teams" alt="warn" />   Keine Auswahl</div>
                        </div> 
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Teams;