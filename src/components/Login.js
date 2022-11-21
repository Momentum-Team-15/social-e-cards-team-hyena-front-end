import { Link } from "react-router-dom";

export const Login = ({ setLogin }) => {
    return (
        <div>
            <header className='hero is-small is-info'>
                <h1 className='hero-body title is-1 has-text-centered'>Corny Cards</h1>
            </header>
            <div className="login-box box">
                <div className="field">
                    <input className="input" type="email" placeholder="Email" />
                </div>
                <div className="field">
                    <input className="input" type="password" placeholder="Password" />
                </div>
                <div className="field">
                    <p className="control">
                        <Link className='button has-background-danger-light' onClick={() => setLogin(true)} to="/mycards">Log In</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}