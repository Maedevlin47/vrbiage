import './App.css';

import {useState, useEffect} from "react"
import {Switch, Route} from "react-router-dom"

import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./components/Home"
import CollectionContainer from "./components/CollectionContainer"
import FlashcardContainer from "./components/FlashcardContainer"
import Form from "./components/Form"

function App() {
  const url = "http://localhost:9000/words"

  useEffect(() => {
    fetch(url)
      .then(r => r.json())
      .then(setWordsData)
  }, [])

  const [wordsData, setWordsData] = useState([])

  const submitNewWord = (newWord) => {
    setWordsData([...wordsData, newWord])
  }

  return (
    <div className="App">
      {/* <header className="App-header"> */}
      <Header />
      {/* </header> */}
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/words">
          <CollectionContainer words={wordsData} />
        </Route>
        <Route path="/flashcards">
          <FlashcardContainer words={wordsData} />
        </Route>
        <Route path="/new-word">
          <Form url={url} submitNewWord={submitNewWord}/>
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
