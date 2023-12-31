import React, {useState, useEffect} from 'react';
import User from '../images/icon_user.png';
import Calendar from '../images/calendar.png';
import goBackBtn from '../images/backButton.png';
import Add from '../images/add.png';
import { useParams, useNavigate } from 'react-router-dom';
import useFetch from './useFetch';
const ShowTeam = () => {
    const {id} = useParams();
    /* const {data:project, error, isPending} = useFetch('/api/v1/project/' + id);
    const {data:student, error, isPending} = useFetch('/api/v1/student/' + id); */
    const [project, setProject] = useState([])
    const [students, setStudents] = useState([])
    const [supervisors, setSupervisors] = useState([])
    const fetchProjectData = () => {
        fetch('/api/v1/project/')
        .then(response => {
            return response.json()
        })
        .then(data => {
            setProject(data)
        })
    }
    const fetchStudentData = () => {
        fetch('/api/v1/student/')
        .then(response => {
            return response.json()
        })
        .then(data => {
            setStudents(data)
        })
    }
    const fetchSupervisorData = () => {
        fetch('/api/v1/supervisor/')
        .then(response => {
            return response.json()
        })
        .then(data => {
            setSupervisors(data)
        })
    }
    useEffect(() => {
        fetchProjectData();
        fetchStudentData();
        fetchSupervisorData()
    }, [])

    const navigate = useNavigate();
	const goBack = () => {
		navigate('/teams', {replace: true});
	}
    return (
        <div className="Teams">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
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
                            <div><img src={User} className="iconsTeam" alt="user" /> {supervisors.first_name}{supervisors.last_name}</div>
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
                            <div className='projDetails'>
                                <p>{project.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ShowTeam;