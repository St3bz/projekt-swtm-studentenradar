import React, {useState, useEffect} from 'react';
import User from '../images/icon_user.png';
import Calendar from '../images/calendar.png';
import goBackBtn from '../images/backButton.png';
import Add from '../images/add.png';
import { useParams, useNavigate } from 'react-router-dom';
/* import useFetch from './useFetch'; */
const ShowTeam = () => {
    const {id} = useParams();
    /* const {data:project, error, isPending} = useFetch('/api/v1/project/' + id);
    const {data:student, error, isPending} = useFetch('/api/v1/student/' + id); */
    const [project, setProject] = useState([])
    const [students, setStudents] = useState([])
    const [supervisors, setSupervisors] = useState([])
    const fetchProjectData = (id) => {
        fetch('http://localhost:8081/api/v1/projects/' + id, {
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
        fetch('http://localhost:8081/api/v1/projects/' + id + '/members' , {
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
        fetch('http://localhost:8081/api/v1/supervisors/' + id, {
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
           {/*  {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>} */}
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
                                    <tbody key={students.members}>
                                        <tr>{students.firstName}</tr>
                                        <tr>{students.lastName}</tr>
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

export default ShowTeam;