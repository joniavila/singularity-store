import React, { useContext, useEffect } from 'react';
import {useState} from 'react'
import './navBar.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import CartWidget from '../CartWidget/CartWidget'
import {Link}  from 'react-router-dom';
import ItemsMock from '../../itemsMock.json'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import CartContext from '../Context/CartContext';

function NavBar() {
    const [categories , setCategories] = useState([])
    const [carrito , setCarrito] = useState(null)
    const {cacheSize} = useContext(CartContext)

    useEffect(()=>{
        let data = ItemsMock.items
        let categorias = [] 
        for (var item of data){
            // eslint-disable-next-line no-loop-func
            if(!categorias.some(e => e.id === item.idCategory))
                {
                categorias.push(
                    {id:item.idCategory,
                    name:item.category})
            }
        }
        setCategories(categorias)
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
                {categories.map( item => <Link key={item.id} to={`/categories/${item.id}`}><Nav as="button" >{item.name}</Nav> </Link>)}
                 
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