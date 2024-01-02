import React, {useState, useEffect} from 'react';
import User from '../images/icon_user.png';
import Calendar from '../images/calendar.png';
import goBackBtn from '../images/backButton.png';
import Add from '../images/add.png';
import { useParams, useNavigate } from 'react-router-dom';
/* import useFetch from './useFetch'; */
const Team = () => {
    const {id} = useParams();
    const baseUrl = 'http://localhost:8081/api/v1';
    const projectUrl = '/projects';
    const studentUrl = '/students';
    const [project, setProject] = useState([])
    const [students, setStudents] = useState([])
    const [supervisors, setSupervisors] = useState([])
    const fetchProjectData = (id) => {
        fetch(baseUrl + projectUrl + '/' + id, {
            method: 'GET',
        })
        .then(response => {
            return response.json()
        })
        .then(data => {
            setProject(data);
            console.log('test');
            console.log(data)
        })
    } 
    const fetchStudentData = (id) => {
        fetch(baseUrl + projectUrl + '/' + id + '/members' , {
            method: 'GET',
        })
        .then(response => {
            return response.json()
        })
        .then(data => {
            setStudents(data);
            console.log('testStud');
            console.log(data)
        })
    } 
    const fetchSupervisorData = (id) => {
        fetch(baseUrl + studentUrl + '/' + id + '/supervisor', {
            method: 'GET',
        })
        .then(response => {
            return response.json()
        })
        .then(data => {
            setSupervisors(data)
            console.log('testSuper');
            console.log(data)
        })
    } 
    useEffect(() => {
        fetchProjectData(id);
        fetchStudentData(id);
        fetchSupervisorData(id) 
    }, [])

    const navigate = useNavigate();
	const goBack = () => {
		navigate('/teams', {replace: true});
	}
    return (
        <div className="Teams">
            {project && (
                <div>
                    <div className='goBackButton'>
                        <button onClick={goBack}>
                            <img src={goBackBtn} className="goBack" alt="goBack" />
                        </button>
                    </div>
                    <div className='projectField'>
                        <div className='proj' key={project.id}>
                            <div className='projName'>
                                <b>{project.name}</b>
                            </div>
                        </div>
                        <div className='projInfo'>
                            <div><img src={User} className="iconsTeam" alt="user" /> {supervisors.firstName} {supervisors.lastName}</div>
                            <div><img src={Calendar} className="iconsTeam" alt="calendar" /> Kein Zeitraum</div>
                            <div><img src={Add} className="iconsTeam" alt="add" /></div>
                        </div>
                        <div className='boxes'>
                            <div className='projMember'>
                                <table>
                                    <thead>
                                       <tr>
                                            <th>Vorname</th>
                                            <th>Nachname</th>
                                        </tr> 
                                    </thead>
                                    <tbody>
                                        {students.map(student => (
                                            <tr key={student.id}>
                                                <td>{student.firstName}</td>
                                                <td>{student.lastName}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <div className='projDetails' key={project.id}>
                                <b>{project.description}</b>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Team;