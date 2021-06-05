import React, { Component } from 'react';
import ItemCount from '../ItemCount/ItemCount'

class ItemListContainer extends Component {
    render() {
        return (
            <div>
                {this.props.name}
                <ItemCount stock="5"/>
            </div>
        );
    }
}

export default ItemListContainer;