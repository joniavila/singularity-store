import React, { useState } from 'react';
import ItemsMock from '../../itemsMock.json'
import { useParams } from 'react-router';
import LinearProgress from '@material-ui/core/LinearProgress';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
    const [item,setItem] = useState({})
    const [loading, setLoading] = useState(true)
    const {id} = useParams()
    const obtener = new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(ItemsMock);
          }, 2000);
    });
    obtener.then( data => {
        if(data){
            setItem(data.items[id])
            setLoading(false)
        }
    }).catch((e)=>{
        console.log(e)
    })
    return (
        <div>
        { loading ? 
            <LinearProgress color="secondary" />
            :
            <div style={{display: 'flex' }}>
                <ItemDetail item={item} /> 
            </div>
        }
        </div>
    );
};

export default ItemDetailContainer;