import React, { Component } from 'react';

class ItemListContainer extends Component {
    render() {
        return (
            <div>
                {this.props.name}
            </div>
        );
    }
}

export default ItemListContainer;