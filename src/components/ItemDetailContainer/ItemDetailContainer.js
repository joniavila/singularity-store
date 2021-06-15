import React, { useState } from 'react';
import ItemsMock from '../../itemsMock.json'
// import Card from 'react-bootstrap/Card'
// import Form from 'react-bootstrap/Form'
// import ItemCount from '../ItemCount/ItemCount';
// import { Image } from 'react-bootstrap';

import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
    const [item,setItem] = useState({})
    const obtener = new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(ItemsMock);
          }, 2000);
    });
    obtener.then( data => {
        if(data){
            setItem(data.items[0])
            console.log('Items cargados con exito')
        }
    }).catch((e)=>{
        console.log(e)
    })
    return (
        <div style={{display: 'flex' }}>
           <ItemDetail item={item} />
        </div>
    );
};

export default ItemDetailContainer;