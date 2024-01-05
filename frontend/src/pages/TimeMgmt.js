import React, {useState, useEffect} from 'react';
import profileIcon from '../images/profile_icon.png';
import goBackBtn from '../images/backButton.png';
import { useParams, useNavigate } from 'react-router-dom';
const TimeMgmt = () => {
    const baseUrl = 'http://localhost:8081/api/v1';
    const workUrl = '/work';
    const studentUrl = '/students';
    const contractUrl = '/contracts';
    const {id} = useParams();
    const navigate = useNavigate();
    const goBack = () => {
		navigate(-1); 
	}

    const [work, setWork] = useState([]);
    const [text, setText] = useState('');
    const [contract, setContract] = useState([]);
    const [student, setStudent] = useState([]);
    const [isPending, setIsPending] = useState(false);

    const handleSubmit = () => {
        setIsPending(true);

        fetch(baseUrl + workUrl + '/' + id, {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(work)
        }).then(() => {
            console.log('time added');
            setIsPending(false);
            navigate(-1);
        })
    }
    /* const fetchWorkData = (id, week) => {
        fetch(baseUrl + workUrl + '/' + id + '/' + week, {
            method: 'GET',
        })
        .then(response => {
            return response.json()
        })
        .then(data => {
            setWork(data);
            console.log('work');
            console.log(data)
        })
    } */
    const fetchStudentData = (id) => {
        fetch(baseUrl + studentUrl + '/' + id, {
            method: 'GET',
        })
        .then(response => {
            return response.json()
        })
        .then(data => {
            setStudent(data);
            console.log('student');
            console.log(data)
        })
    } 
    const fetchContractData = (id) => {
        fetch(baseUrl + contractUrl + '/' + id, {
            method: 'GET',
        })
        .then(response => {
            return response.json()
        })
        .then(data => {
            setContract(data);
            console.log('vertrag');
            console.log(data)
        })
    }
    useEffect(() => {
        /* fetchWorkData(id, week); */
        fetchStudentData(id);
        fetchContractData(id);
    }, [])

    return (  
        <div className="timeMgmt">
            {work && (
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
                            <b>{student.firstName} {student.lastName}</b>
                            <p>{contract.employmentType}</p>
                        </div>
                    </div>
                    <form action={baseUrl + workUrl + '/' + id} onSubmit={handleSubmit} method="POST">
                        <label>Arbeitszeit hinzufügen:</label>
                        {/* <textarea
                            required
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                        /> */}
                        <div className="form-group" key={work.id}>
                            <label htmlFor="calendarWeek">Kalenderwoche</label>
                            <input 
                                type="number" 
                                className="form-control" 
                                id="calendarWeek" 
                                value={work.week} 
                                placeholder="Kalenderwoche"
                                onChange={(e) => setWork(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="workingHours">Wochenstunde</label>
                            <input 
                                type="number" 
                                className="form-control" 
                                id="workingHours" 
                                value={work.workingHours} 
                                placeholder="Wochenstunden"
                                onChange={(e) => setWork(e.target.value)}
                            />
                        </div>
                        {!isPending && <button type='submit'>Speichern</button>}
                        {isPending && <button disabled>wird gespeichert...</button>}
                    </form>
                </div>
            )}
        </div>
    );
}
 
export default TimeMgmt;