import { useState } from "react"

const Home = () => {

    const [name, setName] = useState("Alvarez")
    const [age, setAge] = useState(25)

    const handleClick = () => {
        setName("Luigi")
        setAge (40)
    }

    return (
        <div>
            <h2>Homepage</h2>
            <p>{name} is {age} years old</p>
            <button onClick={handleClick}>Click here to change name</button>
        </div>
    )
}

export default Home