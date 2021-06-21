import React, { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList'
import ItemsMock from '../../itemsMock.json'
import { useParams } from 'react-router-dom';

function ItemListContainer() {
        const {id} = useParams()
        const [data , setItems] = useState([])
        
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
                        console.log(item)
                        if(item.idCategory === parseInt(id)){
                            productos.push(item)
                        }
                    }
                    setItems(productos)
                }else{
                    setItems(res.items)
                }
            }).catch((e)=>{
                console.log(e)
            })
        },[id])
        return (
            <div>
                <ItemList dataItems={data}/>
            </div>
        );
    }


export default ItemListContainer;