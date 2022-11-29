import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export const Login = ({ setAuth}) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault()
        axios.post('https://ecard-web-service.onrender.com/auth/token/login/', {
            username: username,
            password: password})
        .then((res) => {
            const token = res.data.auth_token
            setAuth(token, username)
            navigate("/all")
        })
    }

    return (
        <div>
            <header className='hero is-small is-info'>
                <h1 className='hero-body title is-1 has-text-centered'>Corny Cards</h1>
            </header>

                <form className="login-box box">
                <div className="field">
                    <input className="input" type="text" placeholder="username" 
                    onChange={(e) => setUsername(e.target.value)}/>
                </div>
                <div className="field">
                    <input className="input" type="password" placeholder="password" 
                    onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div className="field">
                    <p className="control">
                        <button className='button has-background-danger-light' type="submit"
                            onClick={handleSubmit}>Log In</button>
                    </p>
                </div>
                </form>

        </div>
    )
}