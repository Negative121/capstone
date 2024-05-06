import React from 'react';
import george from './images/george.jpg'
import mary from './images/mary.jpg'
import gloria from './images/gloria.jpg'
import john from './images/john.jpg'
import star from './images/star.png'
import Card from 'react-bootstrap/Card';

function Testimonials() {
    return (
        <section style={{ background: '#495E57' }}>
            <h1 className="titletest" id="testimonials">Testimonials</h1>
            <div className="Testimonials" >
                <Card className="rating" style={{ width: '18rem', backgroundColor: '#FBDABB' }}>
                    <Card.Body>
                        <div className="infos">

                            <Card.Text style={{ fontFamily: "Karla", fontSize: "20px", fontWeight: 'bold' }}>Rating</Card.Text>
                            <div className="stars">
                                <img src={star} alt="A star" /> <img src={star} alt="A star" /> <img src={star} alt="A star" /> <img src={star} alt="A star" />
                            </div>
                        </div>
                        <div className="testcontainer">
                            <Card.Img variant="top" src={john} alt="John, a middle age man" style={{ width: '50%', display: 'flex', borderRadius: '16px' }} />
                            <Card.Title style={{ display: 'flex' }}>John</Card.Title>
                        </div>
                        <Card.Text style={{ fontFamily: "Karla", fontSize: "16px" }}>
                            "The succulent steak melted in my mouth, perfectly seasoned and cooked to perfection,
                            while the accompanying truffle mashed potatoes added a luxurious touch to an already divine
                            dining experience."
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card className="rating" style={{ width: '18rem', backgroundColor: '#FBDABB' }}>
                    <Card.Body>
                        <div className="infos">

                            <Card.Text style={{ fontFamily: "Karla", fontSize: "20px", fontWeight: 'bold' }}>Rating</Card.Text>
                            <div className="stars">
                                <img src={star} alt="A star" /> <img src={star} alt="A star" /><img src={star} alt="A star" /> <img src={star} alt="A star" /> <img src={star} alt="A star" />
                            </div>
                        </div>
                        <div className="testcontainer">
                            <Card.Img variant="top" src={mary} alt="Mary, a young asian woman" style={{ width: '50%', display: 'flex', borderRadius: '16px' }} />
                            <Card.Title style={{ display: 'flex' }}>Mary</Card.Title>
                        </div>
                        <Card.Text style={{ fontFamily: "Karla", fontSize: "16px" }}>
                            "The aroma of freshly baked bread filled the air as I savored the artisanal
                            goat cheese. With each delicate bite, the creamy cheese
                            mingled with the sweet fig jam, creating a symphony of flavors that delighted
                            my senses."
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="rating" style={{ width: '18rem', backgroundColor: '#FBDABB' }}>
                    <Card.Body>
                        <div className="infos">

                            <Card.Text style={{ fontFamily: "Karla", fontSize: "20px", fontWeight: 'bold' }}>Rating</Card.Text>
                            <div className="stars">
                                <img src={star} alt="A star" /> <img src={star} alt="A star" /> <img src={star} alt="A star" />
                            </div>
                        </div>
                        <div className="testcontainer">
                            <Card.Img variant="top" src={george} alt="George, an older man" style={{ height: '85px', width: '50%', objectFit: 'cover', display: 'flex', borderRadius: '16px' }} />
                            <Card.Title style={{ display: 'flex' }}>George</Card.Title>
                        </div>
                        <Card.Text style={{ fontFamily: "Karla", fontSize: "16px" }}>
                            "The tangy burst of citrus in the lemon shrimp transported me to shores,
                            while the hint of chili added a kick to every  bite.
                            It was a harmonious fusion of flavors that left a zest on my palate,
                            a culinary escapade I'll eagerly revisit."
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="rating" style={{ width: '18rem', backgroundColor: '#FBDABB' }}>
                    <Card.Body>
                        <div className="infos">

                            <Card.Text style={{ fontFamily: "Karla", fontSize: "20px", fontWeight: 'bold' }}>Rating</Card.Text>
                            <div className="stars">
                                <img src={star} alt="A star" /> <img src={star} alt="A star" /> <img src={star} alt="A star" /><img src={star} alt="A star" />
                            </div>
                        </div>
                        <div className="testcontainer">
                            <Card.Img variant="top" src={gloria} alt="Gloria, an african woman" style={{ width: '50%', display: 'flex', borderRadius: '16px' }} />
                            <Card.Title style={{ display: 'flex' }}>Gloria</Card.Title>
                        </div>
                        <Card.Text style={{ fontFamily: "Karla", fontSize: "16px" }}>
                            "The smoothness of the chocolate mousse was punctuated by the intense
                            richness of cocoa, creating a decadent finale to my dining experience.
                            Each spoonful was a luxurious journey to chocolate heaven,
                            leaving me enchanted."
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </section>
    )
}

export default Testimonials;