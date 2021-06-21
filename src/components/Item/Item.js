import React from 'react';
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import ItemCount from '../ItemCount/ItemCount'
import Image from 'react-bootstrap/Image'

function Item({item}) {
    function onAdd () {
        console.log('se agrego el producto')
        alert('Se agrego el producto al carrito')
    }
    console.log(process.env.PUBLIC_URL)
    return (
        <div>
            <Card style={{ width: '18rem', flex: 1}} bg='dark' border="danger">
                <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/${item.pictureUrl}`} as={Image} fluid={true} />
                <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Form.Label>PRECIO: {item.stock}</Form.Label>
                    <ItemCount stock={item.stock} initial='0' onAdd={onAdd} />  
                </Card.Body>
            </Card>
        </div>
    );
}

export default Item;