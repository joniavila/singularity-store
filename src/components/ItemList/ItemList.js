import React from 'react';
import Item from '../Item/Item'
import CardColumns from 'react-bootstrap/CardColumns'

function ItemList({dataItems}) {
    return (
        <div>
            <CardColumns>
            {dataItems.map( item =><Item  key={item.id} item={item}/>)}
            </CardColumns>
        </div>
    );
}

export default ItemList;