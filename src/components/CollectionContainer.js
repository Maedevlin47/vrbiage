import WordCard from "./WordCard"

const CollectionContainer = ({words}) => {
    const renderedWords = words.map((wordObj) => {
        return (
            <WordCard key={wordObj.id} wordObj={wordObj} />
        )
    })
    
    return (
        <div>
            {renderedWords}
        </div>
    )
}

export default CollectionContainer