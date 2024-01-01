import React, { useState, useEffect } from 'react';
import profileIcon from '../images/profile_icon.png';
import time from '../images/time.png';
import { useParams, useNavigate, Link } from 'react-router-dom';
import goBackBtn from '../images/backButton.png';

const Profile = () => {
    const {id} = useParams();
    const [contract, setContract] = useState([]);
    const [student, setStudent] = useState([]);
    const [education, setEducation] = useState([]);
    const fetchContractData = (id) => {
        fetch('http://localhost:8081/api/v1/contracts/' + id, {
            method: 'GET',
        })
        .then(response => {
            return response.json()
        })
        .then(data => {
            setContract(data);
            console.log('vertrag');
            console.log(data)
        })
    }
    const fetchStudentData = (id) => {
        fetch('http://localhost:8081/api/v1/students/' + id, {
            method: 'GET',
        })
        .then(response => {
            return response.json()
        })
        .then(data => {
            setStudent(data);
            console.log('student');
            console.log(data)
        })
    } 
    const fetchEducationData = (studentId) => {
        fetch('http://localhost:8081/api/v1/educations/' + studentId, {
            method: 'GET',
        })
        .then(response => {
            return response.json()
        })
        .then(data => {
            setEducation(prevEducation => ({
                ...prevEducation,
                [studentId]: data,
            }));
            console.log('education');
            console.log(data)
        })
    }
    useEffect(() => {
        fetchContractData(id);
        fetchStudentData(id);
        fetchEducationData(id) 
    }, [id])
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
                <div className='profileName' key={contract.id && student.id}>
                    <b>{student.firstName}{student.lastName}</b>
                    <p>{contract.employmentType}</p>
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
                                    <th>{contract.startDate} bis {contract.endDate}</th>
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
                                    <th>{student.remark}</th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className='education' key={student.id && education[id]?.id}>
                    <div className='dataTitle'>
                        <b>Ausbildung</b>
                    </div>
                    <div className='dataTable'>
                        <table>
                            <tbody>
                                <tr>
                                    <th>Uni/Hochschule: </th>
                                    <th>{education.university}</th>
                                </tr>
                                <tr>
                                    <th>Studiengang: </th>
                                    <th>{education.courseOfStudy}</th>
                                </tr>
                                <tr>
                                    <th>Semester: </th>
                                    <th>{education.semester}</th>
                                </tr>
                                <tr>
                                    <th>Aktueller Schnitt: </th>
                                    <th>{education.averageGrade}</th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;