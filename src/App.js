import { Route, Switch } from 'react-router-dom';
import './App.css';
// import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={ Home } />
      </Switch>
      <Portfolio />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
