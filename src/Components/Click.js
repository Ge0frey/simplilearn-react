import React, { Component } from 'react'

class Click extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }

    updateClick = () => {
        this.setState ({count:this.state.count+1})
    }

  render() {
    const {count} = this.state
    return (
        <div>
            <button onClick={this.updateClick}>
                Clicked {count} time
            </button>
        </div>
    )
  }
}

export default Click;

