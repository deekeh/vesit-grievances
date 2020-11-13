import React from 'react';
import {HashRouter as Router, Switch, Route} from 'react-router-dom';

// Components
// import Header from './components/Header';
import Home from './components/Home';
<<<<<<< HEAD
import StudentMain from './components/StudentMain'
import StudentAddPost from './components/StudentAddPost'
=======
import UserMain from './components/UserMain'
import Spost from './components/spost'
import Resolve from './components/resolve'

>>>>>>> c3ae4cb514abe78afda45d977c5d9bb6183f56a5
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
          <Route path='/student' exact component={StudentMain} />
          <Route path='/student/add-post' exact component={StudentAddPost} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
