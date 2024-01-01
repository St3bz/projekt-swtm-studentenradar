import React, {useState, useEffect} from 'react';
import User from '../images/icon_user.png'
import Calendar from '../images/calendar.png'
import Warn from '../images/warning.png';
import { useParams, Link } from 'react-router-dom';

const TeamView = (props) => {
    const teamView = props.team; 
    const {id} = useParams();
    const [supervisors, setSupervisors] = useState([])

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
        fetchSupervisorData(id) 
    }, [])

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
                                <div><img src={User} className="iconTeams" alt="user" /> {supervisors.firstName} {supervisors.lastName} </div>
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