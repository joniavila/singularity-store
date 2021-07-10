import React ,{useState, useContext}from 'react';
import Card from 'react-bootstrap/Card'
// import Form from 'react-bootstrap/Form'
import ItemCount from '../ItemCount/ItemCount';
import { Button, Image } from 'react-bootstrap';
import CartContext from '../Context/CartContext';
import {Link}  from 'react-router-dom';

const ItemDetail = ({item}) => {
    const [evento, setEvento] = useState(true)
    const { addToCache } = useContext(CartContext);
    function onAdd (cantidad) {
        addToCache(item,cantidad)
        setEvento(false)
    }
    return (
        <div style={{display: 'flex', margin:'20px' }}>
            <Image src={`${process.env.PUBLIC_URL}/${item.pictureUrl}`} thumbnail fluid={true} />
            <Card style={{height:'100%' }} bg='dark'>
                <Card.Body>
                    <Card.Title as='h1'>{item.title}</Card.Title>
                    <Card.Title>{item.caracteristicas}</Card.Title>
                    <Card.Title as='h3'>PRECIO: {item.price}</Card.Title>
                    { evento ? (<ItemCount stock={item.stock} initial='0' onAdd={onAdd} />) :
                    ( 
                    <Link to='/cart' > 
                        <Button>
                            Terminar Compra
                        </Button>
                    </Link>
                    )}
                    <Button onClick={()=>{setEvento(true)}}> CAMBIAR</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ItemDetail;