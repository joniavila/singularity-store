import React, { useEffect,useState,useContext } from 'react';
import CartContext from '../Context/CartContext';
import { Table } from 'react-bootstrap';
import { Button } from '@material-ui/core';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
import {Link}  from 'react-router-dom';

const Cart = () => {
    const [productos,setProductos] = useState([])
    const {getAll,removeItem} = useContext(CartContext)
    useEffect(()=>{
        let productosEnCache = []
        productosEnCache = getAll()
        setProductos(productosEnCache)
        // console.log(productos)
    },[getAll])

    const eliminarProducto = (item)=>{
        console.log('productos a Eliminar:',item)
        removeItem(item)
    }
    return (
        <div>
        <Table variant="dark">
            <thead>
                <tr>
                <th>ID</th>
                <th>TITULO</th>
                <th>CATEGORIA</th>
                <th>PRECIO</th>
                <th>CANTIDAD</th>
                <th>ACCIONES</th>
                </tr>
            </thead>
            <tbody>
                { productos.length ? productos.map((item) => {
                return <tr key={item.id}> 
                <td key={item.id}>{item.id}</td>
                <td key={item.id}>{item.title}</td>
                <td key={item.id}>{item.category}</td>
                <td key={item.id}>{item.price}</td>
                <td key={item.id}>{item.cantidad}</td>
                <td key={item.id}> <Button onClick={()=>{eliminarProducto(item)}}><DeleteForeverOutlinedIcon style={{color:'red'}}/></Button></td>
                </tr>
                })
               : <div> 
                   NO HAY PRODUCTOS AGREGADOS EN EL CARRITO. 
                   PUEDE AGREGAR UNO <Link to='/'>DESDE AQUI</Link>
                   </div>}
            </tbody>
        </Table>
        </div>
    );
};

export default Cart;