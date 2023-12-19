import profileIcon from '../images/profile_icon.png';
import selection from '../images/selection.png';
import goBackBtn from '../images/backButton.png';
import { useParams, useNavigate, Link } from 'react-router-dom';
import useFetch from './useFetch';
const ShowTimeMgmt = () => {
    const {id} = useParams();
    const {data:time, error, isPending} = useFetch('http://localhost:8000/time');
    const navigate = useNavigate();
    const goBack = () => {
		navigate('/profile', {replace: true});
	}
    return (  
        <div className="TimeTable">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {time && (
                <div>
                    <div className='goBackButton'>
                        <button onClick={goBack}>
                            <img src={goBackBtn} className="goBack" alt="goBack" />
                        </button>
                    </div>
                    <div className="title">
                        <b>Zeit</b>
                    </div>
                    <div className='profileInfo'>
                        <img src={profileIcon} className='profileIcon' alt='profile'/>
                        <div className='profileName'>
                            <b>Rainer Zufall</b>
                            <p>Werkstudent</p>
                        </div>
                    </div>
                    <div className='timeEditBox'>
                        <div className='contentBox'>
                            <div>
                                {time.text}
                            </div>
                            <div className='editBox'>
                                <Link to='addtime'>
                                    <img src={selection} className="edit" alt="edit" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
 
export default ShowTimeMgmt;