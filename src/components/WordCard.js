const WordCard = ({wordObj}) => {
    const {word, definition} = wordObj
    
    return (
        <div className="word-card">
            <h3>{word}</h3>
            <p>{definition}</p>
        </div>
    )
}

export default WordCard