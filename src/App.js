import { useEffect, useState } from "react";
import React from "react";

import CharacterCard from "./CharacterCard";
import CardCarousel from "./CardCarousel";
import SearchIcon from "./search.svg";
import './App.css';

const API_URL = "https://rickandmortyapi.com/api";

const App = () => {

    const [characters, setCharacters] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    // function for name searching
    const searchCharacters = async (name) => {
        const response = await fetch(`${API_URL}/character/?name=${name}`);
        const data = await response.json();
        
        setCharacters(data.results);
    };

    // function calls initial page load data from api
    const getHome = async (id) => {
        const response = await fetch(`${API_URL}/character/?page=${id}`);
        const data = await response.json();
        
        setCharacters(data.results);
    };

    // run on page load
    useEffect(() => {
        getHome(1);
    }, []);

    // renders whatever in there
    return (
        <div className="app">
            <h1>rNm</h1>
            {/* search bar */}
            <div className="search">
                <input 
                    placeholder="Search for characters" 
                    value={searchTerm} 
                    onChange={(event) => {
                        setSearchTerm(event.target.value)
                }}></input>
                <img 
                    src={SearchIcon}
                    alt="search"
                    onClick={() => searchCharacters(searchTerm)}
                />
            </div>

            {/* if characters of the searched cast is available then puts the all characters in the dom otherwise indicates N/A */}
            {
                characters.length!== 0 
                ? (
                    <div className="container">
                        {
                            characters.map((cast) => (
                                <CharacterCard character={cast}/>
                            ))
                        }
                    </div>
                    
                ) : (
                    <div className="empty">
                        <h2>No characters found!</h2>
                    </div>
                )
            }
            <CardCarousel characters={characters}/>
        </div>
    );
}

export default App;