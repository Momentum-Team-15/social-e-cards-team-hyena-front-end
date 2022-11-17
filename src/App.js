import './App.css';
import 'bulma/css/bulma.min.css'
import { Login } from './components/Login'
import { useState } from 'react'
import { Header } from './components/Header'
import { AllCards } from './components/AllCards'
import { MyCards} from './components/MyCards'
import { Friends } from './components/FriendsCards'
import { CreateCard } from './components/CreateCard'

function App({ cardData }) {
  const [page, setPage] = useState('')
  const [login, setLogin] = useState(null)

  return (
  <section className="container">

    {login ? (
      <div><Header setPage={setPage} setLogin={setLogin}/></div>
      ) : (
        <div>
      <Login 
      setLogin={setLogin}/>
    </div>)}
    
      {page === 'myCards' && (<div><MyCards /></div>)}
      {page === 'friends' && (<div><Friends /></div>)}
      {page === 'createCard' && (<div><CreateCard /></div>)}
      {page === 'allCards' && (<div><AllCards data={cardData}/></div>)} 

  </section>

  );
}

export default App;
