import React, { useEffect } from 'react';
import {useState} from 'react'
import './navBar.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import CartWidget from '../CartWidget/CartWidget'
import {Link}  from 'react-router-dom';
import ItemsMock from '../../itemsMock.json'
// import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'

function NavBar() {
    const [categories , setCategories] = useState([])
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
    },[])
        return (
            <Navbar bg="dark" variant="dark" expand="lg">
                <Link to="/">
                <Navbar.Brand href="#home" as="h1">
                <CartWidget />
                SINGULARITY STORE
                </Navbar.Brand>  
                </Link>
                {categories.map( item => <Nav as="button" key={item.id}><Link to={`/categories/${item.id}`}>{item.name}</Link></Nav> )}
                <NavBar>
                {/* <ShoppingCartIcon /> */}
                </NavBar>
            </Navbar>
        );
    }

export default NavBar;