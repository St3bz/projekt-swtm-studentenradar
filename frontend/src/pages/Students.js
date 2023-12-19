import sort from '../images/sort.png';
import selection from '../images/selection.png';
import Searchbar from './Searchbar';
import {Link } from 'react-router-dom';

const Students = () => {
    return ( 
        <div>
            <Searchbar />
            <div className="auswahl">
                <img src={sort} className="sort" alt="logo" />  
                <a href="StudentsEdit"><img src={selection} className="selection" alt="logo" /></a>
            </div>
            <div className="table-box">
                <table className="table">
                    <tr>
                        <th>Name</th>
                        <th>Vorname</th>
                        <th>Projekt</th>
                    </tr>
                    <tr>
                        <td>Michl</td>
                        <td>Nico</td>
                        <td>Projekt A</td>
                    </tr>
                    <tr>
                        <td>Rainer</td>
                        <td>Zufall</td>
                        <td>Projekt B</td>
                    </tr>
                </table>
            </div>
        </div>
    );
}
 
export default Students;