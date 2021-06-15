import React, { Component } from 'react';
import ItemList from '../ItemList/ItemList'
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';

class ItemListContainer extends Component {
    render() {
        return (
            <div>
                <ItemList />
                <ItemDetailContainer />
            </div>
        );
    }
}

export default ItemListContainer;