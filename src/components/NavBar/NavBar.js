import React, { Component } from 'react';
import './navBar.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import CartWidget from '../CartWidget/CartWidget'

class NavBar extends Component {
    render() {
        function handleClick(e) {
            e.preventDefault();
            console.log(`Se selecciono la categoria ${e.target.innerText}`);
        }
        return (
            <Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Brand href="#home" as="h1">
                <CartWidget />
                SINGULARITY STORE
                </Navbar.Brand>
                <Nav as="button" onClick={handleClick}> PRODUCTO A</Nav>
                <Nav as="button" onClick={handleClick}> PRODUCTO B</Nav>
                <Nav as="button" onClick={handleClick}> PRODUCTO C</Nav>
                <Nav as="button" onClick={handleClick}> PRODUCTO D</Nav>
            </Navbar>
        );
    }
}

export default NavBar;