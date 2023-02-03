import './App.css';
// eslint-disable-next-line
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// eslint-disable-next-line
import Home from './pages/Home';
import Boardpage from './pages/Boardpage';
import Contactpage from './pages/Contactpage';
import Aboutpage from './pages/Aboutpage';


function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/Board' component={Boardpage} />
        <Route path='/Contact' component={Contactpage} />
        <Route path='/About' component={Aboutpage} />

      </Switch>
    </Router>
  );
}

export default App;


// font size: rem 
//