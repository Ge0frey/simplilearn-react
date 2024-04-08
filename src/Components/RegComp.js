import React, { Component } from 'react'

export class RegComp extends Component {
  render() {
    const {name} = this.props
    //console.log("Regular component render")
    return (
      <div>I am the regular component {name}</div>
    )
  }
}

export default RegComp