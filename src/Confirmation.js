import React from "react";
import './Confirmation.css';
import { CardImg } from 'react-bootstrap';
import bg from './images/marioadrianb.jpg';
import Card from 'react-bootstrap/Card';
import chef from './images/restaurantchef.jpg'

function Details(props) {
    const myStyle = {
        backgroundImage: `url(${bg})`,
        height: "77vh",
        backgroundSize: "cover",
        maxWidth: '100%',
    }

    return (
        <main className="reserve">
            <div className="header" >
                <h1>Confirmation</h1>
            </div>
            <div className="bg" style={myStyle}>
                <div className="main" >
                    <Card className="main">
                        <Card.Body className="menubg">
                            <div className="titlecontainer">
                                <div className="title">
                                    <Card.Text className="cardtitle" >Your reservation has been confirmed!</Card.Text>
                                </div>
                            </div>
                            <div className="cardimg">
                                <CardImg className="yolo" src={chef} />
                            </div>

                        </Card.Body>

                    </Card>
                </div>
            </div>

        </main>
    )
}

export default Details;