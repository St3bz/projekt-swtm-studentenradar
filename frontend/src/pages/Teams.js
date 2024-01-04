import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Searchbar from './TeamSearchbar';
import TeamView from './TeamView';
/*import React, {useState, useEffect} from 'react';
import Searchbar from './Searchbar';
import TeamView from './TeamView';

const Teams = () => {
    const baseUrl = 'http://localhost:8081/api/v1';
    const projectUrl = '/projects';
    const studentUrl = '/students'  
    const [projects, setProjects] = useState([])
    const fetchProjectData = () => {
        fetch(baseUrl + projectUrl, {
            method: 'GET',
        })
        .then(response => {
            return response.json()
        })
        .then(data => {
            setProjects(data);
            console.log('zuweisung');
            console.log(data)
        })
    }
    useEffect(() => {
        fetchProjectData();
    }, [])
    return (  
        <div className="Teams">
            <div className="title">
                <b>Teams</b>
                <Searchbar />
            </div>
            {/* {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>} *///}
            //{projects  && <TeamView team={projects} /> }
            {/* {team && <ShowTeam team={team.filter((prj) => prj.id === 1)}/>} */}
            {/* <ShortcutList shortcut={shortcut.filter((scut) => scut.author === 'it' )} /> */}
//        </div>
//    );
//}
 
//export default Teams;




const Teams = () => {

    const baseUrl = 'http://localhost:8081/api/v1';
    const projectUrl = '/projects';
    const studentUrl = '/students'  
    const [projects, setProjects] = useState([]);
    const [filteredProjects, setFilteredProjects] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const fetchProjectData = () => {
        fetch(baseUrl + projectUrl, {
            method: 'GET',
        })
        .then(response => {
           return response.json()
        })
         .then(data => {
          setProjects(data);
          console.log('zuweisung');
         console.log(data)
        })
    }
    useEffect(() => {
        fetchProjectData();
    }, [])

    const handleSearch = (searchTerm) => {
        setSearchTerm(searchTerm);
 
        if (searchTerm.trim() === '') {
            setFilteredProjects([]);
        return;
    }

    const filtered = projects.filter(
        (project) => project.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredProjects(filtered);
    };

    const handleSearchSuggestions = (searchTerm) => {
    
        const suggestions = projects.filter(
        (project) => project.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredProjects(suggestions);
    };

    const renderResults = () => {
        if (filteredProjects.length === 0) {
            return <p>No matching teams found for "{searchTerm}".</p>;
        } else {
            return (
                <div>
                    <p>Matching teams for "{searchTerm}":</p>
                    <ul>
                        {filteredProjects.map((project) => (
                        <li key={project.id} onClick={() => navigate(`/teams/${project.id}`)} >
                            {project.name}
                        </li>
                        ))}
                    </ul>
                </div>
            );
        }
    };

    return (
        <div className="Teams">
            <div className="title">
                <b>Teams</b>
                    <Searchbar handleSearch={handleSearch} handleSuggestions={handleSearchSuggestions} />
            </div>
            {renderResults()}
            {/* {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>} */}
            {projects  && <TeamView team={projects} /> }
            {/* {team && <ShowTeam team={team.filter((prj) => prj.id === 1)}/>} */}
            {/* <ShortcutList shortcut={shortcut.filter((scut) => scut.author === 'it' )} /> */}
        </div>
    );
};

export default Teams;