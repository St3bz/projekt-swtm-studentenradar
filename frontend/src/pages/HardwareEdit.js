import sort from '../images/sort.png';
import plus from '../images/plus.png';
import deletion from '../images/delete.png';
import checkbox from '../images/checkbox.png';

const HardwareEdit = () => {
    return ( 
        <div>
        <div className="auswahl">
        <img src={sort} className="sort" alt="logo" />  
        <a href="add">
        <img src={plus} className="plus" alt="logo" />
        </a>
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
            <th><img src={checkbox} className="checkbox" alt="logo" /></th>
          </tr>
          <tr>
            <td>Fujitsu Desktop ESPRIMO D9013</td>
            <td>Intel® UHD Graphics 770</td>
            <td>Windows 11 Pro</td>
            <td>cherry kw 3000</td>
            <td>Ja</td>
            <td><img src={checkbox} className="checkbox" alt="logo" /></td>
          </tr>
        </table>
      </div>
      </div>
     );
}
 
export default HardwareEdit;