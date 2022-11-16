import './App.css';
import 'bulma/css/bulma.min.css'
import { Header } from './components/Header'
import { AllCards } from './components/AllCards'

function App({ cardData }) {

  return (
  <section className="container">
    <div>
      <Header/>
    </div>
    <div>
      <AllCards 
        data={cardData}/>
    </div>

  </section>

  );
}

export default App;
