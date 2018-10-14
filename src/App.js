import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Dashboard from './components/Dashboard/Dashboard';
import Form from './components/Form/Form';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();

    this.state = {
      inventoryList: [],
      currentProduct: {},
    }
    this.getInventory = this.getInventory.bind(this)
    this.editProduct = this.editProduct.bind(this)
  }

  componentDidMount() {
    this.getInventory();
  }

  editProduct(product) {
    // console.log(product);
    this.setState({
      currentProduct: product
    })
  }

  getInventory() {
    axios.get('/api/inventory').then(res => {
      this.setState({
        inventoryList: res.data
      })
    })
  }

  render() {
    console.log(this.state.currentProduct);
    return (
      <div className="App">
        <Header />

        <Dashboard 
            inventoryList ={this.state.inventoryList}
            getInventory={this.getInventory}
            editProduct={this.editProduct}/>


        <Form 
            getInventory={this.getInventory}
            currentProduct={this.state.currentProduct}/>
      </div>
    );
  }

}

export default App;
