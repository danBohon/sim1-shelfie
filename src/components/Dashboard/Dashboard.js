import React, { Component } from 'react'
import Product from '../../components/Product/Product';
import axios from 'axios';

export default class Dashboard extends Component {
    constructor(props) {
        super();
        this.deleteProduct = this.deleteProduct.bind(this);
    }

    componentDidMount() {
    }

    deleteProduct(id) {
        axios.delete(`api/product/${id}`).then(() => {
            this.props.getInventory();
        })
        
    }

  render() {
      const { inventoryList } = this.props
        
      const result = inventoryList.map( item => {
        return(
           <div key={item.name}>
            <Product    
                item={item}
                deleteProduct={this.deleteProduct}
                editProduct={this.props.editProduct}
            />
           </div> 
        )
      })
    
    return (
      <div>
        Dashboard
        {result}
      </div>
    )
  }
}

