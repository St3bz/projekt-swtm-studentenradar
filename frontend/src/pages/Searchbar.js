import search from '../images/search_icon.png';

const Searchbar = () => {

    return (  
        <div className="searchbar">
            <form>
                <img src={search} className="searchIcon" alt="search" />
                <input type="text" id="q" className="searchq" />
            </form>
        </div>
    );
}

export default Searchbar;