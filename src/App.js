import './App.css';
import 'bulma/css/bulma.min.css'
import {useState} from 'react'
import { Header } from './components/Header'
import { AllCards } from './components/AllCards'
import { MyCards} from './components/MyCards'
import { Friends } from './components/FriendsCards'
import { CreateCard } from './components/CreateCard'

function App({ cardData }) {
  const [page, setPage] = useState('')

  return (
  <section className="container">
    <div>
      <Header
        setPage={setPage}/>
    </div>
  {page === 'allCards' ? (
    <div>
      <AllCards 
        data={cardData}/>
    </div>)
  : page === 'myCards' ? (
    <div>
      <MyCards />
    </div>) 
  : page === 'friends' ? (
    <div>
      <Friends />
    </div>)
  : page === 'createCard' ? (
    <div>
      <CreateCard />
    </div>
  ) : (<div><AllCards data={cardData}/></div>)}
  </section>

  );
}

export default App;
