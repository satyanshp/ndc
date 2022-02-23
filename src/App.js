
import './App.css';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import Program from './components/Program/Program';
import Explore from './components/Explore/Explore';
import Event from './components/Event/Event';
import Feature from './components/Feature/Feature';
import Partner from './components/Partner/Partner';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Program/>
      <Explore/>
      <Event/>
      <Feature/>
      <Partner/>
      <Footer />
    </div>
  );
}

export default App;
