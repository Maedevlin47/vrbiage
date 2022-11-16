import WordCard from "./WordCard"

const CollectionContainer = ({words, url, deleteWord}) => {
    const renderedWords = words.map((wordObj) => {
        return (
            <WordCard key={wordObj.id} wordObj={wordObj} url={url} deleteWord={deleteWord} />
        )
    })
    
    return (
        <div id="collection-container">
            {renderedWords}
        </div>
    )
}

export default CollectionContainer