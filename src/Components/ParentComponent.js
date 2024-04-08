import React, { Component } from 'react'
import PureComp from './PureComp'
import RegComp from './RegComp'

export class ParentComponent extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name: "Geofrey Kimani"
      }
    }

    componentDidMount () {
        setInterval (() => {
            this.setState({
                name:"Geofrey Kimani"
            })
        }, 3000)
    }

  render() {
    //console.log("Parent component render")
    return (
      <div>
        I am the parent component
        <PureComp name= {this.state.name}/>
        <RegComp name = {this.state.name}/>
      </div>
    )
  }
}

export default ParentComponent