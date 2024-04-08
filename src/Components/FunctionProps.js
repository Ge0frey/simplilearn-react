import React from 'react'

function FunctionProps(props) {
    //console.log(props)
    const {name, major} = props
  return (
    <div>
        <h3>My name is {name} and I am a {major} major</h3>
    </div>
  )
}

export default FunctionProps
