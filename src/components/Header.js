import { Link, NavLink } from "react-router-dom"

const Header = () => {
    return (
        <div className="header">
            <Link to ="/">
                <h1 id="maintitle" className="neon">V r b i a g e</h1>
            </Link>
            <br/>
            <NavLink
                to="/words"
                className={isActive => isActive ? "neon" : "nav-link"}
                >
                    Words
            </NavLink>
            <span className="nav-spacer">|</span>
            <NavLink
                to="/flashcards"
                className={isActive => isActive ? "neon" : "nav-link"}
                >
                    Flashcards
                </NavLink>
            <span className="nav-spacer">|</span>
            <NavLink
                to="/new-word"
                className={isActive => isActive ? "neon" : "nav-link"}
                >
                    Add Word
                </NavLink>
        </div>
    )
}

export default Header