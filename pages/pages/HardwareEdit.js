import sort from '../images/sort.png';
import plus from '../images/plus.png';
import deletion from '../images/delete.png';
import checkbox from '../images/checkbox.png';
import Searchbar from './Searchbar';
import { useParams, useNavigate } from 'react-router-dom';
import goBackBtn from '../images/backButton.png';
import { Link } from 'react-router-dom';

const HardwareEdit = () => {
  const navigate = useNavigate();
	    const goBack = () => {
		navigate('/Hardware', {replace: true});
	}
    return ( 
        <div>
          <div className="title">
          <div className='goBackButton'>
                        <button onClick={goBack}>
                            <img src={goBackBtn} className="goBack" alt="goBack" />
                        </button>
                    </div>
            <b>Hardware</b>
            </div>
          <Searchbar/>
        <div className="auswahl">
        <img src={sort} className="sort" alt="logo" />  
        <Link to={`/addhardware}`}>
        <img src={plus} className="plus" alt="logo" />
        </Link>
        <img src={deletion} className="deletion" alt="logo" />
      </div>
        <div className="table-box">
        <table className="table">
          <tr>
            <th>Gerät</th>
            <th>Grafikkarte</th>
            <th>Betriebssystem</th>
            <th>Hardware</th>
            <th>Verfügbar</th>
            <th><input type="checkbox" id='checkAll' className='checkBox'/></th>
          </tr>
          <tr>
            <td>Fujitsu Desktop ESPRIMO D9013</td>
            <td>Intel® UHD Graphics 770</td>
            <td>Windows 11 Pro</td>
            <td>cherry kw 3000</td>
            <td>Ja</td>
            <th><input type="checkbox" id='checkAll' className='checkBox'/></th>
          </tr>
        </table>
      </div>
      </div>
     );
}
 
export default HardwareEdit;