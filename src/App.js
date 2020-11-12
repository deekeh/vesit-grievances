import React from 'react';

// Components
import Header from './components/Header';
import Home from './components/Home';
import UserMain from './components/UserMain'

// Styling
import './App.css'
import {Container} from 'react-bootstrap'


const App = () => {
  return (
    <div className="App">
      <Header></Header>
      <Container>
        <UserMain />
      </Container>
    </div>
  );
}

export default App;
