import React, { Component } from 'react'
import axios from 'axios';

export default class Form extends Component {
    constructor() {
        super();

        this.state = {
            imgInput: "",
            productNameInput: "",
            priceInput: "",
            currentProductId: null,
        }
        this.createProduct = this.createProduct.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }

    componentDidUpdate(prevProps, prevState) {

        if(prevProps.currentProduct.product_id !== this.props.currentProduct.product_id) {
            this.setState({
                imgInput: this.props.currentProduct.image,
                productNameInput: this.props.currentProduct.name,
                priceInput: this.props.currentProduct.price,
                currentProductId: this.props.currentProduct.product_id
            })
        }
    }

    componentDidMount() {
    }

    handleImgChange(val) {
        this.setState({ imgInput: val})
    }
 
    handleProductChange(val) {
        this.setState({ productNameInput: val})  
    }

    handlePriceChange(val) {
        this.setState({ priceInput: val})
    }

    handleCancel() {
        this.setState({ 
            imgInput: "",
            productNameInput: "",
            priceInput: "",
            currentProductId: null, 
        });
    }

    handleAdd() {
        this.createProduct();
    }

    createProduct() {
        axios.post('/api/product', {product: this.state} )
        .then(() => {
            this.props.getInventory();
            this.handleCancel();
        })
    }

    handleEdit() {
        const id = this.state.currentProductId;
        axios.put(`/api/product/${id}`, {product: this.state}).then(() => {
            this.props.getInventory();
            this.handleCancel();
        })
    }

    render() {
        return (
            <div>
                <input className="input" onChange={ e => this.handleImgChange(e.target.value) } placeholder="Image URL" value={this.state.imgInput}></input>
                <input className="input" onChange={ e => this.handleProductChange(e.target.value) } placeholder="Product Name" value={this.state.productNameInput}></input>
                <input className="input" onChange={ e => this.handlePriceChange(e.target.value) } placeholder="Price" value={this.state.priceInput}></input>
                <button onClick={() => this.handleCancel()}>Cancel</button>


                {this.state.currentProductId === null? <button onClick={() => this.handleAdd()}>Add to Inventory</button> : <button onClick={this.handleEdit}>Save Changes</button>}
            </div>
        )
    }
}