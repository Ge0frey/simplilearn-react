import React, { Component } from 'react'

class StateClass extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
        message: "Subscribe to our channel",
        clickMsg: "SUBSCRIBE"
      }
    }

    handleClick = () => {
        this.setState ({
            message: "Thank you for subscribing to my channel!!!",
            clickMsg: "SUBSRIBED"
        })
    } 

  render() {
    const {message, clickMsg} = this.state
    return (
      <div>
        <p>{message}</p>
        <button onClick={this.handleClick}>{clickMsg}</button>
      </div>
    )
  }
}

export default StateClass