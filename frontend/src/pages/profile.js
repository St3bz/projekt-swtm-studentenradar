import React from 'react';
import profileIcon from '../images/profile_icon.png';
import time from '../images/time.png';
const profile = () => {
    return (
        <div className="Profile">
            <div className="title">
                <b>Profil</b>
            </div>
            <div className='profileInfo'>
                <img src={profileIcon} className='profileIcon' alt='profile'/>
                <div className='profileName'>
                    <b>Rainer Zufall</b>
                    <p>Werkstudent</p>
                </div>
                <img src={time} className='time' alt='time'/>
            </div>
            <div className='profileData'>
                <div className='contractData'>
                    <div className='dataTitle'>
                        <b>Vertragsdaten</b>
                    </div>
                    <div className='dataTable'>
                        <table>
                            <tr>
                                <th>Zeitraum: </th>
                                <th>...</th>
                            </tr>
                            <tr>
                                <th>Vertragsstatus: </th>
                                <th>...</th>
                            </tr>
                            <tr>
                                <th>Status: </th>
                                <th>...</th>
                            </tr>
                            <tr>
                                <th>Betreuer: </th>
                                <th>...</th>
                            </tr>
                            <tr>
                                <th>Team/Projekt: </th>
                                <th>...</th>
                            </tr>
                            <tr>
                                <th>Bemerkung: </th>
                                <th>...</th>
                            </tr>
                        </table>
                    </div>
                </div>
                <div className='education'>
                    <div className='dataTitle'>
                        <b>Ausbildung</b>
                    </div>
                    <div className='dataTable'>
                        <table>
                            <tr>
                                <th>Uni/Hochschule: </th>
                                <th>...</th>
                            </tr>
                            <tr>
                                <th>Studiengang: </th>
                                <th>...</th>
                            </tr>
                            <tr>
                                <th>Semester: </th>
                                <th>...</th>
                            </tr>
                            <tr>
                                <th>Aktueller Schnitt: </th>
                                <th>...</th>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default profile;