import React from 'react'
import Header from '../Header'

import Button from '../../shared/Button'
import Container from '../../shared/Container'
import './App.css'

function TestComponent () {
  return <img src="https://t4.ftcdn.net/jpg/01/36/99/17/240_F_136991730_wMdWUuZB4cTsc5IabZatduaL0Fgcx5Lk.jpg" width="16px" height="16px" alt="search icon"/>
}


function App() {
  return (
    <div className="App"> 
    <Header title="AlgaStock" />

      <Container>
        <Button onClick={() => window.alert('UIIIU')}
          appendIcon={<TestComponent />}
        > 
          Potato
        </Button>

      </Container>

    </div>
  );
}

export default App