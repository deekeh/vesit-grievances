import React from 'react';

// Components
import Header from './components/Header';
import Home from './components/Home';

// Styling
import './App.css'
import {Container} from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Container>
        <Home></Home>
      </Container>
    </div>
  );
}

export default App;
