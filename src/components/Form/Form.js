import React, { Component } from 'react'
import axios from 'axios';

export default class Form extends Component {
    constructor() {
        super();

        this.state = {
            imgInput: "",
            productNameInput: "",
            priceInput: "",
        }
        this.createProduct = this.createProduct.bind(this);
    }

    handleImgChange(val) {
        this.setState({ imgInput: val})
        // console.log("img", this.state.imgInput);
    }
 
    handleProductChange(val) {
        this.setState({ productNameInput: val})
        // console.log("name", this.state.productNameInput);   
    }

    handlePriceChange(val) {
        this.setState({ priceInput: val})
        // console.log('price',this.state.priceInput);
    }

    handleCancel() {
        this.setState({ 
            imgInput: "",
            productNameInput: "",
            priceInput: "", 
        });
        // console.log('state', this.state);  
    }

    handleAdd() {
        // this.props.getInventory();
        this.createProduct();
        console.log("add product");
    }

    createProduct() {
        axios.post('/api/product', this.state).then(() => {
            this.props.getInventory();
            this.props.handleCancel();
        })
    }


    render() {
        return (
            <div>
                <input className="input" onChange={ e => this.handleImgChange(e.target.value) } placeholder="Image URL"></input>
                <input className="input" onChange={ e => this.handleProductChange(e.target.value) } placeholder="Product Name"></input>
                <input className="input" onChange={ e => this.handlePriceChange(e.target.value) } placeholder="Price"></input>
                <button onClick={() => this.handleCancel()}>Cancel</button>
                <button onClick={() => this.handleAdd()}>Add to Inventory</button>
            </div>
        )
    }
}