import React, { useEffect,useState,useContext } from 'react';
import CartContext from '../Context/CartContext';
import { Table } from 'react-bootstrap';
import Toast from 'react-bootstrap/Toast'
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
import {Link}  from 'react-router-dom';
import { getFirestore } from '../../firebase';
import firebase from 'firebase';
import LinearProgress from '@material-ui/core/LinearProgress';
import { Button } from 'react-bootstrap';

const Cart = () => {
    const [productos,setProductos] = useState([])
    const {getAll,removeItem,clearCache} = useContext(CartContext)
    const [loading, setLoading] = useState(false)
    const [show, setShow] = useState(false);
    const [idOrden, setIdOrden] = useState(null)
    useEffect(()=>{
        let productosEnCache = []
        productosEnCache = getAll()
        setProductos(productosEnCache)
    },[getAll])

    const eliminarProducto = (item)=>{
        console.log('productos a Eliminar:',item)
        removeItem(item)
    }
    const confirmarOrden = ()=>{
        setLoading(true)
        crearCart().then((res)=> {
                const db = getFirestore()
                const order = db.collection('orders')
                const newOrder = {
                    buyer: {
                      email: 'jonasavila@gmail.com',
                      name: 'Jonas Avila',
                      phone: '+3512312312'
                    },
                    date: firebase.firestore.Timestamp.fromDate(new Date()),
                    items: res.items,
                    total: res.totalCart
                  };
                console.log(newOrder)
                order.add(newOrder).then(({id})=>{
                    setIdOrden(id)
                    setLoading(false)
                    setShow(true)
                    // limpia el cart para poder generar uno nuevo
                    clearCache()
                    console.log('Orden cargada con exito: ID' ,id)
                }).catch(error =>{
                    console.log(error)
                })
            })
    }

    // crea el array con los productos cargados en el carrito y calcula el total
    const crearCart = ()=>{
        let totalCart = calcularTotal()
        let items = productos.map( e=> {
            return{
                id: e.id,
                title: e.title,
                price: e.price
            }
        })
        return Promise.resolve({items,totalCart}) 
    }
    // calcula el total en base a los productos
    const calcularTotal = ()=>{
        let totalAux = 0
        for(var item of productos){
            totalAux += item.price * item.cantidad
        }
        return totalAux
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
                <td key={item.id}> <Button variant='dark' onClick={()=>{eliminarProducto(item)}}><DeleteForeverOutlinedIcon style={{color:'red'}}/></Button></td>
                </tr>
                })
               : <div> 
                   NO HAY PRODUCTOS AGREGADOS EN EL CARRITO. 
                   PUEDE AGREGAR UNO <Link to='/'>DESDE AQUI</Link>
                </div>}
            </tbody>
        </Table>
        <Button disabled={productos.length===0} onClick={()=>{confirmarOrden()}}>CONFIRMAR ORDEN</Button>
        { loading ? 
            <LinearProgress color="secondary" />
            :
            <Toast show={show} onClose={() => setShow(false)} delay={3000} autohide>
                    <Toast.Header>ORDEN CONFIRMADA</Toast.Header>
                    <Toast.Body>LA ORDEN FUE GENERADA CON EXITO , SU ID ES: {idOrden}
                    </Toast.Body>
            </Toast>
        }
        </div>
    );
};

export default Cart;