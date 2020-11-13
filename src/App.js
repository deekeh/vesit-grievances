import React from 'react';
import {HashRouter as Router, Switch, Route} from 'react-router-dom';

// Components
// import Header from './components/Header';
import Home from './components/Home';
import StudentMain from './components/StudentMain'
import StudentAddPost from './components/StudentAddPost'
import Resolve from './components/StudentPostResolve'
import AdminMain from './components/AdminMain'

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
          {/* student section */}
          <Route path='/student' exact component={StudentMain} />
          <Route path='/student/add-post' exact component={StudentAddPost} />
          <Route path='/student/resolve' exact component={Resolve} />
          {/* admin section */}
          <Route path='/admin' exact component={AdminMain} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
