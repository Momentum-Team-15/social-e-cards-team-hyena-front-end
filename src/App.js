import './App.css';
import 'bulma/css/bulma.min.css'
import { Login } from './components/Login'
import { Header } from './components/Header'
import { AllCards } from './components/AllCards'
import { MyCards } from './components/MyCards'
import { Friends } from './components/FriendList'
import { CreateCard } from './components/CreateCard'
import { Register } from './components/Register'
import { Routes, Route } from "react-router-dom"
import useLocalStorageState from 'use-local-storage-state';


function App({ cardData }) {
  const [token, setToken] = useLocalStorageState("token", null)
  const [username, setUsername] = useLocalStorageState("username", '') 

  const setAuth = (token, username) => {
    setToken(token)
    setUsername(username)
  }

  const isLoggedIn = token

  return (

    <section className="container">

      {isLoggedIn ? (
        <div>
          <Header token={token} setAuth={setAuth} username={username}/>
          <Routes>
            <Route path="/all" element={<AllCards username={username} token={token}/>} />
            <Route path="/create" element={<CreateCard username={username} token={token}/>} />
            <Route path="/mycards" element={<MyCards data={cardData} username={username} token={token}/>} />
            <Route path="/friends" element={<Friends token={token}/>} />
            <Route path="/" element={<Login />} />
          </Routes>
        </div>
      ) : (
        <div>
          <Routes>
          <Route path="/" element={<Login setAuth={setAuth} />} />
          <Route path="/register" element={<Register setAuth={setAuth}/>} />
          </Routes>
        </div>)}


    </section>

  );
}

export default App;
