import './App.css';
import 'bulma/css/bulma.min.css'
import { Login } from './components/Login'
import { useState } from 'react'
import { Header } from './components/Header'
import { AllCards } from './components/AllCards'
import { MyCards } from './components/MyCards'
import { Friends } from './components/FriendsCards'
import { CreateCard } from './components/CreateCard'
import { Routes, Route } from "react-router-dom"

function App({ cardData }) {
  const [login, setLogin] = useState(null)

  return (


    <section className="container">

      {login ? (
        <div>
          <Header
            setLogin={setLogin} />
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
          <Login
            setLogin={setLogin} />
        </div>)}


    </section>

  );
}

export default App;
