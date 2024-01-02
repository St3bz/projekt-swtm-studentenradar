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
        const filtered = projects.filter((project) =>
          project.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredProjects(filtered);

        if (filtered.length === 1) {
            navigate(`/teams/${filtered[0].id}`);
        }
    };

    return (  
        <div className="Teams">
            <div className="title">
                <b>Teams</b>
                <Searchbar handleSearch={handleSearch}/>
            </div>
            {/* {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>} */}
            {projects  && <TeamView team={projects} /> }
            {/* {team && <ShowTeam team={team.filter((prj) => prj.id === 1)}/>} */}
            {/* <ShortcutList shortcut={shortcut.filter((scut) => scut.author === 'it' )} /> */}
        </div>
    );
}
 
export default Teams;