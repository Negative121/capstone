import React from 'react';
import bannerimg from "./images/restauranfood.jpg"
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";

function Banner() {
    const navigate = useNavigate();

    function handleClick(){
        navigate("/reserve");
    }

    return (
        <article className="Banner" style={{ backgroundColor: '#495E57' }}>
            <div className="bannercontent" >
                <h1 style={{ color: '#F4CE14' }}>Little Lemon</h1>
                <h3 style={{ color: 'white' }}>Chicago</h3>
                <p style={{ color: 'white' }}>Little Lemon is a charming Mediterranean eatery, exuding the vibrant flavors of the region.
                    Its cozy ambiance and rustic decor set the stage for a culinary journey through Greece, Italy, and Spain.
                    From fresh mezze platters to grilled seafood and hearty mains, each dish bursts with Mediterranean freshness.
                    The menu features locally-sourced ingredients and a carefully curated wine list. </p>
                <div className="btnn">
                    <Button variant="warning" onClick={handleClick} style={{ backgroundColor: '#F4CE14', fontFamily: 'Karla', fontWeight: 'bold', height: '60px', width: '200px', fontSize: '18px' }} >Reserve a Table</Button>
                </div>
            </div>
            <img className="bannerimg" src={bannerimg} alt="A plate with Bruchettas" />

        </article>
    )
}

export default Banner;