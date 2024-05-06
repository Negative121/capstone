import React from "react";
import './Details.css';
import { Button , Form } from 'react-bootstrap';
import salad from "./images/greeksalad.jpg"
import bg from './images/marioadrianb.jpg';
import Card from 'react-bootstrap/Card';

function Details() {
    const myStyle = {
        backgroundImage: `url(${bg})`,
        height: "60vh",
        backgroundSize: "cover",
        maxWidth: '100%',
    }

    return (
        <main className="reserve">
            <div className="header" >
                <h1>Your details</h1>
            </div>
            <div className="bg" style={myStyle}>
                <div className="main" >
                    <div className="prevdetails">
                        <h3>friday, april 12 - 4 guests - 21.00</h3>
                    </div>
                    <Card className="main">
                        <Card.Img variant="top" src={salad} style={{borderRadius:'0px'}} />
                        <Card.Body className="menubg">
                            <div className="buttons">
                                <Form>
                                    <div className="inline">
                                    <div className="name">
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Control type="firstname" placeholder="First Name" />
                                    </Form.Group>
                                    </div>
                                    <div className="name">
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Control type="lastname" placeholder="Last Name" />
                                    </Form.Group>
                                    </div>
                                    </div>
                                    <div className="inline">
                                    <div className="name">
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Control type="email" placeholder="Email" />
                                    </Form.Group>
                                    </div>
                                    <div className="name">
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Control type="number" placeholder="Phone Number" />
                                    </Form.Group>
                                    </div>
                                    </div>
                                    <Form.Select aria-label="Default select example" size="lg" style={{ backgroundColor: '#FBDABB', borderRadius:0, borderBottom: '2px solid black' , borderRight: 'none',borderLeft: 'none',borderTop: 'none' }}>
                                    <option value="occasion" hidden>Occasion</option>
                                        <option value="1">Birthday</option>
                                        <option value="2">Anniversary</option>
                                    </Form.Select>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Control type="request" placeholder="Add Special Request" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Control type="comment" placeholder="Comment" />
                                    </Form.Group>




                                </Form>

                            </div>
                            <div className="reservebtn">
                                <a href={`/date/details/confirmation`}>
                                    <Button variant="warning"
                                        style={{
                                            backgroundColor: '#F4CE14', fontFamily: 'Karla',
                                            fontWeight: 'bold', height: '60px', width: '200px',
                                            fontSize: '18px'
                                        }} >Confirm Reservation</Button>
                                </a>
                            </div>

                        </Card.Body>

                    </Card>
                </div>
            </div>

        </main>
    )
}

export default Details;