import React from 'react';
import Item from '../Item/Item'
import { Link } from 'react-router-dom';
import CardColumns from 'react-bootstrap/CardColumns'

function ItemList({dataItems}) {
    return (
        <div>
            <CardColumns>
            {dataItems.map( item => <Link to={`/item/${item.id}`} key={item.id}><Item item={item}/></Link>)}
            </CardColumns>
        </div>
    );
}

export default ItemList;