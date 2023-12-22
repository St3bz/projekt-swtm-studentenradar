import sort from '../images/sort.png';
import selection from '../images/selection.png';
import Searchbar from './Searchbar';
import {Link } from 'react-router-dom';
import { useParams, useNavigate } from 'react-router-dom';
import useFetch from './useFetch';

const Students = () => {
    const {id} = useParams();
    const {data:students, error, isPending} = useFetch('http://localhost:8000/students/' + id);
    return ( 
        <div>
            
            <div className="title">
                <b>Studenten</b>
            </div>
            <Searchbar />
            <div className="auswahl">
                <img src={sort} className="sort" alt="logo" />  
                <Link to="/StudentsEdit"><img src={selection} className="selection" alt="logo" /></Link>
            </div>
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {students && (
            <div>
            <div className="table-box">
                <table className="table">
                    <tr>
                        <th>Name</th>
                        <th>Vorname</th>
                        <th>Projekt</th>
                    </tr>
                    <tr>
                        <td>students.name</td>
                        <td>students.vorname</td>
                        <td>students.projekt</td>
                    </tr>
                    <tr>
                        <td>Rainer</td>
                        <td>Zufall</td>
                        <td>Projekt B</td>
                    </tr>
                </table>
            </div>
            </div>
            )}
        </div>          
    );
};
 
export default Students;