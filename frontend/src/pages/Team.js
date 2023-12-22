import Searchbar from './Searchbar';
import TeamView from './TeamView';
import ShowTeam from './ShowTeam';
import useFetch from './useFetch';
const Teams = () => {
    const {data:team, isPending, error} = useFetch('http://localhost:8000/team')
    return (  
        <div className="Teams">
            <div className="title">
                <b>Teams</b>
                <Searchbar />
            </div>
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {team && <TeamView team={team} />}
            {/* {team && <ShowTeam team={team.filter((prj) => prj.id === 1)}/>} */}
            {/* <ShortcutList shortcut={shortcut.filter((scut) => scut.author === 'it' )} /> */}
        </div>
    );
}
 
export default Teams;