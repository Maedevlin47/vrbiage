import Flashcard from "./Flashcard"

const FlashcardContainer = ({words}) => {
    const renderedFlashcards = words.map((wordObj) => {
        return (
            <Flashcard key={wordObj.id} wordObj={wordObj} />
        )
    })
    
    return (
        <div>
            {renderedFlashcards}
        </div>
    )
}

export default FlashcardContainer