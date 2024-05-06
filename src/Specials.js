import React from 'react';
import salad from "./images/greeksalad.jpg"
import bruchetta from './images/bruchetta.svg'
import dessert from './images/lemondessert.jpg'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Swal from 'sweetalert2'


    function Specials() {
        const handleClick = () => {
        Swal.fire({
            title: "Sweet!",
            text: "Your order has been confirmed.",
            imageUrl: 'https://snibbs.co/cdn/shop/articles/Most_Common_Challenges_of_Being_a_Chef_1000x667.jpg?v=1688648424',
            imageWidth: 400,
            imageHeight: 250,
            imageAlt: "Custom image",
            confirmButtonColor : 'black',
          });
        }
        return (

            <section>
                <div className="Specials" id="specials">
                    <h1>Specials</h1>
                    <div className="specialdish">
                        <Card style={{ width: '24rem', backgroundColor: '#EDEFEE' }}>
                            <Card.Img variant="top" src={salad} />
                            <Card.Body>
                                <Card.Title>Greek salad</Card.Title>
                                <Card.Text>
                                    The famous greek salad of crispy lettuce,
                                    peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.                                </Card.Text>
                                <div className="d-grid gap-2">
                                    <Button variant="warning" onClick={handleClick}>Order Online</Button>
                                </div>
                            </Card.Body>
                        </Card>

                        <Card style={{ width: '24rem', backgroundColor: '#EDEFEE' }}>
                            <Card.Img variant="top" src={bruchetta} />
                            <Card.Body>
                                <Card.Title>Bruchetta</Card.Title>
                                <Card.Text>
                                    Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with himalayan salt and olive oil,
                                    topped with tomatoes.                                </Card.Text>
                                <div className="d-grid gap-2">
                                    <Button variant="warning" onClick={handleClick}>Order Online</Button>
                                </div>
                            </Card.Body>
                        </Card>

                        <Card style={{ width: '24rem', backgroundColor: '#EDEFEE' }}>
                            <Card.Img variant="top" src={dessert} style={{ height: '255px', objectFit: 'cover' }} />
                            <Card.Body>
                                <Card.Title>Lemon Dessert</Card.Title>
                                <Card.Text>
                                    This comes straight from grandma’s recipe book, every last ingredient has
                                    been sourced and is as authentic as can be imagined. Best served cold.</Card.Text>
                                <div className="d-grid gap-2">
                                    <Button variant="warning" onClick={handleClick}>Order Online</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </section>
        )
    }

    export default Specials;