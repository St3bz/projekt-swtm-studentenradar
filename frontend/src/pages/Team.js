import React, {useState, useEffect} from 'react';
import Searchbar from './Searchbar';
import TeamView from './TeamView';
//import ShowTeam from './ShowTeam';
/* import useFetch from './useFetch'; */
const Teams = () => {
    /* const {data:team, isPending, error} = useFetch('/api/v1/project') */
    const [projects, setProjects] = useState([])
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
    return (  
        <div className="Teams">
            <div className="title">
                <b>Teams</b>
                <Searchbar />
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