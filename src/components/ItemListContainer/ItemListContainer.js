import React, { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList'
import ItemsMock from '../../itemsMock.json'
import { useParams } from 'react-router-dom';
import LinearProgress from '@material-ui/core/LinearProgress';


function ItemListContainer() {
        const {id} = useParams()
        const [data , setItems] = useState([])
        const [loading, setLoading] = useState(true)
        useEffect(()=>{
            let productos = []
            const obtener = new Promise((resolve,reject) => {
                setTimeout(() => {
                    resolve(ItemsMock);
                }, 3000);
            });
            obtener.then( res => {
                if(id !== undefined){
                    for (var item of res.items){
                        if(item.idCategory === parseInt(id)){
                            productos.push(item)
                        }
                    }
                    setItems(productos)
                }else{
                    setItems(res.items)
                }
                setLoading(false)
            }).catch((e)=>{
                console.log(e)
            })
        },[id])
        return (
            <div>
            { loading ? 
            <LinearProgress color="secondary" />
            : null }
            <ItemList dataItems={data}/>
            </div>
        );
    }


export default ItemListContainer;