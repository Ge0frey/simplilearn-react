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
    const {name} = this.state
    //console.log("Parent component render")
    return (
      <div>
        I am the parent component
        <PureComp name= {name}/>
        <RegComp name = {name}/>
      </div>
    )
  }
}

export default ParentComponent