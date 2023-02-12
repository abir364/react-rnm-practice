import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import CharacterCard from "./CharacterCard";
// import CardCarousel from "./CardCarousel";
// import SearchIcon from "./search.svg";
import Home from "./Home";
import Characters from "./Characters";
import './App.css';
import SharedLayout from "./SharedLayout";
import Character from "./Character";


const App = () => {

    // renders whatever in there
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element= {<SharedLayout />}>
                    <Route index element={<Home />} />
                    <Route path="/Characters" element= {<Characters />} />
                    <Route path="/Characters/:characterId" element= {<Character />} />
                </Route>
            </Routes>
        </BrowserRouter>

    );
}

export default App;