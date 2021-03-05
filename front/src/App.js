import './App.css';
import Hero from './components/Hero/Hero';
import { HeroData } from './components/Hero/HeroData';

function App() {
  return (
    <div className="app">
      <Hero slides={HeroData} />
    </div>
  );
}

export default App;
