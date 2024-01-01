import search from '../images/search_icon.png';
import React, {useState, useEffect} from 'react';

const Searchbar = () => {

    const [search, setSearch] = useState([])
    const fetchSearchData = () => {
        fetch('http://localhost:8081/api/v1/projects', {
            method: 'GET',
        })
        .then(response => {
            return response.json()
        })
        .then(data => {
            setSearch(data);
            console.log('suche');
            console.log(data)
        })
    }
    useEffect(() => {
        fetchSearchData();
    }, [])

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