import { Link } from "react-router-dom";
import { requestLogout } from "./Requests";

export const Header = ({ setAuth, username, token }) => {

    const handleLogout = () => {
        setAuth(null, '')
        requestLogout(token)
    }

    return (
        <header className='hero is-small is-info'>
            <h1 className='hero-body title is-1 has-text-centered'>Corny Cards</h1>
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
                    <Link to="/" onClick={handleLogout}>Log Out</Link>
                </div>
                <p>Hello {username}!</p>
            </nav>
        </header >
    )
}