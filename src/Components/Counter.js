import React, { Component } from 'react'

export class Counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         countnum: 0
      }
    }

    incrementValue = () => {
        this.setState ({countnum:this.state.countnum+1})
    }

  render() {
    const {countnum} = this.state; 
    return (
      <div>
        <button onMouseEnter={this.incrementValue}>Increment {countnum}</button>
      </div>
    )
  }
}

export default Counter