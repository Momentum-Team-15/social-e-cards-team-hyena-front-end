export const Login = ({setLogin}) => {
    return (
        <div>
            <header className='hero is-small is-info'>
                <h1 className='hero-body title is-1 has-text-centered'>Corny Cards</h1>
            </header>

            <div className="box">
                <div className="field">
                    <input className="input" type="email" placeholder="Email" />
                </div>
                <div className="field">
                    <input className="input" type="password" placeholder="Password" />
                </div>
                <div className="field">
                    <p className="control">
                        <button className="button has-background-danger-light" onClick={() => setLogin(true)}>
                            Login
                        </button>
                    </p>
                </div>
            </div>
        </div>
    )
}