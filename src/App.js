import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Header from './components/Header';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/sobre" component={ About } />
        <Route exact path="/portfolio" component={ Portfolio } />
        <Route exact path="/contato" component={ Contact } />
      </Switch>
    </div>
  );
}

export default App;
