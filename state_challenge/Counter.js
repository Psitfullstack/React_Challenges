import React, { useState } from 'react'
import './Counter.css'
export default function Counter() {
      
    //write your logic here

  return (
    <div className="counter">
            <button className="counter--minus" onClick={subtract}>–</button>
            <div className="counter--count">
                <h1>{count}</h1>
            </div>
            <button className="counter--plus" onClick={add}>+</button>
        </div>
  )
}
