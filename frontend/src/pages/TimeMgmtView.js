import React, {useState, useEffect} from 'react';
import profileIcon from '../images/profile_icon.png';
import selection from '../images/selection.png';
import goBackBtn from '../images/backButton.png';
import { useParams, useNavigate, Link } from 'react-router-dom';
import useFetch from './useFetch';
const TimeMgmtView = () => {
    const {id} = useParams();
    const {week} = useParams();
    const navigate = useNavigate();
    const baseUrl = 'http://localhost:8081/api/v1';
    const workUrl = '/work';  
    const studentUrl = '/students'; 
    const contractUrl = '/contracts' 
    const [work, setWork] = useState([]);
    const [student, setStudent] = useState([]);
    const [contract, setContract] = useState([]);
    const goBack = (id) => {
		navigate('/profile/' + id, {replace: true});
	}
    
    const fetchWorkData = (id, week) => {
        fetch(baseUrl + workUrl + '/' + id + week, {
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
        fetchWorkData(id, week);
        fetchStudentData(id);
        fetchContractData(id);
        goBack(id)
    }, [])
    return (  
        <div className="TimeTable">
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
                    <div className='timeEditBox'>
                        <div className='contentBox' key={work.id}>
                            <div className='editBox'>
                                <Link to={`addtime/`}>
                                    <img src={selection} className="edit" alt="edit" />
                                </Link>
                            </div>
                            <div>
                                {work.map(hours => (
                                    <li key={hours.id}>{hours}</li>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
 
export default TimeMgmtView;