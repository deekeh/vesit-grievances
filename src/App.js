import React from 'react';

// Components
import Header from './components/Header';
import Home from './components/Home';
import Spost from './components/spost'

// Styling
import './App.css'
import {Container} from 'react-bootstrap'


const App = () => {
  return (
    <div className="App">
      <Header></Header>
      <Container>
        <Spost></Spost>
      </Container>
    </div>
  );
}

export default App;
