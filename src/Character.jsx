import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';

const API_URL = "https://rickandmortyapi.com/api";

const Character = () => {
    const { characterId } = useParams();

    const [cast, setCast] = useState({});

    const getCast = async (id) => {
        const response = await fetch(`${API_URL}/character/${id}`);
        const data = await response.json();

        setCast(data);

    };

    getCast(characterId);

    return (
        <div>
            <Link to="/characters"><button>Back to characters</button></Link>
            <div>{cast.id}</div>
        </div>
    );
}

export default Character;