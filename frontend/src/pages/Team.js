import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import Searchbar from './TeamSearchbar';
import TeamView from './TeamView';
//import ShowTeam from './ShowTeam';
/* import useFetch from './useFetch'; */
const Teams = () => {
    /* const {data:team, isPending, error} = useFetch('/api/v1/project') */
    const [projects, setProjects] = useState([])
    const [filteredProjects, setFilteredProjects] = useState([]);
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');

    const fetchProjectData = () => {
        fetch('http://localhost:8081/api/v1/projects', {
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
        /* fetchStudentData() */
    }, [])

    const handleSearch = (searchTerm) => {
        setSearchTerm(searchTerm);

        // Reset filteredProjects when the search term is empty
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
        // Filter projects for search suggestions
        const suggestions = projects.filter((project) =>
          project.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredProjects(suggestions);
    };

    const renderResults = () => {
        if (filteredProjects.length === 0) {
          return <p>No matching teams found for "{searchTerm}".</p>;
        } else if (filteredProjects.length === 1) {
          return <TeamView team={filteredProjects} />;
        } else {
            return (
                <div>
                  <p>Multiple matching teams found for "{searchTerm}". Select a team:</p>
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
}
 
export default Teams;