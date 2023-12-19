import User from '../images/icon_user.png'
import Calendar from '../images/calendar.png'
import Warn from '../images/warning.png';
import { Link } from 'react-router-dom';

const TeamView = (props) => {
    const teamView = props.team; 
    return (  
        <div className="teamField">
            {teamView.map((prj) => (
                <div className="teamViewPrev" key={prj.id}>
                    <div className="team">
                        <Link to={`/teams/${prj.id}`}>
                            <div className="group">
                                <div className="groupName">
                                    <b>{prj.title}</b>
                                </div>
                            </div>
                            <div className="member"></div>
                            <div className="information">
                                <div><img src={User} className="iconTeams" alt="user" />   {prj.author} </div>
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