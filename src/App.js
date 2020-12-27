import { Route, Switch } from 'react-router-dom';
import './App.css';
// import Footer from './components/Footer';
// import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
// import Portfolio from './components/Portfolio';

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      {/* <Home /> */}
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/sobre" component={ About } />
      </Switch>
      {/* <Portfolio /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
