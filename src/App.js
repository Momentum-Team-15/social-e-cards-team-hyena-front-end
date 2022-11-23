import './App.css';
import 'bulma/css/bulma.min.css'
import { Login } from './components/Login'
import { Header } from './components/Header'
import { AllCards } from './components/AllCards'
import { MyCards } from './components/MyCards'
import { Friends } from './components/FriendsCards'
import { CreateCard } from './components/CreateCard'
import { Routes, Route } from "react-router-dom"
import useLocalStorageState from 'use-local-storage-state';
import axios from 'axios';

function App({ cardData }) {
  const [token, setToken] = useLocalStorageState('cardToken', null)
  const [username, setUsername] = useLocalStorageState('cardUsername', '') 

  const setAuth = (token, username) => {
    setToken(token)
    setUsername(username)
  }

  const handleLogout = () => {
    axios.post('https://hyena-ecards.onrender.com/auth/token/logout', {}, 
      { headers: { Authorization: `Token ${token}`, }, } )
        .then(() => setAuth(null, ''))}

  const isLoggedIn = username && token

  return (

    <section className="container">

      {isLoggedIn ? (
        <div>
          <Header handleLogout={handleLogout} />
          <Routes>
            <Route path="/all" element={<AllCards data={cardData}/>} />
            <Route path="/create" element={<CreateCard />} />
            <Route path="/mycards" element={<MyCards />} />
            <Route path="/friends" element={<Friends />} />
            <Route path="/" element={<Login />} />
          </Routes>
        </div>
      ) : (
        <div>
          <Login setAuth={setAuth} />
        </div>)}


    </section>

  );
}

export default App;
