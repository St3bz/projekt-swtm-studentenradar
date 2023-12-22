import sort from '../images/sort.png';
import goBackBtn from '../images/backButton.png';
import plus from '../images/plus.png';
import deletion from '../images/delete.png';
import checkbox from '../images/checkbox.png';
import Searchbar from './Searchbar';
import { useParams, useNavigate } from 'react-router-dom';

const StudentsEdit = () => {
    const navigate = useNavigate();
	    const goBack = () => {
		navigate('/Students', {replace: true});
	}
    return ( 
        
        <div>
            <div className="title">
            <div className='goBackButton'>
                        <button onClick={goBack}>
                            <img src={goBackBtn} className="goBack" alt="goBack" />
                        </button>
                    </div>
                <b>Studenten</b>
            </div>
            <Searchbar />
            <div className="auswahl">
                <img src={sort} className="sort" alt="logo" />  
                <a href="add"><img src={plus} className="plus" alt="logo" /></a>
                <img src={deletion} className="deletion" alt="logo" />
            </div>
            <div className="table-box">
                <table className="table">
                    <tr>
                        <th>Name</th>
                        <th>Vorname</th>
                        <th>Projekt</th>
                        <th><input type="checkbox" id='checkAll' className='checkBox'/></th>
                    </tr>
                    <tr>
                        <td>Michl</td>
                        <td>Nico</td>
                        <td>Projekt A</td>
                        <td><input type="checkbox" id='checkBox' className='checkBox'/></td>
                    </tr>
                    <tr>
                        <td>Rainer</td>
                        <td>Zufall</td>
                        <td>Projekt B</td>
                        <td><input type="checkbox" id='checkBox' className='checkBox'/></td>
                    </tr>
                </table>
            </div>
            
        </div>
     );
}
 
export default StudentsEdit;