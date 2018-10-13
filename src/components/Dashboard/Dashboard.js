import React, { Component } from 'react'
import Product from '../../components/Product/Product';

export default class Dashboard extends Component {
    // constructor(props) {
    //     super()
    // }

    componentDidMount() {
        console.log('Dashboard Props', this.props);   
    }


  render() {
      const { inventoryList } = this.props
        
      const result = inventoryList.map( item => {
        return(
           <div key={item.name}>
            <Product    
                item = {item}
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

