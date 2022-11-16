const WordCard = ({wordObj, url, deleteWord}) => {
    const {id, word, definition} = wordObj

    const handleDelete = () => {
        fetch(`${url}/${id}`, {method: "DELETE"})
            .then(
                deleteWord(id)
            )
    }

    return (
        <div className="word-card">
            <h3>{word}</h3>
            <p>{definition}</p>
            <button onClick={handleDelete}>Delete Word</button>
        </div>
    )
}

export default WordCard