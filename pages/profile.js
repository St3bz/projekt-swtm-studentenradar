import React from 'react';
import profileIcon from '../images/profile_icon.png';
import time from '../images/time.png';
import { Link } from 'react-router-dom';
import { useParams, useNavigate } from 'react-router-dom';
import goBackBtn from '../images/backButton.png';
const Profile = () => {
    const navigate = useNavigate();
	    const goBack = () => {
		navigate('/Students', {replace: true});
	}
    return (
        <div className="Profile">
            <div className="title">
            <div className='goBackButton'>
                        <button onClick={goBack}>
                            <img src={goBackBtn} className="goBack" alt="goBack" />
                        </button>
                    </div>
                <b>Profil</b>
            </div>
            <div className='profileInfo'>
                <img src={profileIcon} className='profileIcon' alt='profile'/>
                <div className='profileName'>
                    <b>Rainer Zufall</b>
                    <p>Werkstudent</p>
                </div>
                <Link to='/time'><img src={time} className='time' alt='time'/></Link>
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

export default Profile;