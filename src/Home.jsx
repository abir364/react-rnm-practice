import { useEffect, useState } from "react";
import React from "react";
import { Link } from "react-router-dom";

import CardCarousel from "./CardCarousel";
import './App.css';

const API_URL = "https://rickandmortyapi.com/api";

const Home = () => {

    const [characters, setCharacters] = useState([]);

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
            <button>
                <Link to="/characters" className="btn">View All</Link>
            </button>
            <div class="carousel">
                <CardCarousel characters={characters} />
            </div>
        </div>

    );
}

export default Home;