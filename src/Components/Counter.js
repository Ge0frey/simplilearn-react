import React, { Component } from 'react'
import UpdatedComponent from './HigherOrderComponents'

export class Counter extends Component {
    
  render() {
    const {count, incrementValue} = this.props; 
    return (
      <div>
        <button onMouseEnter={incrementValue}> Increment {count}</button>
      </div>
    )
  }
}

export default UpdatedComponent(Counter, 10)