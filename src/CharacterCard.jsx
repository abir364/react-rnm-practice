import React from "react";


const CharacterCard = ({ character }) => {
    return (
        <div className="character">
            <div>
                <img
                    src={
                        character.image !== ""
                            ? character.image
                            : "https://via.placeholder.com/300/000000/FFFFFF/?text=rNm-page"
                    }
                    alt={character.name}
                />
            </div>
            <div className="char-text">
                <span>{character.name}</span>
            </div>
        </div>
    );
};

export default CharacterCard;
