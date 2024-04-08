import React, { Component } from 'react'

class StateClass extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
        name: "John",
        age: 56
      }
    }

    handleClick = () => {
        this.setState ({
            name: "Ludwig",
            age: 25
        })
    } 

  render() {
    const {name, age} = this.state
    return (
      <div>
        <p>{name} is {age} years old </p>
        <button onClick={this.handleClick}>CLICK</button>
      </div>
    )
  }
}

export default StateClass