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

    let currentDate = new Date();
    let startDate = new Date(currentDate.getFullYear(), 0, 1);
    let days = Math.floor((currentDate - startDate) / (24 * 60 * 60 * 1000));

    let weekNumber = Math.ceil(days / 7);

    const handleSubmit = (e) => {
        e.preventDefaukt();
        setIsPending(true);

        fetch(baseUrl + workUrl + '/' + id, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'accept': 'application/json'
            },
            body: JSON.stringify(work)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            console.log('time added');
            setIsPending(false);
            navigate(-1);
        })
        .catch(error => {
            console.error('Error adding time:', error);
            setIsPending(false);
            // Handle the error appropriately, e.g., show an error message to the user
        });
    }
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
                    <form onSubmit={handleSubmit} method="POST">
                        <label>Arbeitszeit hinzufügen:</label>
                        {/* <textarea
                            required
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                        /> */}
                        <div className="form-group" key={work.id}>
                            <label>Kalenderwoche: {weekNumber} </label>
                        </div>
                        <div className="form-group">
                            <label htmlFor="workingHours">Wochenstunde: </label>
                            <input 
                                type="number" 
                                className="form-control" 
                                id="workingHours" 
                                required
                                value={work.workingHours} 
                                placeholder="Wochenstunden"
                                onChange={(e) => setWork(e.target.value)}
                            />
                        </div>
                        {!isPending && <button className='formBtn' type='submit'>Speichern</button>}
                        {isPending && <button className='formBtn' disabled>wird gespeichert...</button>}
                    </form>
                </div>
            )}
        </div>
    );
}
 
export default TimeMgmt;