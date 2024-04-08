import React, { Component } from 'react'
import UpdatedComponent from './HigherOrderComponents'

class Click extends Component {

  render() {
    const {count, incrementValue} = this.props
    return (
        <div>
            <button onClick={incrementValue}>
              {this.props.name} Clicked {count} time
            </button>
        </div>
    )
  }
}

export default UpdatedComponent(Click, 5);

