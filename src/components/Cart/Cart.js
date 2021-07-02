import React, { useEffect,useContext } from 'react';
import CartContext from '../Context/CartContext';

const Cart = () => {
    // const [productos,setProductos] = useState()
    const { getAll } = useContext(CartContext);
    useEffect(()=>{
       let productos = getAll()
       console.log(productos)
    })
    return (
        <div>
        </div>
    );
};

export default Cart;