import React from 'react'
import services from './Data/services'
import css from "./CSS/services.css"
export default function Services() {
  return (
    <div>
      <h1>Services</h1>
      {services.map(({type},key)=>{
       return(<div key={key} className='serviceCard'>
        <p>{type}</p>
       </div>)
        
      })}
    </div>
  )
}
