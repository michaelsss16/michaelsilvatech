import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes , Route } from 'react-router-dom';

const Sobre = () => <h1>Sobre</h1>;

const App  = () => {
  return (
    <BrowserRouter>
      <Routes >
        <Route exact path="/" component={() => <Home />} />
        <Route path="/sobre" component={() => <Sobre />} />
      </Routes>
    </BrowserRouter>
  );
};

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Curso de canto</h1>
        <p>Teste de publicacao</p>
      </header>
    </div>
  );
}

export default App;
