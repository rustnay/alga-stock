import React, { useState } from 'react'
import Header from '../Header'

import Button from '../../shared/Button'
import Container from '../../shared/Container'
import './App.css'
import Input from '../../shared/Input'

function TestComponent () {
  return <img src="https://t4.ftcdn.net/jpg/01/36/99/17/240_F_136991730_wMdWUuZB4cTsc5IabZatduaL0Fgcx5Lk.jpg" width="16px" height="16px" alt="search icon"/>
}


function App() {

  const [street, setStreet] = useState('')

  return (
    <div className="App"> 
    <Header title="AlgaStock" />

      <Container>
        <Button onClick={() => window.alert('UIIIU')}
          appendIcon={<TestComponent />}
        > 
          Potato
        </Button>

        <Input label="Street" placeholder="15h" value={street} onChange={e => setStreet(e.target.value)}/>

      </Container>

    </div>
  );
}

export default App