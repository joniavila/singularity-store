import React, { Component } from 'react';
import ItemCount from '../ItemCount/ItemCount'

class ItemListContainer extends Component {
    onAdd = () => {
        console.log('se agrego el producto')
        alert('Se agrego el producto al carrito')
    }
    render() {
        return (
            <div>
                {this.props.name}
                <ItemCount stock="5" initial='0' onAdd={this.onAdd}/>
            </div>
        );
    }
}

export default ItemListContainer;