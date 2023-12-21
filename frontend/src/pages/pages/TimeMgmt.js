import { useState } from "react";
import profileIcon from '../images/profile_icon.png';
import goBackBtn from '../images/backButton.png';
import { useNavigate } from 'react-router-dom';
const TimeMgmt = () => {
    const navigate = useNavigate();
    const goBack = () => {
		navigate('/time', {replace: true});
	}

    const [text, setText] = useState('');
    const [isPending, setIsPending] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const time = {text};

        setIsPending(true);

        fetch('http://localhost:8000/team', {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(time)
        }).then(() => {
            /* console.log('time added');
            setIsPending(false); */
            navigate('/time');
        })
    }
    return (  
        <div className="timeMgmt">
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
            <form onSubmit={handleSubmit}>
                <label>Arbeitszeit hinzufügen:</label>
                <textarea
                    required
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                {!isPending && <button>Speichern</button>}
                {isPending && <button disabled>wird gespeichert...</button>}
            </form>
        </div>
    );
}
 
export default TimeMgmt;