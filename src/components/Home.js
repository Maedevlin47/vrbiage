const Home = () => {
    return (
        <div className="home-text">
            <p>
                <span style={{fontWeight: "bold"}}>Welcome to Vrbiage</span>, an application 
                to help you collect and practice words of interest.
            </p>
            <p>
                You can view your collected words and their definitions on the Words page, or
                practice with them as flashcards on the Flashcards page. Use the Add Word form
                to add a new word to your collection.
            </p>
            <p>
                To remove a word from your collection, click the Delete Word button on the word's
                card on the Collection page. The deleted word will also no longer appear among 
                your flashcards.
            </p>
        </div>
    )
}

export default Home