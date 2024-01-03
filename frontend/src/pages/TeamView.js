import React, {useState, useEffect} from 'react';
import User from '../images/icon_user.png'
import Calendar from '../images/calendar.png'
import Warn from '../images/warning.png';
import { Link } from 'react-router-dom';

const TeamView = (props) => {
    const teamView = props.team; 
    /* const [projects, setProjects] = useState([])
    const [student, setStudent] = useState([]) */
    /* const fetchProjectData = () => {
        fetch('http://localhost:8081/api/v1/projects', {
            method: 'GET',
        })
        .then(response => {
            return response.json()
        })
        .then((actualData) => {
            console.log(actualData)
        })
        .then(data => {
            setProjects(data)
            console.log(projects)
        })
    } 
    const fetchStudentData = () => {
        fetch('api/v1/student')
        .then(response => {
            return response.json()
        })
        .then(data => {
            setStudent(data)
        })
    }
    useEffect(() => {
        fetchProjectData();
        fetchStudentData()
    }, [])*/

    return (  
        <div className="teamField">
            {teamView.map((project) => (
                <div className="teamViewPrev" key={project.id}>
                    <div className="team">
                        <Link to={`/teams/${project.id}`}>
                            <div className="group">
                                <div className="groupName">
                                    <b>{project.name}</b>
                                </div>
                            </div>
                            <div className="member"></div>
                            <div className="information">
                                <div><img src={User} className="iconTeams" alt="user" />   </div>
                                <div><img src={Calendar} className="iconTeams" alt="calendar" />   Kein Zeitraum </div>
                                <div><img src={Warn} className="iconTeams" alt="warn" />   Keine Auswahl</div>
                            </div>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
}
 
export default TeamView;