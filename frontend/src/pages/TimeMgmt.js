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
    const goBack = (id) => {
		navigate('/time/' + id, {replace: true});
	}

    const [text, setText] = useState('');
    const [contract, setContract] = useState([]);
    const [student, setStudent] = useState([]);
    const [isPending, setIsPending] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const time = {text};

        setIsPending(true);

        fetch(baseUrl + workUrl + '/' + id, {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(time)
        }).then(() => {
            console.log('time added');
            setIsPending(false);
            navigate('/time/' + id);
        })
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
        fetchStudentData(id);
        fetchContractData(id);
        goBack(id);
    }, [])
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
                    <b>{student.firstName} {student.lastName}</b>
                    <p>{contract.employmentType}</p>
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