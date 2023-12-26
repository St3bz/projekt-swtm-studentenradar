import React, { useEffect } from 'react';
import profileIcon from '../images/profile_icon.png';
import time from '../images/time.png';
import { useParams, useNavigate, Link } from 'react-router-dom';
import goBackBtn from '../images/backButton.png';
const Profile = () => {
    const {id} = useParams();
    /* const {data:student, error, isPending} = useFetch('/api/v1/student/' + id); */
    const navigate = useNavigate();
	    const goBack = () => {
		navigate('/Students', {replace: true});
	}
    const [studentData, setStudentData] = useState([]);
    const [workData, setWorkData] = useState([]);

    useEffect(() => {
        fetch('/api/v1/student/' + id)
            .then((response) => response.json())
            .then((data) => setStudentData(data))
            .catch((error) => console.error('Error fetching data from Table 1:', error));
           
        fetch('/api/v1/contract/' + id)
            .then((response) => response.json())
            .then((data) => setWorkData(data))
            .catch((error) => console.error('Error fetching data from Table 1:', error));

    })
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
                    <b>{student.firstName}{student.lastName}</b>
                    <p>{contract.employment_type}</p>
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
                            <tbody>
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
                            </tbody>
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