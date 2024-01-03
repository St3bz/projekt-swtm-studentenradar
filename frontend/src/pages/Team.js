import React, {useState, useEffect} from 'react';
import Searchbar from './TeamSearchbar';
import User from '../images/icon_user.png';
import Calendar from '../images/calendar.png';
import goBackBtn from '../images/backButton.png';
import Add from '../images/add.png';
import { useParams, useNavigate } from 'react-router-dom';
/* import useFetch from './useFetch'; */
const Team = () => {
    const {id} = useParams();
    const baseUrl = 'http://localhost:8081/api/v1';
    const projectUrl = '/projects';
    const studentUrl = '/students';
    const [project, setProject] = useState([])
    const [students, setStudents] = useState([])
    const [supervisors, setSupervisors] = useState([])
    const [projects, setProjects] = useState([])
    const [filteredProjects, setFilteredProjects] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();
    
    const fetchProjectData = (id) => {
        fetch(baseUrl + projectUrl + '/' + id, {
            method: 'GET',
        })
        .then(response => {
            return response.json()
        })
        .then(data => {
            setProject(data);
            console.log('test');
            console.log(data)
        })
    } 
    const fetchStudentData = (id) => {
        fetch(baseUrl + projectUrl + '/' + id + '/members' , {
            method: 'GET',
        })
        .then(response => {
            return response.json()
        })
        .then(data => {
            setStudents(data);
            console.log('testStud');
            console.log(data)
        })
    } 
    const fetchSupervisorData = (id) => {
        fetch(baseUrl + studentUrl + '/' + id + '/supervisor', {
            method: 'GET',
        })
        .then(response => {
            return response.json()
        })
        .then(data => {
            setSupervisors(data)
            console.log('testSuper');
            console.log(data)
        })
    } 
    useEffect(() => {
        fetchProjectData(id);
        fetchStudentData(id);
        fetchSupervisorData(id) 
    }, [])

    const handleSearch = (searchTerm) => {
        setSearchTerm(searchTerm);
      
        if (searchTerm.trim() === '') {
            setFilteredProjects([]);
            return;
        }

        const filtered = projects.filter((project) =>
          project.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredProjects(filtered);

        if (filtered.length === 1) {
            navigate(`/teams/${filtered[0].id}`);
        }
    };

    const handleSearchSuggestions = (searchTerm) => {
        
        const suggestions = projects.filter((project) =>
          project.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredProjects(suggestions);
    };

    const renderResults = () => {
        if (filteredProjects.length === 0) {
          return <p>No matching teams found for "{searchTerm}".</p>;
        } else{ 
            return (
                <div>
                  <p>Matching teams found for "{searchTerm}"</p>
                  <ul>
                    {filteredProjects.map((project) => (
                      <li key={project.id} onClick={() => navigate(`/teams/${project.id}`)}>
                        {project.name}
                      </li>
                    ))}
                  </ul>
                </div>
            );
        }
      };

	const goBack = () => {
		navigate('/teams', {replace: true});
	}
    return (
        <div className="Teams">
          <div className="title">
                <b>Teams</b>
                <Searchbar handleSearch={handleSearch} handleSuggestions={handleSearchSuggestions} />
          </div>
            {renderResults()}
            {project && (
                <div>
                    <div className='goBackButton'>
                        <button onClick={goBack}>
                            <img src={goBackBtn} className="goBack" alt="goBack" />
                        </button>
                    </div>
                    <div className='projectField'>
                        <div className='proj' key={project.id}>
                            <div className='projName'>
                                <b>{project.name}</b>
                            </div>
                        </div>
                        <div className='projInfo'>
                            <div><img src={User} className="iconsTeam" alt="user" /> {supervisors.firstName} {supervisors.lastName}</div>
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
                                        {students.map(student => (
                                            <tr key={student.id}>
                                                <td>{student.firstName}</td>
                                                <td>{student.lastName}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <div className='projDetails' key={project.id}>
                                <b>{project.description}</b>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Team;