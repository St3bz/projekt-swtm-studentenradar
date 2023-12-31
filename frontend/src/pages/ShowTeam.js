import React from 'react';
import User from '../images/icon_user.png';
import Calendar from '../images/calendar.png';
import goBackBtn from '../images/backButton.png';
import Add from '../images/add.png';
import { useParams, useNavigate } from 'react-router-dom';
import useFetch from './useFetch';
const ShowTeam = () => {
    const {id} = useParams();
    const {data:team, error, isPending} = useFetch('/api/v1/project/' + id);
    const navigate = useNavigate();
	const goBack = () => {
		navigate('/teams', {replace: true});
	}
    return (
        <div className="Teams">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {team && (
                <div>
                    <div className='goBackButton'>
                        <button onClick={goBack}>
                            <img src={goBackBtn} className="goBack" alt="goBack" />
                        </button>
                    </div>
                    <div className='projectField'>
                        <div className='proj' key={team.id}>
                            <div className='projName'>
                                <b>{team.title}</b>
                            </div>
                        </div>
                        <div className='projInfo'>
                            <div><img src={User} className="iconsTeam" alt="user" /> {team.author}</div>
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
                                        {team.student.map(student => (
                                            <tr key={student.id}>
                                                <td>{student.firstName}</td>
                                                <td>{student.lastName}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <div className='projDetails'>

                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ShowTeam;