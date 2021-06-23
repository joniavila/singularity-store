import React from 'react';
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Image from 'react-bootstrap/Image'
import { Link } from 'react-router-dom';
// import ItemCount from '../ItemCount/ItemCount';

function Item({item}) {
    return (
        <div>
            <Card style={{ width: '18rem', flex: 1}} bg='dark' border="warning">
            <Link to={`/item/${item.id}`} > 
                <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/${item.pictureUrl}`} as={Image} fluid={true} />
                <Card.Body style={{color: 'blanchedalmond'}}>
                    <Card.Title>{item.title}</Card.Title>
                    <Form.Label>CATEGORIA: {item.category}</Form.Label> <br/>
                    <Form.Label>PRECIO: {item.stock}</Form.Label>
                </Card.Body>
            </Link>
            <br />
            </Card>
        </div>
    );
}

export default Item;