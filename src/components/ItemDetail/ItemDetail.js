import React ,{useState}from 'react';
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import ItemCount from '../ItemCount/ItemCount';
import { Button, Image } from 'react-bootstrap';

const ItemDetail = ({item}) => {
    const [evento, setEvento] = useState(true)
    function onAdd (cantidad) {
        console.log(evento)
        console.log(cantidad)
        setEvento(false)
    }
    return (
        <div style={{display: 'flex' }}>
            <Image src={`${process.env.PUBLIC_URL}/${item.pictureUrl}`} fluid={true} />
            <Card style={{height:'100%' }} bg='dark'>
                <Card.Body>
                    <Card.Title as='h1'>{item.title}</Card.Title>
                    <Card.Title>{item.caracteristicas}</Card.Title>
                    <Form.Label as='h2'>STOCK: {item.stock}</Form.Label>
                    { evento ? (<ItemCount stock={item.stock} initial='0' onAdd={onAdd} />) :
                    (<Button href='/cart'> Terminar Compra</Button>)}
                </Card.Body>
            </Card>
        </div>
    );
};

export default ItemDetail;