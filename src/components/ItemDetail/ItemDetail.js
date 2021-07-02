import React ,{useState, useContext}from 'react';
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import ItemCount from '../ItemCount/ItemCount';
import { Button, Image } from 'react-bootstrap';
import CartContext from '../Context/CartContext';

const ItemDetail = ({item}) => {
    const [evento, setEvento] = useState(true)
    const { addToCache } = useContext(CartContext);
    function onAdd (cantidad) {
        let productoAagregar = {
            caracteristicas: item.caracteristicas,
            category: item.category,
            id: item.id,
            idCategory: item.idCategory,
            pictureUrl: item.pictureUrl,
            price: item.price,
            stock: item.stock,
            title: item.title,
            cantidad: cantidad
        }
        addToCache(productoAagregar)
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
                    <Button onClick={()=>{setEvento(true)}}> CAMBIAR</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ItemDetail;