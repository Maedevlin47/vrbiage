import {useState} from "react"

const Flashcard = ({wordObj}) => {
    const {word, definition} = wordObj
    
    const [showFront, setShowFront] = useState(true)

    const handleClick = () => {
        setShowFront(!showFront)
    }

    return (
        showFront ? 
        <div onClick={handleClick}>
            <h3>{word}</h3>
        </div>
        :
        <div onClick={handleClick}>
            <p>{definition}</p>
        </div>   
    ) 
}

export default Flashcard