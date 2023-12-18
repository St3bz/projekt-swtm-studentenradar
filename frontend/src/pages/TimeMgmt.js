import { useState } from "react";
const TimeMgmt = () => {
    const goBack = () => {
		navigate('/profile', {replace: true});
	}

    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const time = {text};

        console.log(time);
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
                    onChange={(e) => setText(e.target.value)}>
                </textarea>
                <button>Speichern</button>
            </form>
        </div>
    );
}
 
export default TimeMgmt;