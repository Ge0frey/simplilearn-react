import React from "react";

const UpdatedComponent = (OriginalComponent, incrementNumber) => {
    class NewComponent extends React.Component {

        constructor(props) {
            super(props)
          
            this.state = {
               count: 0
            }
          }
      
          incrementValue = () => {
            this.setState ({count:this.state.count + incrementNumber})
        }

        render () {
            return (
                <OriginalComponent
                count = {this.state.count} 
                incrementValue = {this.incrementValue}
                {...this.props}/>
            )
        }
    }
    return NewComponent
}

export default UpdatedComponent