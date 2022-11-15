import './App.css';

import {Switch, Route} from "react-router-dom"

import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./components/Home"
import CollectionContainer from "./components/CollectionContainer"
import FlashcardContainer from "./components/FlashcardContainer"
import Form from "./components/Form"

function App() {
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
          <CollectionContainer />
        </Route>
        <Route path="/flashcards">
          <FlashcardContainer />
        </Route>
        <Route path="/new-word">
          <Form />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
