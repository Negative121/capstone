import React, { useState , useRef, useEffect} from "react";
import logo from './images/Logo.svg';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import burger from './images/burger-bar.png'
import { HashLink } from "react-router-hash-link";

const Navbar = styled.nav`
  background-color: white;
  color: white;
  display: flex;
  padding: 1rem;
  top:0;
  align-items: center;
  z-index:7;
  display: flex;
  position:sticky;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  @media (max-width: 768px) {
    display:flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content:space-between;
  }


`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-family: 'Sans Serif';
  order:1;
`;

const NavLinks = styled.div`
font-family: 'Karla';
font-size: 18px;
font-weight: bold;
line-height: 1.5;

  order:2;
  a {
    color: black;
    text-decoration: none;
    margin-right: 1rem;

    &:hover {
      color:#EE9972;
    }
  }
  @media (max-width: 768px) {
    display: ${props => props.isOpen ? 'flex' : 'none'};
    flex-direction: column;
    align-items: center;
    row-gap:2%;
  }
  @media (max-width: 768px) {
    padding: 10px;
    
  }

`;
const MenuIcon = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    cursor: pointer;
    order:3;
    margin-top:4px;
  }
`;
const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin-right: 1rem;

`;


function Nav() {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);

  const headerRef = useRef();

  const handleClick = () => {
    navigate("/")
    window.scrollTo(0,0)
  }

  useEffect(() => {
    let prevScrollPos = window.scrollY;

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const headerElement = headerRef.current;
      if (prevScrollPos > currentScrollPos) {
        headerElement.style.transform = "translateY(0)";
      }
      else {
        headerElement.style.transform = "translateY(-100%)"
      }
      prevScrollPos = currentScrollPos;
    }
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])


  return (
    <Navbar ref={headerRef} fixed="top">
      <button style={{border:0, background:'none'}} onClick={handleClick}>
      <Logo><img src={logo} alt="Little Lemon logo"/></Logo></button>
      <MenuIcon onClick={() => setIsOpen(!isOpen)}>
        <div><img src={burger} alt="burger menu" /></div>
      </MenuIcon >
      <NavLinks isOpen={isOpen}>
      <HashLink to="/#specials" className="nav-item" >Specials</HashLink>
      <HashLink to="/#testimonials" className="nav-item" >Testimonials</HashLink>
      <HashLink to="/#aboutus" className="nav-item">About us</HashLink>
      <NavLink to="/reserve" className="nav-item">Reserve</NavLink>
      </NavLinks>
    </Navbar>
  );
}


export default Nav; 