import 'dayjs/locale/de';
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useParams, useNavigate } from 'react-router-dom';
import goBackBtn from '../images/backButton.png';
import { Link } from 'react-router-dom';
import HardwareIcon from '../images/Hardware_Icon.png';

const AddHardware = () => {
  const navigate = useNavigate();
	    const goBack = () => {
		navigate('/HardwareEdit', {replace: true});
	}
    return ( 
      <div>
        <div className="title">
        <div className='goBackButton'>
                        <button onClick={goBack}>
                            <img src={goBackBtn} className="goBack" alt="goBack" />
                        </button>
                    </div>
            <b>Hardware hinzufügen</b>
            </div>
        <div className="table-box-add-hardware">
        <img src={HardwareIcon} className='profile-icon' alt='profile'/>
        
        <div className='table-add-data'>

          <div className="first-row">
            <div className="first-row-a">
              <p>Gerät</p>
              <input type="text" id="field-first-a" className="q" />
            </div>
            <div className="first-row-b">
              <p>Grafikkarte</p>
              <input type="text" id="field-first-b" className="q" />
            </div>
          </div>

          <div className="second-row">
            <div className="second-row-a">
            <p>Hardware</p>
            <input type="text" id="field-second-a" className="q" />
            </div>
          </div>

        
          <div className="add-button">
            <div className='adding'>
              <b>Hinzufügen</b>
            </div>
          </div>
        </div>
      </div>
      </div>
     );
}
 
export default AddHardware;