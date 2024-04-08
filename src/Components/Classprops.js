import React, { Children, Component } from 'react'

class Classprops extends Component {
  render() {
    const {name, place, children} = this.props
    return (
      <div>
        <h1>Hello welcome to {place} again {name}</h1>
        <React.Fragment>{children}</React.Fragment>
      </div>
    )
  }
}

export default Classprops