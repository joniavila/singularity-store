import React from 'react';
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import ItemCount from '../ItemCount/ItemCount';
import { Image } from 'react-bootstrap';

const ItemDetail = ({item}) => {
    function onAdd () {
        console.log('se agrego el producto')
        alert('Se agrego el producto al carrito')
    }
    console.log(item)
    return (
        <div style={{display: 'flex' }}>
            <Image src={item.pictureUrl} fluid style={{width:'50%',height:'90%'}}/>
            <Card style={{height:'90%' }} bg='dark'>
                <Card.Body>
                    <Card.Title as='h1'>{item.title}</Card.Title>
                    <Card.Title>{item.caracteristicas}</Card.Title>
                    <Form.Label as='h2'>STOCK: {item.stock}</Form.Label>
                    <ItemCount stock={item.stock} initial='0' onAdd={onAdd} />  
                </Card.Body>
            </Card>
        </div>
    );
};

export default ItemDetail;