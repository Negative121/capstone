import React from 'react';
import chef from './images/restaurantchef.jpg'
import mario from './images/marioadrian.jpg'

function AboutUs() {
    return (
        <section >
            <article className="About" id="aboutus">
                <div className="aboutus" >
                    <h1>About us</h1>
                    <p className="aboutustext">Little Lemon, a Mediterranean restaurant, was founded in the 1990s by Maria and Giorgio,
                        Greek immigrants. With a passion for authentic cuisine, they created a cozy spot known for its
                        traditional flavors and welcoming atmosphere. Over the years, it expanded while maintaining its
                        commitment to fresh ingredients and family recipes. Today, Little Lemon is a beloved dining destination,
                        offering classic dishes alongside innovative creations, all served with a warm smile.</p>
                    <div className="imgcontainer">
                        <div className="gallery">
                            <div className="imgtop">
                                <img src={chef} alt="Two chefs talking"/></div>
                            <div className="imgbottom">
                                <img src={mario} alt="A chef seasoning"/>
                            </div> 
                        </div>
                    </div>

                </div>
            </article>
        </section>
    )
}

export default AboutUs;