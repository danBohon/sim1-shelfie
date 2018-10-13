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
    }
    this.getInventory = this.getInventory.bind(this)
  }

  componentDidMount() {
    this.getInventory();
  }

  getInventory() {
    axios.get('/api/inventory').then(res => {
      this.setState({
        inventoryList: res.data
      })
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Dashboard inventoryList ={this.state.inventoryList}/>
        <Form getInventory={this.getInventory}/>
      </div>
    );
  }

}

export default App;
