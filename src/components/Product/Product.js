import React from 'react'

export default function Prduct(props) {
  
    return (
      <div>
        <div>Name: {props.item.name}</div>
        <div>Price: {props.item.price}</div>
        <img src={props.item.image} alt={props.name}/>
      </div>
    )
}