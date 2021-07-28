import React, { useContext, useEffect } from 'react';
import {useState} from 'react'
import './navBar.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import CartWidget from '../CartWidget/CartWidget'
import {Link}  from 'react-router-dom';
// import ItemsMock from '../../itemsMock.json'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import CartContext from '../Context/CartContext';
import {getFirestore} from '../../firebase/index'

function NavBar() {
    const [categories , setCategories] = useState([])
    const [carrito , setCarrito] = useState(null)
    const {cacheSize} = useContext(CartContext)

    useEffect(()=>{
        const db = getFirestore();
        const itemCollection = db.collection('categories');
        itemCollection.get().then(querySnapshot => {
            if (querySnapshot.size === 0) {
                console.log('No results');
            }
                setCategories(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
            });

        let cantidad = cacheSize
        setCarrito(cantidad)
    },[cacheSize])
        return (
            <Navbar bg="dark" variant="" expand="lg">
                <Link to="/">
                <Navbar.Brand href="#home" as="h1">
                <CartWidget />
                SINGULARITY STORE
                </Navbar.Brand>  
                </Link>
                {categories.map( item => <Link key={item.id} to={`/categories/${item.id}`}><Nav as="button" >{item.category}</Nav> </Link>)}
                 
                <Link to='/cart'>
                    <Nav as="button">
                        {carrito ? carrito: '0'}
                        <ShoppingCartIcon />
                    </Nav>
                </Link>
                
            </Navbar>
        );
    }

export default NavBar;