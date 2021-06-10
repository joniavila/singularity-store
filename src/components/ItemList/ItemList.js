import React,{useState } from 'react';
import Item from '../Item/Item'
import ItemsMock from '../../itemsMock.json'
import CardColumns from 'react-bootstrap/CardColumns'

function ItemList() {
    const [dataItems , setItems] = useState([])
    const obtener = new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(ItemsMock);
          }, 3000);
    });
    obtener.then( data => {
        if(data){
            setItems(data.items)
            console.log('Items cargados con exito')
        }
    }).catch((e)=>{
        console.log(e)
    })
    return (
        <div>
            <CardColumns>
            {dataItems.map( item => <Item key={item.id} item={item}/> )}
            </CardColumns>
        </div>
    );
}

export default ItemList;