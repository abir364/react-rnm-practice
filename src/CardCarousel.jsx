import React from "react";

// import CharacterCard from "./CharacterCard";

import Slider from "react-slick";


const CardCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        // <Slider {...settings}>
        //     {/* {
        //         characters.map(
        //             (cast) => (
        //                 <div>
        //                     <img src={cast.image} alt={cast.name} />
        //                     <span>{cast.name}</span>
        //                 </div>
        //             )
        //         )
        //     }  */}
        //     <h1>1</h1>
        //     <h1>2</h1>
        //     <h1>3</h1>
        // </Slider>
        <Slider {...settings}>
            <div>
                <p>1</p>
            </div>
            <div>
                <p>2</p>
            </div>
            <div>
                <p>3</p>
            </div>
            <div>
                <p>4</p>
            </div>
            <div>
                <p>5</p>
            </div>
            <div>
                <p>6</p>
            </div>
        </Slider>
    );
};

export default CardCarousel;