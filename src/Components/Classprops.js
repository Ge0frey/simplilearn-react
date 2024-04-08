import React, { Children, Component } from 'react'

class Classprops extends Component {
  render() {
    const {name, place, children} = this.props
    //console.log(this.props)
    return (
      <div>
        <h1>Hello welcome to {place} again {name}</h1>
        <p>{children}</p>
      </div>
    )
  }
}

export default Classprops