import React, {useState, useEffect} from 'react';
import profileIcon from '../images/profile_icon.png';
import selection from '../images/selection.png';
import goBackBtn from '../images/backButton.png';
import { useParams, useNavigate, Link } from 'react-router-dom';

const TimeMgmtView = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const baseUrl = 'http://localhost:8081/api/v1';
    const workUrl = '/work';  
    const studentUrl = '/students'; 
    const contractUrl = '/contracts' 
    const [work, setWork] = useState([]);
    const [student, setStudent] = useState([]);
    const [contract, setContract] = useState([]);

    let currentDate = new Date();
    let startDate = new Date(currentDate.getFullYear(), 0, 1);
    let days = Math.floor((currentDate - startDate) / (24 * 60 * 60 * 1000));

    let weekNumber = Math.ceil(days / 7);

    // Display the calculated result	 
    console.log(weekNumber);


    
    const fetchWorkData = (id, weekNumber) => {
        console.log('id:', id);
        console.log('week:', weekNumber);
        fetch(baseUrl + workUrl + '/' + id + '/' + weekNumber, {
            method: 'GET',
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
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
        fetchWorkData(id, weekNumber);
        fetchStudentData(id);
        fetchContractData(id);
    },  [])

    const goBack = () => {
		navigate(-1);
	}
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
                            <div className='contentBox'>
                                <div className='workView'>
                                    {/* {work.map((hours) => (  */}
                                        <li key={work.studentId}>Woche: {work.week}</li>
                                    {/*  ))} */}
                                </div>
                                <div className='editBox'>
                                    <Link to={`addtime/${weekNumber}`}>
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
 
export default TimeMgmtView;