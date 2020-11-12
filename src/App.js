import React from 'react';
import {HashRouter as Router, Switch, Route} from 'react-router-dom';

// Components
// import Header from './components/Header';
import Home from './components/Home';
import UserMain from './components/UserMain'

// Styling
import './App.css'
// import {Container} from 'react-bootstrap'


const App = () => {
  return (
    <div className="App">
      {/* <Header></Header> */}
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/u' exact component={UserMain} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
