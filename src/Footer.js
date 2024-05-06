import React from "react";
import logo from './Logo.svg';
import facebook from './images/facebook.png';
import twitter from './images/twitter.png';
import instagram from './images/instagram.png';
import youtube from './images/youtube.png';
import email from './images/email.png';
import address from './images/gps.png';
import phone from './images/phone-call.png';

function Footer() {
    return (
        <footer className="Footer">
            <div className="logos">
                <img className="logofooter" src={logo} alt="Little Lemon logo"/>
                <div className="logocontainer">
                    <div className="footerlink">
                        <a href="https://www.facebook.com" target="_blank" rel="noreferrer" > <img src={facebook} alt="facebook"/></a>
                        <a href="https://www.twitter.com" target="_blank" rel="noreferrer" ><img src={twitter} alt="twitter"/></a>
                        <a href="https://www.youtube.com" target="_blank" rel="noreferrer" ><img src={youtube} alt="yotube" /></a>
                        <a href="https://www.instagram.com" target="_blank" rel="noreferrer" ><img src={instagram} alt="instagram" /></a>

                    </div>
                </div>
            </div>
            <div className="containercont">

            <ul className="contacts">
                <li><img className="phone" src={phone} alt="phone" /><p>+41216910586</p></li>
                <li> <img className="email"src={email} alt="email" /><p>littlelemon@gmail.com</p></li>
                <li><img className="address"src={address} alt="map address" /><p>1622 Peaceful Lane, Cleveland, Ohio, 44115</p></li>
            </ul>

            </div>

        </footer>
    )
}

export default Footer;