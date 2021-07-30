import React ,{useState, useContext}from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Button, Image } from 'react-bootstrap';
import CartContext from '../Context/CartContext';
import {Link}  from 'react-router-dom';
import './ItemDetail.css';

const ItemDetail = ({item}) => {
    const [evento, setEvento] = useState(true)
    const { addToCache } = useContext(CartContext);
    function onAdd (cantidad) {
        addToCache(item,cantidad)
        setEvento(false)
    }
    return (
        <div style={{display: 'flex', margin:'20px' }}>
            <div style={{width:'60%', height:'100%'}}>
            <Image src={`${process.env.PUBLIC_URL}/${item.pictureUrl}`} rounded />
            </div>
            <div style={{height:'100%',marginLeft:'15px',width:'40%'}} bg=''>
                    <h1>{item.title}</h1>
                    <ul>
                    {item.caracteristicas.split('|').map(e => {
                        return <li style={{textAlign: 'initial'}}>{e}</li>
                    })}
                    </ul>
                    <h3>PRECIO: {item.price}</h3>
                    <div style={{margin: '30px', textAlignLast: 'center'}}>
                        { evento ? (<ItemCount  stock={item.stock} initial='0' onAdd={onAdd} />) :
                        ( 
                            <Link to='/cart' > 
                            <Button>
                                Terminar Compra
                            </Button>
                        </Link>
                        )}
                    </div>
            </div>
        </div>
    );
};

export default ItemDetail;