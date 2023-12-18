import Settings from '../images/settings.png';
import Info from '../images/Info1.png';

const Navbar = () => {
    return (  
        <nav className="navbar">
            <div className="headerData">
                <img src={Info} className="Info" alt="info" />
                <img src={Settings} className="Settings" alt="settings" />
            </div>
        </nav>
    );
}
 
export default Navbar;