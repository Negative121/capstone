import bg from './images/marioadrianb.jpg';
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./Reserve.css";

const Reserve = () => {

    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [validated, set_Validated] = useState(false);
    const [guests, setGuests] = useState("");
    const [location, setLocation] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [occasion, setOccasion] = useState('');
    const [request, setRequest] = useState('');
    const [confirm, setConfirm] = useState(false);
    const [email, setEmail] = useState('')
    const [number, setNumber] = useState();
    const submitFn = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        else {
            navigate("/confirmation")
        }
        set_Validated(true);
    };


    const myStyle = {
        backgroundImage: `url(${bg})`,
        height: "80vh",
        backgroundSize: "cover",
        maxWidth: '100%',
    }


    return (

        <main className="reserve">
            <div className="header" >
                <h1>Reserve a Table</h1>
            </div>

            <div className="bg" style={myStyle}>
                <div className="main" >

                    <Card className="main">
                        <Card.Body className="menubg">
                            <Form style={{ margin: '2%' }} noValidate validated={validated} onSubmit={submitFn}>
                                <div className="inline">
                                    <div className="titlecolumn">
                                        <Form.Label style={{ fontFamily: "Karla", fontSize: '18px' }}>Date</Form.Label>
                                        <Form.Group className="inputcont" controlId="formBasicSelect">
                                            <Form.Control
                                                type="date"
                                                name="datepic"
                                                required
                                                placeholder="DateRange"
                                                value={date}
                                                onChange={(e) => setDate(e.target.value)}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                Please select a date.
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </div>
                                    <div className="titlecolumn">
                                        <Form.Group controlId="formBasicSelect">
                                            <Form.Label style={{ fontFamily: "Karla", fontSize: '18px' }}>Time</Form.Label>
                                            <Form.Control
                                                as="select"
                                                required
                                                value={time}
                                                onChange={e => {
                                                    setTime(e.target.value);
                                                }}
                                            >
                                                <option value="">--Please select the time--</option>
                                                <option value="12:00">12.00</option>
                                                <option value="12:30">12.30</option>
                                                <option value="13:00">13.00</option>
                                                <option value="13:30">13.30</option>
                                                <option value="14:00">14.00</option>
                                                <option value="20:00">20.00</option>
                                                <option value="20:30">20.30</option>
                                                <option value="21:00">21.00</option>
                                                <option value="21:30">21.30</option>

                                            </Form.Control>
                                            <Form.Control.Feedback type="invalid">
                                                Please select a time slot.
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </div>
                                </div>
                                <div className="inline">
                                    <div className="titlecolumn">
                                        <Form.Group controlId="formBasicSelect">
                                            <Form.Label style={{ fontFamily: "Karla", fontSize: '18px' }}>Guests</Form.Label>
                                            <Form.Control
                                                as="select"
                                                value={guests}
                                                required
                                                onChange={e => {
                                                    setGuests(e.target.value);
                                                }}
                                            >
                                                <option value="">--Please select the number of guests--</option>
                                                <option value="1 guest">1 guest</option>
                                                <option value="2 guests">2 guests</option>
                                                <option value="3 guests">3 guests</option>
                                                <option value="4 guests">4 guests</option>
                                                <option value="5 guests">5 guests</option>
                                                <option value="6 guests">6 guests</option>
                                                <option value="7 guests">7 guests</option>
                                                <option value="8 guests">8 guests</option>

                                            </Form.Control>
                                            <Form.Control.Feedback type="invalid">
                                                Please select the number of guests.
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </div>
                                    <div className="titlecolumn">
                                        <Form.Group controlId="formBasicSelect">
                                            <Form.Label style={{ fontFamily: "Karla", fontSize: '18px' }}>Location</Form.Label>
                                            <Form.Control
                                                as="select"
                                                value={location}
                                                required
                                                onChange={e => {
                                                    setLocation(e.target.value);
                                                }}
                                            >
                                                <option value="">--Please select a location--</option>
                                                <option value="Inside">Inside</option>
                                                <option value="Outside">Outside</option>
                                            </Form.Control>
                                            <Form.Control.Feedback type="invalid">
                                                Please select the table location.
                                            </Form.Control.Feedback>

                                        </Form.Group>
                                    </div>
                                </div>
                                <div className="inline">
                                    <div className="titlecolumn">
                                        <Form.Group controlId="formBasicSelect">
                                            <Form.Label style={{ fontFamily: "Karla", fontSize: '18px' }}>Occasion</Form.Label>
                                            <Form.Control
                                                as="select"
                                                value={occasion}
                                                onChange={e => {
                                                    setOccasion(e.target.value);
                                                }}
                                            >
                                                <option value="None" defaultValue={'None'}>None</option>
                                                <option value="Birthday">Birthday</option>
                                                <option value="Engagement">Engagement</option>
                                                <option value="Anniversary">Anniversary</option>

                                            </Form.Control>
                                        </Form.Group>
                                    </div>
                                    <div className="titlecolumn">
                                        <Form.Group controlId="username">
                                            <Form.Label style={{ fontFamily: "Karla", fontSize: '18px' }}>Name</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name='name'
                                                required
                                                value={name}
                                                pattern="^[a-zA-Z0-9]+$"
                                                onChange={e => {
                                                    setName(e.target.value);
                                                }}
                                                isInvalid={
                                                    validated &&
                                                    !/^[a-zA-Z0-9]+$/.test(name)
                                                }
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                Please fill in your name.
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </div>
                                </div>
                                <div className="inline">
                                    <div className="titlecolumn">
                                        <Form.Group controlId="email">
                                            <Form.Label style={{ fontFamily: "Karla", fontSize: '18px' }}>Email</Form.Label>
                                            <Form.Control
                                                type="email"
                                                name="email"
                                                required
                                                value={email}
                                                onChange={e => {
                                                    setEmail(e.target.value);
                                                }}
                                                isInvalid={
                                                    validated &&
                                                    !/^\S+@\S+\.\S+$/.test(email)
                                                }
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                Please enter a valid email address.
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </div>
                                    <div className="titlecolumn">
                                        <Form.Group controlId="phoneNumber">
                                            <Form.Label style={{ fontFamily: "Karla", fontSize: '18px' }}>Phone Number</Form.Label>
                                            <Form.Control
                                                type="tel"
                                                name="phoneNo"
                                                required
                                                value={number}
                                                onChange={e => {
                                                    setNumber(e.target.value);
                                                }}
                                                pattern="^\d{10}$"
                                                isInvalid={
                                                    validated &&
                                                    !/^\d{10}$/.test(number)
                                                }
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                Please enter a valid phone number.
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </div>
                                </div>
                                <div className="reqcont">
                                    <div className="request">
                                        <Form.Group controlId="request">
                                            <Form.Label style={{ fontFamily: "Karla", fontSize: '18px' }}>Special Request</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="request"
                                                value={request}
                                                onChange={e => {
                                                    setRequest(e.target.value);
                                                }}
                                                as="textarea"
                                                rows={2}

                                            />
                                        </Form.Group>
                                    </div>
                                </div>
                                <Form.Group>
                                    <Form.Check type={"checkbox"}>
                                        <Form.Check.Input
                                            type={"checkbox"}
                                            defaultChecked={confirm}
                                            value={confirm}
                                            onClick={(e) => {
                                                setConfirm(e.target.checked);
                                            }}
                                        />
                                        <Form.Check.Label style={{ fontFamily: "Karla", fontSize: '18px' }}>Receive confirmation via phone message instead.</Form.Check.Label>
                                    </Form.Check>
                                </Form.Group>
                                <div className="reservebtn">
                                    <Button variant="warning"
                                        type="submit"
                                        style={{
                                            backgroundColor: '#F4CE14', fontFamily: 'Karla',
                                            fontWeight: 'bold', height: '60px', width: '200px',
                                            fontSize: '18px'
                                        }} >Confirm Reservation</Button>
                                </div>
                            </Form>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </main >
    )
}

export default Reserve;