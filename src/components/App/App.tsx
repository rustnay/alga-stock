import React from 'react';
import Button from '../Button';
import Header from '../Header';
import './App.css';

function TestComponent () {
  return <img src="https://t4.ftcdn.net/jpg/01/36/99/17/240_F_136991730_wMdWUuZB4cTsc5IabZatduaL0Fgcx5Lk.jpg" width="16px" height="16px" alt="search icon"/>
}


function App() {
  return (
    <div className="App"> 
    <Header title="AlgaStock" />

      <div className="Container">
        <Button onClick={() => window.alert('UIIIU')}
          appendIcon={<TestComponent />}
        > 
          Potato
        </Button>

      </div>

    </div>
  );
}

export default App;