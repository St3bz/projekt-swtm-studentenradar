import {useState, useEffect} from 'react';
import Searchbar from './Searchbar';
import Stud from '../images/shortcut-stud.png';
import Team from '../images/shortcut-teams.png';
import Hardware from '../images/Hardware_Icon.png';
import ITLogo from '../images/IT-Designer.png';
import ShortcutList from './ShortcutList';
const Home = () => {
    const [shortcut, setShortcut] = useState([
        {title: 'Studenten', image: Stud, author: 'all', link: './students', id: 1},
        {title: 'Studenten', image: Stud, author: 'it',  link: './students', id: 2},
        {title: 'Teams', image: Team, author: 'all', link: './teams', id: 3},
        {title: 'Hardware', image: Hardware, author: 'it', link: './teams', id: 4},
        {title: 'Website', image: ITLogo, author: 'all', link: 'https://it-designers-gruppe.de/', id: 5},
        {title: 'Website', image: ITLogo, author: 'it', link: 'https://it-designers-gruppe.de/', id: 6}
    ]);

    useEffect(() => {
        console.log('use effect ran');
        console.log(shortcut);
    });

    return (  
        <div className="home">
            <div className="greetingText">
                <h2>Homepage</h2>
                <Searchbar />
            </div>
            <ShortcutList shortcut={shortcut.filter((scut) => scut.author === 'all' )} />
            {/* <ShortcutList shortcut={shortcut.filter((scut) => scut.author === 'it' )} /> */}
        </div>
    );
}
 
export default Home;