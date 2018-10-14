import React from 'react'

export default function Product(props) {
    return (
      <div>
        <div>ID: {props.item.product_id}</div>
        <div>Name: {props.item.name}</div>
        <div>Price: {props.item.price}</div>
        <img src={props.item.image} alt={props.name}/>
        <button onClick={() => props.deleteProduct(props.item.product_id)}>Delete</button>
        <button onClick={() => props.editProduct(props.item)}> Edit</button>
      </div>
    )
}