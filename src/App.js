import './App.css';
import 'bulma/css/bulma.min.css'
import { Header } from './components/Header'
import { AllCards } from './components/AllCards'
import { Login } from './components/Login'
import { useState } from 'react';

function App({ cardData }) {
  const [login, setLogin] = useState(null)

  return (
    <section className="container">
      {login ? (
        <div>
          <div>
            <Header />
          </div>
          <div>
            <AllCards
              data={cardData} />
          </div>
        </div>
      ) : (
        <div>
          <Login 
          setLogin={setLogin}/>
        </div>
      )}
    </section>



  );
}

export default App;
