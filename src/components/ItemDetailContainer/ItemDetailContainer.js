import React, { useState } from 'react';
import ItemsMock from '../../itemsMock.json'
import { useParams } from 'react-router';

import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
    const [item,setItem] = useState({})
    const {id} = useParams()
    const obtener = new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(ItemsMock);
          }, 2000);
    });
    obtener.then( data => {
        if(data){
            setItem(data.items[id])
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