import sort from '../images/sort.png';
import selection from '../images/selection.png';
import Searchbar from './Searchbar';

const Hardware = () => {
    return ( 
        <div>
          <div className="title">
            <b>Hardware</b>
            </div>
          <Searchbar />
        <div className="auswahl">
        <img src={sort} className="sort" alt="logo" />  
        <a href="HardwareEdit">
        <img src={selection} className="selection" alt="logo" />
        </a>
      </div>
        <div className="table-box">
        <table className="table">
          <tr>
            <th>Gerät</th>
            <th>Grafikkarte</th>
            <th>Betriebssystem</th>
            <th>Hardware</th>
            <th>Verfügbar</th>
          </tr>
          <tr>
            <td>Fujitsu Desktop ESPRIMO D9013</td>
            <td>Intel® UHD Graphics 770</td>
            <td>Windows 11 Pro</td>
            <td>cherry kw 3000</td>
            <td>Ja</td>
          </tr>
        </table>
      </div>
      </div>
     );
}
 
export default Hardware;