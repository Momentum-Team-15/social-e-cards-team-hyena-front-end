import { Link } from "react-router-dom";

export const Header = ({ setLogin }) => {
    return (
        <header className='hero is-small is-info'>
            <h1 className='hero-body title is-1 has-text-centered'>Corny Cards
            </h1>
                <nav className="navbar is-flex is-justify-content-space-around">
                    <div className="navbar-item title is-5">
                    <Link to="/all">All Cards</Link>
                    </div>
                    <div className="navbar-item title is-5">
                    <Link to="/mycards">My Cards</Link>
                    </div>
                    <div className="navbar-item title is-5">
                    <Link to="/friends">Friends</Link>
                    </div>
                    <div className="navbar-item title is-5">
                    <Link to="/create">Create</Link>
                    </div>
                    <div className="navbar-item title is-5">
                    <Link to="/" onClick={() => setLogin(null)}>Log Out</Link>
                    </div>
                    <div></div>
                </nav>
        </header >
    )
}