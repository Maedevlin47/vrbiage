import { Link, NavLink } from "react-router-dom"

const Header = () => {
    return (
        <div className="header">
            <Link to ="/">
                <h1 id="maintitle">V r b i a g e</h1>
            </Link>
            <br/>
            <NavLink
                to="/words"
                className="nav-link"
                activeStyle={{background: "pink"}}
                >
                    Words
            </NavLink>
            <span className="nav-spacer">|</span>
            <NavLink
                to="/flashcards"
                className="nav-link"
                activeStyle={{background: "pink"}}
                >
                    Flashcards
                </NavLink>
            <span className="nav-spacer">|</span>
            <NavLink
                to="/new-word"
                className="nav-link"
                activeStyle={{background: "pink"}}
                >
                    Add Word
                </NavLink>
        </div>
    )
}

export default Header